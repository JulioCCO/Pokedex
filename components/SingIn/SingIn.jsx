import React from 'react';
import * as Google from 'expo-auth-session/providers/google';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const image = require('../../assets/BGDesign.png');

export const SingIn = () => {

    const navigation = useNavigation();
    const [accessToken, setAccessToken] = React.useState();
    const [user, setUser] = React.useState(null);

    const [request, response, promptAsync] = Google.useAuthRequest({
        androidClientId: '701681194274-dapdase4pi4divnjlp1kdp3ale1unrh7.apps.googleusercontent.com',
        iosClientId: '701681194274-2vljra5omfap83rg76skf7rehpui6hoi.apps.googleusercontent.com',
        expoClientId: '701681194274-27kc5anlhmcm2gjs9lelqq77hn4kfmnk.apps.googleusercontent.com',
    });


    React.useEffect(() => {
        if (response?.type === 'success') {
            setAccessToken(response.authentication.accessToken);
        }
    }, [response]);

    React.useEffect(() => {
        if (accessToken !== undefined) {
            fetchUserInformation();
        }
    }, [accessToken]);

    React.useEffect(() => {
        if (user !== null) {
            console.log("name: " + user.name);
            console.log("email: " + user.email);
            navigation.navigate('BottomNav');
        }
    }, [user]);

    const fetchUserInformation = async () => {
        let response = await fetch('https://www.googleapis.com/userinfo/v2/me', {
            headers: { Authorization: `Bearer ${accessToken}` }
        });
        const data = await response.json();
        setUser(data);
    }

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.ImageBackground} source={image} resizeMode="cover" >
                <Text style={{ fontSize: 40, fontWeight: 'bold', marginBottom: 20, color: '#E84236' }}>Sign In</Text>
                <TouchableOpacity
                    style={{ width: 170, height: 80, marginBottom: 10, flex: 1 / 4 }}
                    disabled={!request}
                    onPress={() => { promptAsync({ useProxy: true, showInRecents: true }) }}
                >
                    <Animated.Image source={require('../../assets/masterBall.png')} style={{ width: '100%', height: '100%', marginBottom: 10 }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 15, fontWeight: 'bold', marginBottom: 20 }}>Touch the Masterball to enter</Text>
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
