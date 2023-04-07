import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pokedex } from '../../views/Pokedex/Pokedex';
import { Trivia } from '../../views/Trivia/Trivia';
import { SafeAreaView } from 'react-native';

const Tab = createBottomTabNavigator();

export function BottomNav() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Pokedex" options={{headerShown:false}} component={Pokedex} />
        <Tab.Screen name="Trivia" options={{headerShown:false}} component={Trivia} />
      
    </Tab.Navigator>
  );
}