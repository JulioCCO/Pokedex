import { Image } from 'expo-image';
import React, { useEffect,useState } from 'react';
import { fetchEnemy, fetchRandPokemons } from '../../api/fetchRandomPokemon';
import { fetchPokemons } from '../../api/fetchPokemons';
import { TouchableOpacity, View,Text,ActivityIndicator } from 'react-native';

export const Trivia = () => {
  const [flag, setFlag] = useState(false);
  const [pokeList, setPokeList] = useState({lista: [], random: 0});

  const [Loading, setLoading] = useState(false)


  const verifyAnswer = (answer) => { 
    if(answer === pokeList.random.name)
      console.log('Correcto');
      
    else
      console.log('Incorrecto');
    setFlag(true);
  }

  useEffect(  () => {
     (async () => {
      setLoading(true);
      listaP = [];
      listaP = await fetchRandPokemons();
      setPokeList({lista: listaP, random: listaP[Math.floor(Math.random() * 4)]});
      setFlag(false);
      setLoading(false);
    })();
    
  },[flag]);
  useEffect(() => {
    console.log(pokeList + "lista");
    console.log(pokeList.random + "random");
    console.log("useEffect")
  },[pokeList]);
    
  return (
    Loading ? <ActivityIndicator className='flex self-center h-full w-full bg-slate-600' size="large" color="white"/> : (
        <View> 
           
            <Text>Trivia</Text>
            <Text>¿Quién es este Pokémon?</Text>
            <Image source={pokeList.random.official} style={{width: 200, height: 200}}/>
            { pokeList.lista.map((pokemon) => {
              console.log(pokemon)  
              return (
                  <TouchableOpacity key={pokemon.name} onPress={() => verifyAnswer(pokemon.name)}>
                    <Text>{pokemon.name}</Text>
                  </TouchableOpacity>
                )
              })
            }
        </View>
    )
  )
}
