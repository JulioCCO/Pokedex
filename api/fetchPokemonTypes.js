// import fetchMoves from "./fetchMoves";

export async function fetchPokemon(pokeName) {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokeName)

    if (!response.ok) {
        throw new Error('Failed to fetch Pokemons');

    }
    const results = await response.json();
    
    const pokeTypes = {

        types: results.types[0].type.name,
        
    };
    console.log("pokeTypes: " + pokeTypes.types)
    return pokeTypes;

}