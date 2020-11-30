import React from 'react'
import {View, Text, Image, Button, Alert, StyleSheet} from 'react-native'
import { MaterialCommunityIcons,FontAwesome5 } from '@expo/vector-icons';

function getTipoMaintenanceName(id) {
  switch(id){
    case 0:
      return 'TROCA DE BATERIA';
    case 1:
      return 'TROCA DE OLEO';
    case 2:
      return 'TROCA DE PNEU D';
    case 3:
      return 'TROCA DE PNEU T';
  }
}

function getTipoMaintenanceImage(id) {
  switch(id){
    case 0:
      return <MaterialCommunityIcons name="car-battery" size={34} color="black" />
    case 1:
      return <FontAwesome5 name="oil-can" size={34} color="black" />
    case 2:
      return <FontAwesome5 name="car" size={34} color="black" />
    case 3:
      return <MaterialCommunityIcons name="car-back" size={34} color="black" />
  }
}

export default function Maintenance({id = 0, lastChange = 'Null', lastValue = "Null", nextChange= "Null"}) {
  return (
    <View>
      <View style={styles.card}>
        <View style={styles.icon}>{getTipoMaintenanceImage(id)}
        </View>
        <View>
          <Text style={styles.title}>{getTipoMaintenanceName(id)}</Text>
          <Text style={styles.text}>Realizado em: {lastChange}</Text>
          <Text style={styles.text}>com {lastValue}</Text>
          <Text style={styles.text}>Próxima troca: {nextChange}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    color: "black",
    fontFamily: "Arial",
    flexGrow:1,
    margin:5
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    color: "black",
    fontFamily: "Arial",
    flexGrow:1,
    margin:3
  },
  card:{
    flexDirection: 'row',
    justifyContent: 'left',
    padding: 15,
    borderColor:"#e4e4e4",
    borderWidth:2
  }, 
  icon:{
    flexGrow:0.5,
  }

});