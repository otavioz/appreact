import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import SimpleHeader from '../components/SimpleHeader'
import ItemList from '../components/ItemList'

const marcas = {
  Carro: ['Volkswagen', 'Jeep', 'Hyundai'],
  Moto: ['Yamaha', 'R1', 'Kawazaki'],
  'Caminhão': ['Chevrolet', 'Tutu', 'MT 07']
}

export default function SelectManufacturer ({navigation, route}) {
  const tipo = route.params.tipo;
  
  return (
    <View>
      <SimpleHeader
      titulo="SELECIONE A MARCA"
      onPress={() => navigation.goBack()}
     />
     <FlatList
     data={marcas[tipo]}
     renderItem={({item}) =>
     <ItemList
      texto={item}
      onPress={() => navigation.navigate('selectModel', {tipo: tipo, modelo: item})}
    />
     }
   />
   </View>   
  )
}