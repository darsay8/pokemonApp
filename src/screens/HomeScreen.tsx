import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../theme/theme';
import usePokemonPaginated from '../hooks/usePokemonPaginated';
import FadeInImage from '../components/FadeInImage';
import PokemonCard from '../components/PokemonCard';

const HomeScreen = () => {
  const {simplePokemonsList, isLoading, loadPokemons} = usePokemonPaginated();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/pokeball.png')} style={styles.imgBg} />

      <View style={styles.row}>
        <FlatList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View
              style={{
                ...styles.header,
                ...homeStyles.header,
              }}>
              <Text style={styles.title}>Pokedex</Text>
              <Icon name="home-outline" size={32} color="black" />
            </View>
          }
          data={simplePokemonsList}
          keyExtractor={pokemon => pokemon.id}
          numColumns={2}
          renderItem={({item}) => <PokemonCard pokemon={item} />}
          // infinite scroll
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListFooterComponent={
            <ActivityIndicator size={30} style={{height: 100}} />
          }
        />
      </View>
    </View>
  );
};
export default HomeScreen;

const homeStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
  },
});
