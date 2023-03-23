import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParams} from './Tab1';
import SearchScreen from '../screens/SearchScreen';
import PokemonScreen from '../screens/PokemonScreen';

const Tab2 = createStackNavigator<RootStackParams>();

const Tab2Screen = () => {
  return (
    <Tab2.Navigator screenOptions={{headerShown: false}}>
      <Tab2.Screen name="Home" component={SearchScreen} />
      <Tab2.Screen name="Pokemon" component={PokemonScreen} />
    </Tab2.Navigator>
  );
};

export default Tab2Screen;
