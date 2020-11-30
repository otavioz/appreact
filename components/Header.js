import React from 'react'
import {View, Text, Image,StyleSheet, Button, Alert, TouchableOpacity} from 'react-native'


export default function Header() {
  return (
    <View style = {titleStyle.header}>
      <View style={{ flexDirection: 'row' }}>
        <Image style={titleStyle.logo} source={require('../assets/N.png')} />
        <Text style={titleStyle.titulo}>NEWTON PAIVA</Text>
      </View>
    </View>
  )
}

const titleStyle = StyleSheet.create({
  header:{
    display:"flex",
    flexDirection:"row",
    backgroundColor: "#043D5D",
    alignItems: 'center'
  },
  titulo: {
    fontSize: 21,
    fontWeight: 'bold',
    color: "white",
    fontFamily: "Arial",
    flexGrow:1,
    margin:21
  },
  logo: {
    height: 64,
    width: 64,
  }
});
