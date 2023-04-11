import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Dimensions, ScrollView, Text, View } from 'react-native'
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
    stats:[],
    sprites: {}
});
  const [Loading, setLoading] = useState(false)
  const [Img, setImg] = useState([1,2,3])
  useEffect(()=>{
    (async ()=>{
      setLoading(true)
      await fetchPokemon(name).then((res)=>{
        setPokemon(res)
        setImg([res.official,res.officialShiny ,...transformObjectToList(res.sprites), `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif` ])
      // setImg(Img => [...Img, `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`])
        setLoading(false)
      })
      
      
      
      


    })();
  }, [route])
  const width = Dimensions.get('window').width;
  return (
    Loading ? <ActivityIndicator className='flex self-center h-full w-full bg-slate-600' size="large" color="white"/> : (
    <ScrollView className='bg-white h-full pt-10'>
      <View className='rounded-bl-[120px]  h-[420px] mb-10'  style={{backgroundColor:color(Pokemon?.types?.[0]?.type?.name)}}>
        <View className='self-start pl-2'>
          <Text className='text-[50px] font-bold text-white self-center pt-10' >{capitalizeFirstLetter(Pokemon?.name || 'bulbasaur')}</Text>
          <Text className='text-[50px] text-white self-center pb-10' > # {Pokemon.id} </Text>
        </View>
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
                              justifyContent: 'center',                              
                          }}
                      >
                        <Image className='absolute w-52 h-52 self-center' source={ require('../../assets/pokebola-blanca.png') }/>
                        {index === Img.length - 1 ?  (
                            <Image source={Img[index]} className='w-60 h-full self-center'/>
                        ): <Image source={Img[index]} className='w-52 h-full self-center'/>}                   
                      </View>
                  )}
              />
      </View>
        <Text className='text-[22px] m-2 text-black font-bold'>Types</Text>
        <View className='flex flex-row self-center '>  
          {Pokemon?.types?.map((type, index) => (
              <Text style={{
                backgroundColor: color(type.type.name),
              }} key={index} className={`text-[16px] m-2 text-white p-2 w-20 h-10 text-center rounded-sm`}>{capitalizeFirstLetter(type.type.name)}</Text>
          ))}
        </View>

        <Text className='text-[22px] m-2 text-black font-bold'>Abilities</Text>
        <View className='flex flex-row self-center'>
          {Pokemon?.abilities?.map((ability, index) => (
              <Text key={index} className='text-[19px] m-2 text-black'>{capitalizeFirstLetter(ability.ability.name)}</Text>
          ))}
        </View>

        <Text className='text-[22px] m-2 text-black font-bold'>Peso</Text>
        <Text className='self-center text-[19px] m-2' >{ Pokemon.weight }kg</Text>


        
          <Text className='text-[22px] m-2 text-black font-bold' >Movimientos</Text>
          <View className='flex flex-row flex-wrap pl-2' >
          {
              Pokemon?.moves.map( ({ move }) => (
                  <Text className='mr-3 text-[19px]'
                      key={ move.name }
                  >
                      { capitalizeFirstLetter(move.name) }
                  </Text>
              ))
          }
          </View>


        

        <Text className='text-[22px] m-2 text-black font-bold' >Stats</Text>
        <View className='pl-2 mb-20' >

          {
            Pokemon?.stats.map( ( stat, i ) => (
                <View 
                    key={ stat.stat.name + i }
                    style={{ flexDirection: 'row' }}
                >
                    <Text
                        className='text-[19px]'
                        key={ stat.stat.name }
                    >
                        { stat.stat.name.toUpperCase()  }: 
                    </Text>

                    <Text
                        className='text-[19px]'
                    >
                        { stat.base_stat }
                    </Text>
                </View>
            ))
          }
        </View>

        
    </ScrollView>
    )
  )
}
