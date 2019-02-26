import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Platform,AppRegistry, StyleSheet, Text, View, TouchableOpacity, Scr} from 'react-native';
import { Button, Input } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class Login extends React.Component{
    render()
    {
        return(
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={{fontSize: 30, textAlign: 'center'}}>
                        Inicia Sesión
                    </Text>
                </View>
                <View >
                    <Input containerStyle={styles.Inform}
                        placeholder='Correo electronico/Usuario'
                        leftIcon={{ type: 'font-awesome', name: 'user' }}
                        textAlign= 'center'
                    />
                    <Input containerStyle={styles.Inform}
                        placeholder='Contraseña'
                        leftIcon={{ type: 'font-awesome', name: 'lock' }}
                        secureTextEntry={true}
                        textAlign= 'center'
                    />
                </View>
                
                <Button containerStyle={styles.Button}
                title="Ingresa"
                type="outline"
                />

            </View>
        )
    }
}
export default Login;

const styles = StyleSheet.create({
    container:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
   },
   title: {
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 60
  },
  Inform:{
    paddingBottom: 15
  }

 })