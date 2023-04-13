

import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

/**
 * Web client ID: 701681194274-27kc5anlhmcm2gjs9lelqq77hn4kfmnk.apps.googleusercontent.com
 * iOS client ID: 701681194274-2vljra5omfap83rg76skf7rehpui6hoi.apps.googleusercontent.com
 * Android client ID: 701681194274-dapdase4pi4divnjlp1kdp3ale1unrh7.apps.googleusercontent.com
 */

WebBrowser.maybeCompleteAuthSession();

const image = require('../../assets/BGDesign.png');

export const SingIn = () => {
    const navigation = useNavigation();
    const [accessToken, setAccessToken] = React.useState(null);
    const [user, setUser] = React.useState(null);
    const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
        clientId: '701681194274-27kc5anlhmcm2gjs9lelqq77hn4kfmnk.apps.googleusercontent.com',
        iosClientId: '701681194274-2vljra5omfap83rg76skf7rehpui6hoi.apps.googleusercontent.com',
        androidClientId: '701681194274-dapdase4pi4divnjlp1kdp3ale1unrh7.apps.googleusercontent.com',
    });

    React.useEffect(() => {
        if (response?.type === 'success') {
            const { id_token } = response.params;
            setAccessToken(id_token);
            accessToken && fetchUserInformation();
            navigation.navigate('BottomNav')
        }
    }, [response, accessToken]);

    // no es necesaria
    async function fetchUserInformation() {
        let response = await fetch('https://www.googleapis.com/userinfo/v2/me', {
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        const userInfo = await response.json();
        setUser(userInfo);
    }

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.ImageBackground} source={image} resizeMode="cover" >
                {user === null &&
                    <>
                        <Text style={{ fontSize: 40, fontWeight: 'bold', marginBottom: 20, color: '#E84236'}}>Sign In</Text>
                        <TouchableOpacity
                            style={{ width: 170, height: 80, marginBottom: 10,flex:1/4 }}
                            disabled={!request}
                            onPress={() => {
                                promptAsync();
                            }}>
                            <Animated.Image source={require('../../assets/masterBall.png')} style={{ width: '100%', height: '100%', marginBottom: 10 }} />
                        </TouchableOpacity>
                        
                        <Text style={{ fontSize: 15, fontWeight: 'bold', marginBottom: 20 }}>Touch the Masterball to enter</Text>
                    </>
                }
            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
    ImageBackground: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        
    },
});
