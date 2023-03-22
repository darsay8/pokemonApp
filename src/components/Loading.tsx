import {ActivityIndicator, View, Text} from 'react-native';
const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size={48} color="grey" />
      <Text style={{color: 'grey'}}>Loading...</Text>
    </View>
  );
};
export default Loading;
