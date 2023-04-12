// import fetchMoves from "./fetchMoves";

export async function fetchPokemonType(pokeName) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}/`)

    if (!response.ok) {
        throw new Error('Failed to fetch Pokemons');

    }
    const results = await response.json();

    return  results.types;

}