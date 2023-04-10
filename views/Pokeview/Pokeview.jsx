import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Dimensions, Text, View } from 'react-native'
import { fetchPokemon } from '../../api/fetchPokemon';
import { Image } from 'expo-image';
import { capitalizeFirstLetter, color, transformObjectToList } from '../../utils/utils';
import Carousel from 'react-native-reanimated-carousel';

export const Pokeview = ({route}) => {
  const {id, name} = route.params;
  const [Pokemon, setPokemon] = useState({
    name: '',
    abilities: [],
    moves: [],
    types: [],
    sprites: {}
});
  const [Loading, setLoading] = useState(false)
  const [Img, setImg] = useState([1,2,3])
  useEffect(()=>{
    (async ()=>{
      setLoading(true)
      const pokemon = await fetchPokemon(name)
      console.log(pokemon)
      setPokemon(pokemon)
      setLoading(false)
      
      setImg(transformObjectToList(pokemon.sprites))
      setImg(Img => [...Img, `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`])


    })();
  }, [route])
  const width = Dimensions.get('window').width;
  return (
    Loading ? <ActivityIndicator className='flex self-center h-full w-full bg-slate-600' size="large" color="white"/> : (
    <View className='bg-slate-600 h-full pt-10'>
        <Text className='text-[50px] text-white self-center pt-10 pb-10' >{capitalizeFirstLetter(Pokemon?.name || 'bulbasaur')}</Text>
        <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={false}
                data={Img || [1,2,3]}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (
                    <View
                        style={{
                            flex: 1,
                            borderWidth: .5,
                            justifyContent: 'center',
                            backgroundColor: 'white',
                            backgroundColor: color(Pokemon?.types?.[0]?.type?.name)
                        }}
                    >
                        {index === Img.length - 1 ?  (
                            <Image source={Img[index]} className='w-52 h-full self-center'/>
                        ): <Image source={Img[index]} className='w-40 h-full self-center'/>}

                        
                    </View>
                )}
            />
        <Text className='text-[20px] m-2 text-white'>Types</Text>
        <View className='flex flex-row self-center '>  
          {Pokemon?.types?.map((type, index) => (
              <Text style={{
                backgroundColor: color(type.type.name),
              }} key={index} className={`text-[16px] m-2 text-white p-2 w-20 h-10 text-center rounded-sm`}>{capitalizeFirstLetter(type.type.name)}</Text>
          ))}
        </View>
        <Text className='text-[20px] m-2 text-white'>Abilities</Text>
        <View className='flex flex-row self-center'>
          {Pokemon?.abilities?.map((ability, index) => (
              <Text key={index} className='text-[20px] m-2 text-white'>{capitalizeFirstLetter(ability.ability.name)}</Text>
          ))}
        </View>


    </View>
    )
  )
}
