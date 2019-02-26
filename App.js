import React, {Component} from 'react';
import {Platform,AppRegistry, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import registro from './ventanas/registro';
import login from './ventanas/Login';

 class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View  style={styles.title}>
          <Text style={{fontSize: 30, textAlign: 'center', paddingBottom: 20}}>Bienvenido a Pet Spot</Text>
        </View>
        <View>
          <Button 
            containerStyle={styles.boton}
            title="Inicia Sesión"
            type="outline"
            onPress={()=> this.props.navigation.navigate('Login')}
          />
        </View>
        <View>
          <Button 
            containerStyle={styles.boton}
            title="Registrate"
            type="outline"
            onPress={() => this.props.navigation.navigate('Registro')}
           />
        </View>
    </View>
    );
  }
}
const registerStack = createStackNavigator({
  Inicio: App,
  Registro: registro,
  Login: login
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
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 60
  },
  boton:{
    height: 40,
    marginTop: 20,
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
