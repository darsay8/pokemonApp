import {useState, useEffect} from 'react';
import {FlatList, StyleSheet, View, Dimensions, Text} from 'react-native';
import {styles} from '../theme/theme';
import SearchInput from '../components/SearchInput';
import usePokemonSearch from '../hooks/usePokemonSearch';
import PokemonCard from '../components/PokemonCard';
import Loading from '../components/Loading';
import {SimplePokemon} from '../interfaces/IPokemon';

const SearchScreen = () => {
  const {isFetching, simplePokemonsList} = usePokemonSearch();
  const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);
  const [term, setTerm] = useState('');

  useEffect(() => {
    if (term.length === 0) {
      return setPokemonFiltered([]);
    }

    setPokemonFiltered(
      simplePokemonsList.filter(poke =>
        poke.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()),
      ),
    );
  }, [term]);

  if (isFetching) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <SearchInput
          onDebounce={value => setTerm(value)}
          style={{
            position: 'absolute',
            zIndex: 999,
            width: Dimensions.get('window').width - 40,
            ...styles.absoluteTop,
          }}
        />
        <FlatList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View
              style={{
                ...styles.header,
                ...searchStyles.header,
              }}>
              <Text style={styles.title}>{term}</Text>
            </View>
          }
          data={pokemonFiltered}
          keyExtractor={pokemon => pokemon.id}
          numColumns={2}
          renderItem={({item}) => <PokemonCard pokemon={item} />}
        />
      </View>
    </View>
  );
};
export default SearchScreen;

const searchStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    marginTop: 100,
  },
});
