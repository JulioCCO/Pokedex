import React, { useEffect, useRef, useState } from 'react';
import { Pressable, Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FadeInImage } from '../FadeInImage/FadeInImage';
import { fetchPokemonType } from '../../api/fetchPokemonTypes';
import { color } from '../../utils/utils';

const windowWidth = Dimensions.get('window').width

export const Card = ({ id, picture, name }) => {

   const [type, setType] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    (async () => {
      await fetchPokemonType(id).then((res) => {
        setType(res)
        }).catch((err) => {
          setType([{"slot": 1, "type": {"name": "normal", "url": "https://pokeapi.co/api/v2/type/10/"}}])
        })
    })();
  }, [])

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('BottomNav', {
          screen: 'Pokeview',
          params: { id, name }
        })
      }}
    >
      <View style={{
        ...styles.cardContainer,
        width: windowWidth * 0.4,
        backgroundColor: color(type[0]?.type?.name),
      }}>
        <Text style={styles.name}>
          {name}
          {'\n#' + id}
        </Text>
        <View style={styles.pokebolaContainer}>
          <Image
            source={require('../../assets/pokebola-blanca.png')}
            style={styles.pokebola}
          />
        </View>
        <FadeInImage
          uri={picture}
          style={styles.pokemonImage}
        />
      </View>
    </Pressable >
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
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
    top: 0,
    left: 6
  },
  pokebola: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: -10,
    bottom: -20,
    opacity: 0.5

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