
export const fetchRandPokemons = async () => {
    pokeInfoList = [];
    let i = 0;
    while( i<4){   
        const randomPkm = Math.floor(Math.random() * 649);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPkm}`) 
        if (!response.ok) {
            throw new Error('Failed to fetch Moves');
        }
        const results = await response.json();  
        const pokeInfo = {
            name: results.name,
            official: results.sprites.other["official-artwork"].front_default,
        };
        //console.log(pokemon.name);
        if(!pokeInfoList.includes(pokeInfo)){
            console.log(pokeInfo.name + ' no está en la lista')
            //setPokeList({lista: [...pokeList.lista, pokemon], random: ""});

            pokeInfoList.push(pokeInfo);
            ++i; 
          }
    }
    //pokeRand = pokeInfoList[Math.floor(Math.random() * 4)];
    return pokeInfoList;
}