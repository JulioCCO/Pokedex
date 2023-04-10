// import fetchMoves from "./fetchMoves";

export async function fetchPokemon(pokeName) {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokeName)

    if (!response.ok) {
        throw new Error('Failed to fetch Pokemons');

    }
    const results = await response.json();
    const moveslist = [];

    // results.moves.map(async (move) => {
    //     const resp = await fetchMoves(move.move.url);
    //     moveslist.push({
    //         name: resp.name,
    //         accuracy: resp.accuracy,
    //         power: resp.power,
    //         pp: resp.pp,
    //     });
    // })

    const pokeInfo = {
        name: results.name,
        abilities: results.abilities,
        moves: moveslist,
        types: results.types,
        sprites: results.sprites,
    };
    return pokeInfo;

}