import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import SimpleHeader from '../components/SimpleHeader'
import ListaItem from '../components/ListaItem'

const modelo = {
  Carro: ['CrossFox', 'Celta', 'Punto'],
  Moto: ['Honda PCX 150', 'Honda CRF 150F', 'Kawasaki Ninja 300'],
  'Caminhão': ['Atego 2425', 'VM 260', 'FH 460']
}

export default function SelecionarMarca ({navigation, route}) {
  const tipo = route.params.tipo;
  
  return (
    <View>
      <SimpleHeader
      titulo="SELECIONE O MODELO"
      onPress={() => navigation.goBack()}
     />
     <FlatList
     data={modelo[tipo]}
     renderItem={({item}) =>
     <ListaItem
      texto={item}
      onPress={() => navigation.navigate('confirm', {tipo: tipo, modelo: item})}
    />
     }
   />
   </View>   
  )
}