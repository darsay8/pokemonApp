import {StackScreenProps} from '@react-navigation/stack';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {RootStackParams} from '../navigator/StackNavigator';
import {styles} from '../theme/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FadeInImage from '../components/FadeInImage';

interface Props extends StackScreenProps<RootStackParams, 'Pokemon'> {}

const PokemonScreen = ({navigation, route}: Props) => {
  const {simplePokemon, color} = route.params;

  const {top} = useSafeAreaInsets();
  const {name, picture} = simplePokemon;

  return (
    <View style={styles.container}>
      <View
        style={{
          height: 370,
          backgroundColor: color,
          // zIndex: 999,
          borderBottomRightRadius: 500,
          borderBottomLeftRadius: 500,
        }}>
        <View style={styles.row}>
          <View
            style={{
              ...styles.header,
            }}>
            <TouchableOpacity
              onPress={() => navigation.pop()}
              activeOpacity={0.8}
              style={
                {
                  // position: 'absolute',
                }
              }>
              <Icon name="arrow-back-outline" color="white" size={30} />
            </TouchableOpacity>
            <Text style={{...styles.title, color: 'white'}}>
              {simplePokemon.name}
            </Text>
            <Image
              source={require('../assets/pokeball-white.png')}
              style={{
                width: 250,
                height: 250,
                left: 50,
                opacity: 0.6,
              }}
            />
            <FadeInImage
              uri={picture}
              style={{width: 250, height: 250, position: 'absolute', top: -180}}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
export default PokemonScreen;

const stylesPokemon = StyleSheet.create({});
