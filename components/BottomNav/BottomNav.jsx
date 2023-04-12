import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pokedex } from '../../views/Pokedex/Pokedex';
import { Trivia } from '../../views/Trivia/Trivia';
import pkball from '../../assets/pkball.webp';
import qmark from '../../assets/qmark.webp';
import { Image } from 'expo-image';
import { Pokeview } from '../../views/Pokeview/Pokeview';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export function BottomNav() {
  const naviagation = useNavigation();
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
        <Tab.Screen name="Trivia" listeners={{
          tabPress: e => {
            naviagation.navigate("Trivia", {date: new Date()})
           
          }
        }}  options={{headerShown:false, tabBarIcon: () => (
          <Image
            source={qmark}
            style={{ width: 30, height: 30 }}
          />
        )}} component={Trivia} 
            
        />

        <Tab.Screen name="Pokeview" options={{
                tabBarButton: () => null,
                headerShown:false,
                tabBarVisible:false //hide tab bar on this screen
            }}
            component={Pokeview}
            />
      
    </Tab.Navigator>
  );
}