import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pokedex } from '../../views/Pokedex/Pokedex';
import { Trivia } from '../../views/Trivia/Trivia';
import pkball from '../../assets/pkball.webp';
import qmark from '../../assets/qmark.webp';
import { Image } from 'expo-image';

const Tab = createBottomTabNavigator();

export function BottomNav() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Pokedex" options={{headerShown:false,
        tabBarIcon: () => (
          <Image
            source={pkball}
            style={{ width: 30, height: 30 }}
          />
        )
        }} component={Pokedex} />
        <Tab.Screen name="Trivia" options={{headerShown:false, tabBarIcon: () => (
          <Image
            source={qmark}
            style={{ width: 30, height: 30 }}
          />
        )}} component={Trivia} />
      
    </Tab.Navigator>
  );
}