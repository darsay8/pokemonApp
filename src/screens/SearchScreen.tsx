import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform,
} from 'react-native';
import {styles} from '../theme/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchInput from '../components/SearchInput';
import usePokemonSearch from '../hooks/usePokemonSearch';
import PokemonCard from '../components/PokemonCard';
import Loading from '../components/Loading';

const SearchScreen = () => {
  const {isFetching, simplePokemonsList} = usePokemonSearch();

  if (isFetching) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <SearchInput
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
              {/* <Text style={styles.title}>Search</Text>
              <Icon name="search-outline" size={32} color="black" /> */}
            </View>
          }
          data={simplePokemonsList}
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
  },
});
