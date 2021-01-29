import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import ProfileScreen from './components/user_screen/ProfileScreen'

const Stack=createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProfileScreen">
        <Stack.Screen name ="ProfileScreen" component={ProfileScreen} options={{ headerShown:false }}/>
       </Stack.Navigator>
    </NavigationContainer>
  );
}

