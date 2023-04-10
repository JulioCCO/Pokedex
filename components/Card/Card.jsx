import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { Image } from 'expo-image';
import { capitalizeFirstLetter } from '../../utils/utils';
import { useNavigation } from '@react-navigation/native';

export const Card = ({ id, img, name}) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={()=>{
      console.log(`PRESSED ${name}`)
      navigation.navigate('BottomNav', {
        screen: 'Pokeview',
        params: {id, name}
      })
    }}  className='rounded-md w-40 h-40 bg-white flex justify-center items-center m-2'>
      <Image className='w-20 h-20'  
        source={img} />
      <Text className='bold' >{capitalizeFirstLetter(name)}</Text>
      <Text>{id}</Text>
    </Pressable >
  )
}
