import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {  Text, View } from 'react-native'
import { Card } from '../../components/Card/Card'

export const Pokedex = () => {
  return (
    <View className="flex-1 items-center justify-center bg-sky-400">
      <Card/>
    </View>
  )
}
