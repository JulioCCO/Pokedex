import React, { useEffect, useRef, useState } from 'react';
import { Pressable, Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FadeInImage } from '../FadeInImage/FadeInImage';
import ImageColors from 'react-native-image-colors';

const windowWidth = Dimensions.get('window').width

export const Card = ({ id, picture, name }) => {

  const [bgColor, setBgColor] = useState('grey');
  const isMounted = useRef(true);
  const navigation = useNavigation();

  useEffect(() => {

    ImageColors?.getColors(picture, { fallback: 'grey' })
      .then(colors => {

        if (!isMounted.current) return;

        (colors.platform === 'android')
          ? setBgColor(colors.dominant || 'grey')
          : setBgColor(colors.background || 'grey')

      });

    return () => {
      isMounted.current = false
    }

  }, [])

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('BottomNav', {
          screen: 'Pokeview',
          color: bgColor,
          params: { id, name }
        })
      }} >
      <View style={{
        ...styles.cardContainer,
        width: windowWidth * 0.4,
        backgroundColor: bgColor
      }}>
        <FadeInImage
          uri={picture}
          style={styles.pokemonImage}
        />
        <View>
          <Text style={styles.name}>
            {name}
            {'\n#' + id}
          </Text>
        </View>
      </View>
    </Pressable >
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    // backgroundColor: 'grey',
    height: 120,
    width: 160,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    left: 10
  },
  pokebola: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: -25,
    bottom: -25
  },
  pokemonImage: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: -8,
    bottom: -5
  },
  pokebolaContainer: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    overflow: 'hidden',
    opacity: 0.5
  }
});