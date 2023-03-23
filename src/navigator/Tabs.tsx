import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackNavigator from './Tab1';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Tab2Screen from './Tab2';
import Tab1Screen from './Tab1';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#5856d6',
        tabBarLabelStyle: {
          marginBottom: Platform.OS === 'ios' ? 0 : 10,
        },
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255,0.9)',
          borderWidth: 0,
          elevation: 0,
          height: Platform.OS === 'ios' ? 80 : 60,
        },
      }}>
      <Tab.Screen
        name="List"
        component={Tab1Screen}
        options={{
          tabBarLabel: 'Pokemon List',
          tabBarIcon: ({color}) => (
            <Icon color={color} size={25} name="list-outline" />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Tab2Screen}
        options={{
          tabBarLabel: 'Search Pokemon',
          tabBarIcon: ({color}) => (
            <Icon color={color} size={25} name="search-outline" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
