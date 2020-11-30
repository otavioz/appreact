import React from 'react'

import { Text, View,TouchableHighlight, StyleSheet,ScrollView,FlatList} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';

import NavigationBar from '../components/NavigationBar'
import Header from '../components/Header'
import MaintenanceCard from '../components/MaintenanceCard'

const items = [
  {id:0, lastChange:'22/08/2020', lastValue:"30Km", nextChange:"10.000Km"},
  {id:1, lastChange:'22/08/2020', lastValue:"40Km", nextChange:"10Km"},
  {id:2, lastChange:'22/11/2020', lastValue:"300Km", nextChange:"1000Km"},
  {id:3, lastChange:'22/11/2020', lastValue:"300Km", nextChange:"1000Km"}
]

export default function Maintenance({navigation,route}) {
  return (
    <View style={{flex: 1}}>
      <Header />
      <NavigationBar navigation={navigation}/>
      <ScrollView>
        {
          <FlatList
            data={items}
            renderItem={
              ({item, index}) =>  <MaintenanceCard id={item.id} lastChange={item.lastChange} lastValue={item.lastValue} nextChange={item.nextChange}/>
            }           
          />
        }
      </ScrollView>
      <TouchableHighlight style={styles.button} underlayColor='#ff7043'>
        <Text style={styles.text}>+</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ff5722',
    borderColor: '#ff5722',
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right:20,
  },
  text:{
    fontSize: 30,
    color: 'white',
    alignItems: 'center',
  }
});