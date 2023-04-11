import { useEffect, useRef, useState } from 'react';

export const usePokemonPaginated = () => {
    
    const [ isLoading, setIsLoading ] = useState(true);
    const [ simplePokemonList, setSimplePokemonList ] = useState([]);
    const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');
    
    const loadPokemons = async() => {
        setIsLoading(true);
        const resp = await fetch( nextPageUrl.current );
        const data = await resp.json();
        nextPageUrl.current = data.next;     
        mapPokemonList( data.results ) ;
    }

    const mapPokemonList = ( pokemonList ) => {

        const newPokemonList = pokemonList.map(({ name, url }) => {

            const urlParts = url.split('/');
            const id = urlParts[ urlParts.length - 2 ];
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
            
            return { id, picture, name };

        });

        setSimplePokemonList([ ...simplePokemonList, ...newPokemonList  ]);
        setIsLoading(false);
    }

    useEffect(() => {
        loadPokemons();
    }, [])

    return {
        isLoading,
        simplePokemonList,
        loadPokemons
    }

}
