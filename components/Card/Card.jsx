import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { Image } from 'expo-image';
import { capitalizeFirstLetter } from '../../utils/utils';
import { useNavigation } from '@react-navigation/native';

export const Card = ({ id, img, name }) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => {
      console.log(`PRESSED ${name}`)
      navigation.navigate('BottomNav', {
        screen: 'Pokeview',
        params: { id, name }
      })
    }} className='rounded-md w-40 h-44 bg-white border border-cyan-500 m-4 flex-col'>
      <View className='flex bg-slate-700 grow'>
        <Image className='w-24 h-24 mx-auto mt-2 '
          source={img} />
      </View>
      <View className='flex bg-red-600 mx-' >
        <Text className='font-bold'>{capitalizeFirstLetter(name)}</Text>
        <Text className='font-bold'>{id}</Text>
      </View>
    </Pressable >
  )
}
