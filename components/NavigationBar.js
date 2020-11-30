import * as React from 'react';
import { Text, View, StyleSheet, Image,  TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons';

export default function Nav2({navigation}) {
  return (
    <View>
      <View style={styles.headline}>
        <Text style={styles.titulo}>Carro (MT 07)</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('newVehicle', {mensagem: 'Uno'})}
        >
          <AntDesign style={styles.icon} name="back" size={24} color="black" />
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
   headline: {
     display: 'flex',
     flexDirection: 'row',
     alignItems: 'center',
     height: 50,
     backgroundColor: 'steelblue'
  },
  titulo: {
    textAlign: 'center',
    flexGrow: 1,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white'
  },
  icon:{
    flexGrow:0.1,
    //padding: 18,
    color: "white",
    backgroundColor: 'steelblue'
  }
});

 