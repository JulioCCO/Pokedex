
import React from 'react'
import {View } from 'react-native'
import  {GetPokemons}  from '../../components/GetPokemons/GetPokemons'

export const Pokedex = () => {
  return (
    <View className="flex-1 items-center justify-center bg-slate-600">
      <GetPokemons/> 
    </View>
  )
}
