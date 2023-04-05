import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pokedex } from '../../views/Pokedex/Pokedex';
import { Trivia } from '../../views/Trivia/Trivia';

const Tab = createBottomTabNavigator();

export function BottomNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Pokedex" component={Pokedex} />
      <Tab.Screen name="Trivia" component={Trivia} />
    </Tab.Navigator>
  );
}