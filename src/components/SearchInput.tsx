import {StyleProp, TextInput} from 'react-native';
import {ViewStyle} from 'react-native';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  style?: StyleProp<ViewStyle>;
}

const SearchInput = ({style}: Props) => {
  return (
    <View style={{...(style as any)}}>
      <View
        style={{
          backgroundColor: '#f3f1f3',
          borderRadius: 50,
          height: 40,
          paddingHorizontal: 20,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,

          elevation: 3,
        }}>
        <TextInput
          placeholder="Search Pokemon"
          style={{flex: 1, fontSize: 18}}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Icon name="search-outline" size={24} color="grey" />
      </View>
    </View>
  );
};
export default SearchInput;
