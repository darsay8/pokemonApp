import {useState, useEffect} from 'react';
import {StyleProp, TextInput} from 'react-native';
import {ViewStyle} from 'react-native';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useDebouncedValue from '../hooks/useDebounceValue';

interface Props {
  onDebounce: (value: string) => void;
  style?: StyleProp<ViewStyle>;
}

const SearchInput = ({style, onDebounce}: Props) => {
  const [textValue, setTextValue] = useState('');

  const debouncedValue = useDebouncedValue(textValue);

  useEffect(() => {
    onDebounce(debouncedValue);
  }, [debouncedValue]);

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
          value={textValue}
          onChangeText={setTextValue}
        />
        <Icon name="search-outline" size={24} color="grey" />
      </View>
    </View>
  );
};
export default SearchInput;
