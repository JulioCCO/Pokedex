import React from 'react';
import { Text, View } from 'react-native';
import { Image } from 'expo-image';
import { capitalizeFirstLetter } from '../../utils/utils';

export const Card = ({ id, img, name}) => {

  return (
    <View className='rounded-md w-40 h-40 bg-white flex justify-center items-center m-2'>
      <Image className='w-20 h-20'  
        source={img} />
      <Text className='' >{capitalizeFirstLetter(name)}</Text>
      <Text>{id}</Text>
    </View>
  )
}
