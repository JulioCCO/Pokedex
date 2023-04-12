// import fetchMoves from "./fetchMoves";

export async function fetchPokemon(pokeName) {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokeName)

    if (!response.ok) {
        throw new Error('Failed to fetch Pokemons');

    }
    const results = await response.json();
    
    const pokeInfo = {
        name: results.name,
        id: results.id,
        weight: results.weight,
        abilities: results.abilities,
        moves: results.moves,
        types: results.types,
        stats: results.stats,
        sprites: results.sprites,
        official: results.sprites.other["official-artwork"].front_default,
        officialShiny: results.sprites.other["official-artwork"].front_shiny
    };
    return pokeInfo;

}