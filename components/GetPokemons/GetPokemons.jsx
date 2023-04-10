
import React, { useState, useEffect } from 'react';
import { fetchPokemons } from '../../api/fetchPokemons';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Card } from '../../components/Card/Card';
import { LoadingScreen } from '../../components/LoadingScreen/LoadingScreen';
import { waitFor } from '../../utils/utils';
import { FlatList } from 'react-native-gesture-handler';
import { ActivityIndicator, SafeAreaView } from 'react-native';

export const GetPokemons = () => {

    const [query, setQuery] = useState('');
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const fetchAllPokemons = async () => {
            setLoading(true);
            const listaPokemones = await fetchPokemons(1, 50)
            setPokemons(listaPokemones);
            await waitFor(1000);
        }
        // call the function
        fetchAllPokemons().then(() => setLoading(false))
    }, [])

    //if (loading || !pokemons) return <LoadingScreen />

    // filtro de busqueda en el input
    const filteredPokemons = pokemons?.filter((pokemon) => {
        return pokemon.name.toLowerCase().match(query.toLowerCase())
    })

    const handlePagination = async () => {
        setLoading(true);
        const listaPokemones = await fetchPokemons(pokemons.length, pokemons.length + 50);
        setPokemons([...pokemons, ...listaPokemones]);
        setLoading(false);

    }

    return (
        <SafeAreaView className='mt-10'>
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
                onEndReachedThreshold={0.5}
                onEndReached={()=>{
                    handlePagination();
                }}
            />
            {loading && <ActivityIndicator size="large" color="#3D3D3D" />}
        </SafeAreaView>

    )
}


