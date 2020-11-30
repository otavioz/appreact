import React from 'react'
import {View, Text, Image,StyleSheet, Button, Alert, TouchableOpacity} from 'react-native'


export default function Footer() {
  return (
    <View style = {titleStyle.header}>
      <View style={{ flexDirection: 'column' }}>
        <Text style={titleStyle.titulo}>Footer</Text>
      </View>
    </View>
  )
}

const titleStyle = StyleSheet.create({
  header:{
    display:"flex",
    flexDirection:"row",
    backgroundColor: "#043D5D",
    alignItems: 'left',
    height: 62,
  },
  titulo: {
    fontSize: 18,
    color: "white",
    fontFamily: "Arial",
    flexGrow:1,
    margin:3
  }
});
