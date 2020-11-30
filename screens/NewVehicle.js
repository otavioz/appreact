import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

import SimpleHeader from '../components/SimpleHeader'
import ItemList from '../components/ItemList'

const veiculos = [
  {tipo: 'Moto', marca: 'Yamaha',modelo : 'MT 07'},
  {tipo: 'Carro', marca: 'Uno',modelo : 'MU 0987'},
  {tipo: 'Caminhão', marca: 'GMC',modelo : '095'},
]

export default function AddVeiculoScreen({navigation, route}) {
  return (
    <View>
      <SimpleHeader titulo="SELECIONE O TIPO DO VEICULO" navigation={navigation} />
      <View style={styles.body}>
        <ItemList
          texto="Novo Carro"
          onPress={() => {
            navigation.navigate('selectManufacturer', {tipo: 'Carro'})
          }}
         /> 
         <ItemList
          texto="Nova Moto"
           onPress={() => {
            navigation.navigate('selectManufacturer', {tipo: 'Moto'})
          }}
         /> 
         <ItemList
          texto="Novo Caminhão"
           onPress={() => {
            navigation.navigate('selectManufacturer', {tipo: 'Caminhão'})
          }}
         /> 
         <FlatList
          data={veiculos}
          renderItem={({item}) => <ItemList
          texto={`${item.tipo} ${item.marca} ${item.modelo}`}
          onPress={() => {
            navigation.goBack()
          }}
          />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create(
  {
body: {
  padding: 16
}
})