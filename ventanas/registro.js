import React, {Component} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Platform,AppRegistry, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Button, Input } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class registro extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>
                    Registrate
                </Text>
                <Input style={styles.Inform}
                placeholder='Correo electronico'
                leftIcon={{ type: 'font-awesome', name: 'user' }}
                textAlign= 'center'
                />
                <Input style={styles.Inform}
                placeholder='Contraseña'
                leftIcon={{ type: 'font-awesome', name: 'lock' }}
                secureTextEntry={true}
                textAlign= 'center'
                />
                <Input style={styles.Inform}
                placeholder='Validación de contraseña'
                leftIcon={{ type: 'font-awesome', name: 'lock' }}
                secureTextEntry={true}
                textAlign= 'center'
                />

            </View>

        )
    }
}


const BodyStack = createStackNavigator({
    Registro: registro
  });
  
  export default createAppContainer(BodyStack);

 const styles = StyleSheet.create({
    container:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
   },
   title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  Inform:{
    color: '#ddd',
    textAlign: 'center'
  },

 })