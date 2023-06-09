import React from 'react';
import styles from './style/MainStyle';
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './screens/Login';
import Principal from './screens/Principal';
import Cadastro from './screens/Cadastro';



const Stack = createStackNavigator();

function MyStack() {
  
  return (
    <Stack.Navigator>
      
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Principal" component={Principal} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      
    </Stack.Navigator>
  );
}

export default function App() {  

  return(
    <NavigationContainer>
        <MyStack/>
    </NavigationContainer>

  );
}

