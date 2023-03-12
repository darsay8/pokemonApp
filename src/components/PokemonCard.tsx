import {useEffect, useState, useRef} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ImageColors from 'react-native-image-colors';
import {SimplePokemon} from '../interfaces/IPokemon';
import FadeInImage from './FadeInImage';

const windowWidth = Dimensions.get('window').width;

interface Props {
  pokemon: SimplePokemon;
}

const PokemonCard = ({pokemon}: Props) => {
  const [bgColor, setBgColor] = useState('#E8E8E8');
  const isMounted = useRef(true);

  useEffect(() => {
    ImageColors.getColors(pokemon.picture, {}).then(colors => {
      // if (!isMounted.current) {
      colors.platform === 'ios'
        ? setBgColor(colors.background)
        : setBgColor(colors.dominant || '#E8E8E8');
      // }
    });

    // return () => {
    //   isMounted.current = false;
    // };
  }, []);

  return (
    <TouchableOpacity>
      <View
        style={{
          ...stylesPokemonCard.card,
          width: windowWidth * 0.388,
          backgroundColor: bgColor,
        }}>
        <View>
          <Text>
            {pokemon.name}
            {'\n#' + pokemon.id}
          </Text>
        </View>

        <View style={stylesPokemonCard.pokeballContainer}>
          <Image
            source={require('../assets/pokeball-white.png')}
            style={stylesPokemonCard.pokeball}
          />
        </View>

        <FadeInImage
          uri={pokemon.picture}
          style={stylesPokemonCard.pokemonImg}
        />
      </View>
    </TouchableOpacity>
  );
};
export default PokemonCard;

const stylesPokemonCard = StyleSheet.create({
  card: {
    marginHorizontal: 10,
    // backgroundColor: '#E8E8E8',
    height: 100,
    width: 160,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  pokemonImg: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: -16,
    top: -30,
  },
  pokeballContainer: {
    height: 100,
    width: 100,
    position: 'absolute',
    borderRadius: 10,
    overflow: 'hidden',
    right: 0,
    bottom: 0,
  },
  pokeball: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: -20,
    right: -20,
    opacity: 0.5,
  },
});
