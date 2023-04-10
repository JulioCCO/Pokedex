
// Para obtener todos los pokemons
// https://pokeapi.co/api/v2/pokemon?limit=649&offset=0

// Para obtener el gif de cada pokemon
//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif

export async function fetchPokemons() {
    const pokemons = [];
    for (let index = 1; index < 100; index++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`);
        if (!response.ok) {
            throw new Error('Failed to fetch Pokemons');
        }
        const results = await response.json();
        pokemons.push({
            name: results.name,
            id: results.id,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${index}.gif`,
            types: results.types,
            abilities: results.abilities,
        })

    };

    return pokemons;
}
