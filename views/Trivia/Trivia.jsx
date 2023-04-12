import { Image } from 'expo-image';
import React, { useEffect,useState } from 'react';
import { fetchEnemy, fetchRandPokemons } from '../../api/fetchRandomPokemon';
import { fetchPokemons } from '../../api/fetchPokemons';
import { TouchableOpacity, View,Text,ActivityIndicator } from 'react-native';

export const Trivia = ({props}) => {
  const [flag, setFlag] = useState(false);
  const [pokeList, setPokeList] = useState({lista: [], random: 0});
  const [cont, setCont] = useState(0);
  const [Loading, setLoading] = useState(false)


  const verifyAnswer = (answer) => { 
    if(answer === pokeList.random.name){
      console.log('Correcto');
      setCont(cont + 1);
    }
    else{
      console.log('Incorrecto');
      setCont(0);
    }
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
    
  },[flag,props]);
  useEffect(() => {
    console.log(pokeList + "lista");
    console.log(pokeList.random + "random");
    console.log("useEffect")
  },[pokeList]);
    // TODO: DESPLGEGAR UNA ALERTA CUANDO LA RESPUESTA SEA CORRECTA O INCORRECTA, ASIGNAR UN CONTADOR DE RACHA, 
  return (
    Loading ? <ActivityIndicator className='flex self-center h-full w-full bg-slate-600' size="large" color="white"/> : (
        <View> 
           
            <Text>Trivia</Text>
            <Text>¿Quién es este Pokémon?</Text>
            <Image source={pokeList.random.official} style={{width: 200, height: 200 ,tintColor:"black"} } />
            { pokeList.lista.map((pokemon) => {
              console.log(pokemon)  
              return (
                  <TouchableOpacity key={pokemon.name} onPress={() => verifyAnswer(pokemon.name)}>
                    <Text>{pokemon.name}</Text>
                  </TouchableOpacity>
                )
              })
            }
            <Text>Contador de racha: {cont}</Text>
        </View>
    )
  )
}
