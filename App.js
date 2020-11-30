import * as React from 'react';
import { Text, View,TouchableHighlight, StyleSheet,ScrollView,FlatList} from 'react-native';
import Constants from 'expo-constants';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

import MaintenanceScreen from './screens/MaintenanceScreen'
import NewVehicle from './screens/NewVehicle'
import SelectManufacturer from './screens/SelectManufacturer'

const Stack = createStackNavigator();

export default function App() {
  return (
     <NavigationContainer style={styles.container}>
      <Stack.Navigator headerMode="none" initialRouteName="home">
        <Stack.Screen name="home" component={MaintenanceScreen} />
        <Stack.Screen name="newVehicle" component={NewVehicle} />
        <Stack.Screen name="selectManufacturer" component={SelectManufacturer} />       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});


