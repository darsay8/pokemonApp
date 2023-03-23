import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PokemonScreen from '../screens/PokemonScreen';
import {SimplePokemon} from '../interfaces/IPokemon';

export type RootStackParams = {
  Home: undefined;
  Pokemon: {simplePokemon: SimplePokemon; color: string};
};

const Tab1 = createStackNavigator<RootStackParams>();

const Tab1Screen = () => {
  return (
    <Tab1.Navigator screenOptions={{headerShown: false}}>
      <Tab1.Screen name="Home" component={HomeScreen} />
      <Tab1.Screen name="Pokemon" component={PokemonScreen} />
    </Tab1.Navigator>
  );
};

export default Tab1Screen;
