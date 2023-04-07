

import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

/**
 * Web client ID: 701681194274-27kc5anlhmcm2gjs9lelqq77hn4kfmnk.apps.googleusercontent.com
 * iOS client ID: 701681194274-2vljra5omfap83rg76skf7rehpui6hoi.apps.googleusercontent.com
 * Android client ID: 701681194274-dapdase4pi4divnjlp1kdp3ale1unrh7.apps.googleusercontent.com
 */

WebBrowser.maybeCompleteAuthSession();

export const SingIn = () => {
    const navigation = useNavigation<any>();
    const [accessToken, setAccessToken] = React.useState<string | null>(null);
    const [user, setUser] = React.useState<any>(null);
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
            navigation.navigate('BottomNav');
        }
    }, [response, accessToken]);

    async function fetchUserInformation() {
        let response = await fetch('https://www.googleapis.com/userinfo/v2/me', {
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        const userInfo = await response.json();
        setUser(userInfo);
    }

    const ShowUserInfo = () => {
        if (user) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 35, fontWeight: 'bold', marginBottom: 20 }}>Welcome</Text>
                    <Image source={{ uri: user?.picture }} style={{ width: 200, height: 200, borderRadius: 100, marginBottom: 20 }} />
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{user?.name}</Text>
                </View>
            )
        }
        return null;
    }

    return (
        <View style={styles.container} >
            {user && <ShowUserInfo />}
            {user === null &&
                <>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 20 }}>Sign In</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>Please sign in to continue</Text>
                    <TouchableOpacity
                        disabled={!request}
                        onPress={() => {
                            promptAsync();
                        }}>
                        <Image source={require('../../assets/google.png')} style={{ width: 200, height: 50, marginBottom: 20 }} />
                    </TouchableOpacity>
                </>
            }
        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
