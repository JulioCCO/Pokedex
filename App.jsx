import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomNav } from './components/BottomNav/BottomNav';
import { SingIn } from './components/SingIn/SingIn';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='SignIn' >
        <Stack.Screen name="SingIn" options={{ headerShown: false }} component={SingIn} />
        <Stack.Screen name="BottomNav" options={{ headerShown: false }} component={BottomNav} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
