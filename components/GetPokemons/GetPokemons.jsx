
import React, { useState, useEffect } from 'react';
import { fetchPokemons } from '../../api/fetchPokemons';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Card } from '../../components/Card/Card';
import { LoadingScreen } from '../../components/LoadingScreen/LoadingScreen';
import { waitFor } from '../../utils/utils';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';

export const GetPokemons = () => {

    const [query, setQuery] = useState('');
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchAllPokemons = async () => {
            setLoading(true);
            const listaPokemones = await fetchPokemons()
            setPokemons(listaPokemones);
            await waitFor(1000);
        }
        // call the function
        fetchAllPokemons().then(() => setLoading(false))
    }, [])

    if (loading || !pokemons) return <LoadingScreen />

    // filtro de busqueda en el input
    const filteredPokemons = pokemons?.filter((pokemon) => {
        return pokemon.name.toLowerCase().match(query.toLowerCase())
    })

    return (
        <SafeAreaView className='mt-10'  >
            <SearchBar query={query} setQuery={setQuery} />
            <FlatList
                data={filteredPokemons.length > 0 ? filteredPokemons : pokemons}
                numColumns={2}
                renderItem={({ item }) =>
                    <Card
                        id={item.id}
                        name={item.name}
                        img={item.image}
                    />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>

    )
}


