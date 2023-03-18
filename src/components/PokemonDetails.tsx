import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {PokemonFull} from '../interfaces/IPokemon';
import FadeInImage from './FadeInImage';

interface Props {
  pokemon: PokemonFull;
}

const PokemonDetails = ({pokemon}: Props) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{...StyleSheet.absoluteFillObject}}>
      <View style={{marginTop: 420}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Types</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.types.map(({type}) => (
            <Text style={{fontSize: 17, marginRight: 10}} key={type.name}>
              {type.name}
            </Text>
          ))}
        </View>
        <View style={{marginTop: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Peso</Text>
          <Text style={{fontSize: 17}}>{pokemon.weight}kg</Text>
        </View>
        <View style={{marginTop: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Sprites</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <FadeInImage
              uri={pokemon.sprites.front_default}
              style={{width: 100, height: 100}}
            />
            <FadeInImage
              uri={pokemon.sprites.back_default}
              style={{width: 100, height: 100}}
            />
            <FadeInImage
              uri={pokemon.sprites.front_shiny}
              style={{width: 100, height: 100}}
            />
            <FadeInImage
              uri={pokemon.sprites.back_shiny}
              style={{width: 100, height: 100}}
            />
          </ScrollView>
        </View>
        <View style={{marginTop: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Abilities</Text>
          <View style={{flexDirection: 'row'}}>
            {pokemon.abilities.map(({ability}) => (
              <Text style={{fontSize: 17, marginRight: 10}} key={ability.name}>
                {ability.name}
              </Text>
            ))}
          </View>
        </View>
        <View style={{marginTop: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Moves</Text>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {pokemon.moves.map(({move}) => (
              <Text style={{fontSize: 17, marginRight: 10}} key={move.name}>
                {move.name}
              </Text>
            ))}
          </View>
        </View>
        <View style={{marginTop: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Stats</Text>
          <View>
            {pokemon.stats.map((stat, i) => (
              <View key={stat.stat.name + i} style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 17,
                    marginRight: 10,
                    width: 148,
                  }}>
                  {stat.stat.name}
                </Text>

                <Text
                  style={{fontSize: 16, marginRight: 10, fontWeight: '600'}}>
                  {stat.base_stat}
                </Text>
              </View>
            ))}
          </View>
        </View>
        <View style={{marginVertical: 20}}>
          <FadeInImage
            uri={pokemon.sprites.front_default}
            style={{width: 100, height: 100}}
          />
        </View>
      </View>
    </ScrollView>
  );
};
export default PokemonDetails;
