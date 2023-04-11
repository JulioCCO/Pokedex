
// Para obtener todos los pokemons
// https://pokeapi.co/api/v2/pokemon?limit=649&offset=0

// Para obtener el gif de cada pokemon
//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif

export async function fetchPokemons(currentPoke = 1, nextPoke = 100) {
    const pokemons = [];
    for (let index = currentPoke; index < nextPoke; index++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`);
        if (!response.ok) {
            throw new Error('Failed to fetch Pokemons');
        }
        const results = await response.json();
        pokemons.push({
            name: results.name,
            id: results.id,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${results.id}.png`,
        })

    };

    return pokemons;
}
