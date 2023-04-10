import React from 'react';
import { Text, View } from 'react-native';
import { Image } from 'expo-image';

export const Card = ({ id, img, name}) => {

  console.log(id);
  console.log(img);
  console.log(name);

  return (
    <View className='rounded-md w-40 h-40 bg-white flex justify-center items-center m-2'>
      <Image className='w-20 h-20'  
        source={img} />
      <Text>{name}</Text>
      <Text>{id}</Text>
    </View>
  )
}
