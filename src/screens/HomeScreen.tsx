import {View, Text, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../theme/theme';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/pokeball.png')} style={styles.imgBg} />
      <View
        style={{
          ...styles.header,
          ...homeStyles.header,
        }}>
        <Text style={styles.title}>Home</Text>
        <Icon name="home-outline" size={32} color="black" />
      </View>
      <View style={styles.row}></View>
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
