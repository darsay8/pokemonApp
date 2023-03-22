import {NavigationContainer} from '@react-navigation/native';
// import StackNavigator from './src/navigator/StackNavigator';
import Tabs from './src/navigator/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <Tabs />
    </NavigationContainer>
  );
};
export default App;
