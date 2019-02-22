import React, {Component} from 'react';
import {Platform,AppRegistry, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import registro from './ventanas/registro';

 class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a Pet Spot</Text>
      <Button 
          style={styles.boton}
          title="Inicia Sesión"
          type="outline"
        />
      <Button 
          style={styles.boton}
          title="Registrate"
          type="outline"
          onPress={() => this.props.navigation.navigate('Registro')}
      />
    </View>
    );
  }
}
const registerStack = createStackNavigator({
  Inicio: App,
  Registro: registro
});

export default createAppContainer(registerStack);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    margin: 10,

  },
  boton:{
    color: '#ddd',
    width: '40%',
    height: 40,
  },
  buttonContainer: {
    flex: 1,
},
  texto: {
    fontFamily: 'Arial',
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  in: {
    alignItems: 'center',
  },
  icono: {
    color: "#4267b2",
    margin: 10,
  },
});
