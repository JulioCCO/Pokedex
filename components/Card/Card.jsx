import React, { Fragment } from 'react'
import { Image, Text, View } from 'react-native'
import bublasaur from '../../assets/Bulbasaur.webp'
export const Card = () => {
  return (
    <View className='rounded-md w-32 h-40 bg-white flex justify-center items-center shadow-lg shadow-indigo-950'>
        <Image source={{
            width: 100,
            height: 100,
            uri: bublasaur
        }} />
        <Text className=''>Bulbasaur</Text>
        <Text>I am green</Text>
    </View>
  )
}
