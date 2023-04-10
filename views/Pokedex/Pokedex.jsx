
import React from 'react'
import { View } from 'react-native'
import { GetPokemons } from '../../components/GetPokemons/GetPokemons'
import { ImageBackground, StyleSheet, Text } from 'react-native';

const image = require('../../assets/BGDesign.png');

export const Pokedex = () => {
  return (
    <View style={styles.container}>
      <ImageBackground className='w-full h-full' source={image} resizeMode='cover'>
        <GetPokemons/>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});