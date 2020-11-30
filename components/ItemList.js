import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import { MaterialIcons} from '@expo/vector-icons';

export default function ItemList({texto, onPress}){
  return (
    <TouchableOpacity
      onPress={onPress}
    >
    <View style={styles.listaItem}>
      <Text style={styles.texto}>{texto}</Text>
    </View>
  </TouchableOpacity>
  )
}  

const styles = StyleSheet.create({
  listaItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#d1d1d6',
    display: "flex",
    flexDirection: "row"
  },
   texto: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#333333',
    lineHeight: 20,
    flexGrow: 1
  }
})