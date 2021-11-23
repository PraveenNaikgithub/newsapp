import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from './src/screens/MainPage';
import NewsScreen from './src/screens/NewsScreen';
import CardStyle from './src/components/CardStyle';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        // screenOptions={({ route }) => ({
        //   tabBarIcon: ({ focused, color, size }) => {
        //     let iconName;

        //     if (route.name === 'Main') {
        //       iconName = 'chart-area';
        //     } else if (route.name === 'Details') {
        //       iconName = 'hospital-alt';
        //     } else if (route.name === 'Location') {
        //       iconName = 'location-arrow';
        //     }

        //     // You can return any component that you like here!
        //     return <FontAwesome5 name={iconName} size={24} color='black' />;
        //   },
        // })}
        // tabBarOptions={{
        //   activeTintColor: 'tomato',
        //   inactiveTintColor: 'gray',
        // }}
      >
        <Stack.Screen name='Main' component={MainPage} />
        <Stack.Screen name='News' component={NewsScreen} />
        <Stack.Screen name='Card' component={CardStyle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 0,
    flexGrow: 1,
    flex: 1,
  },
});

export default App;

//http://newsapi.org/v2/top-headlines?country=in&apiKey=API_KEY
//c7f9316eb109478a8947bbeff0a9c6e2
