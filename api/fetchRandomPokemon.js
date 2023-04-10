import fetchMoves from "./fetchMoves";

export const fetchEnemy = async () => {
    const randomPkm = Math.floor(Math.random() * 649);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPkm}`)

    if (!response.ok) {
        throw new Error('Failed to fetch Moves');

    }
    const results = await response.json();
    const moveslist = []
    for (let index = 0; index < 4; index++) {
        let randomMoveNumber = Math.floor(Math.random() * results.moves.length);
        const resp = await fetchMoves(results.moves[randomMoveNumber].move.url);
        moveslist.push({
            name: resp.name,
            accuracy: resp.accuracy,
            power: resp.power,
            pp: resp.pp,      
        });

    }

    
    const pokeInfo = {
        name: results.name,
        abilities: results.abilities,
        moves: moveslist,
        types: results.types,
        sprites: results.sprites,
    };
    return pokeInfo;
    
    
}