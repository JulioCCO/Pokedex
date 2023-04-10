
import React from 'react';
import { Image, SafeAreaView, View } from 'react-native';

export const LoadingScreen = () => {
  return (
    <SafeAreaView>  
    <View>
        <Image className='' source={require('../../assets/pokedex.png')} alt="Pokedex" />
    </View>
    </SafeAreaView>
  )
}
