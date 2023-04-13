import { Image } from 'expo-image';
import React, { useEffect,useState } from 'react';
import { fetchRandPokemons } from '../../api/fetchRandomPokemon';
import { TouchableOpacity,Text,ActivityIndicator, ImageBackground, FlatList, ToastAndroid } from 'react-native';
import { capitalizeFirstLetter, waitFor } from '../../utils/utils';
const image = require('../../assets/Group2.png');
export const Trivia = ({route}) => {
  const [flag, setFlag] = useState(false);
  const [pokeList, setPokeList] = useState({lista: [], random: 0});
  const [cont, setCont] = useState(0);
  const [Loading, setLoading] = useState(false)

  const verifyAnswer = (answer) => { 
    if(answer === pokeList.random.name){
      setCont(cont + 1);
      showToast("Respuesta correcta!");
    }
    else{
      setCont(cont -1);
      showToast("Respuesta incorrecta!");
    }
    setFlag(true);
  }

  useEffect(  () => { 
      
     (async () => {
      await waitFor(3000)
      setLoading(true);
      listaP = [];
      listaP = await fetchRandPokemons();
      setPokeList({lista: listaP, random: listaP[Math.floor(Math.random() * 4)]});
      setFlag(false);
      setLoading(false);
    })();
    
  },[cont]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      listaP = [];
      listaP = await fetchRandPokemons();
      setPokeList({lista: listaP, random: listaP[Math.floor(Math.random() * 4)]});
      setFlag(false);
      setLoading(false);
      setCont(0)
    })();
  }, [route])

  const showToast = (msg) => {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  };

  return (
    Loading ? <ActivityIndicator className='flex self-center h-full w-full bg-slate-600' size="large" color="white"/> : (
      <ImageBackground className='w-screen h-screen flex items-center mt-10' source={image} resizeMode='cover'>
        <Text className='font-bold text-[60px] text-white' >Trivia</Text>
            <Text className='font-bold text-white text-[20px]' >¿Quién es este Pokémon?</Text>
            <Image source={pokeList.random.official} style={{width: 200, height: 200 ,tintColor: (flag? "none":"black") } } />
            <Text className='text-lg font-semibold mt-2'>Contador de racha: {cont}</Text>
            <FlatList 
              data={pokeList.lista}
              renderItem={({item}) => (
                <TouchableOpacity className='border rounded-sm m-5 w-40 h-12 flex items-center justify-center bg-slate-50' 
                style={{backgroundColor: (item.name === pokeList.random.name && flag ? '#3fe93f': 'white')}} 
                key={item.name} 
                onPress={() => verifyAnswer(item.name) }>
                  <Text className='p-2 font-semibold text-sm'>{capitalizeFirstLetter(item.name)}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={item => item.name}
              numColumns={2}
            />            
      </ImageBackground>
        
    )
  )
}
