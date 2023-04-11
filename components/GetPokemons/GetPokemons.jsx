
import React, { useState } from 'react';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Card } from '../../components/Card/Card';
import { FlatList } from 'react-native-gesture-handler';
import { ActivityIndicator, SafeAreaView } from 'react-native';
import { usePokemonPaginated } from '../../Customhooks/usePokemonPaginated'

export const GetPokemons = () => {

    const { simplePokemonList, loadPokemons } = usePokemonPaginated();
    const [query, setQuery] = useState('');

    // filtro de busqueda en el input
    const filteredPokemons = simplePokemonList?.filter((pokemon) => {
        return pokemon?.name.toLowerCase().match(query.toLowerCase())
    })

    return (
        <SafeAreaView className='mt-10 items-center'>
            <SearchBar query={query} setQuery={setQuery} />
            <FlatList
                data={simplePokemonList ? filteredPokemons : []}
                numColumns={2}
                renderItem={({ item }) =>
                    <Card
                        id={item.id}
                        name={item.name}
                        picture={item.picture}
                    />}
                keyExtractor={item => item.id}
                onEndReached={loadPokemons}
                onEndReachedThreshold={0.5}
                ListFooterComponent={(
                    <ActivityIndicator
                        style={{ height: 100 }}
                        size={'large'}
                        color="grey"
                    />
                )}
            />
        </SafeAreaView>
    )
}


