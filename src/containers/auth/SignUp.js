import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Platform,AppRegistry, StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import { Button, Input } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';
//import t from 'tcomb-form-native';


class SignUp extends React.Component{
    
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={{fontSize: 30, textAlign: 'center'}}>
                        Registrate
                    </Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-evenly'}}>
                    <ScrollView>
                        <Input containerStyle={styles.Inform}
                            placeholder='Nombre'
                            leftIcon={{ type: 'font-awesome', name: 'user' }}
                            textAlign= 'center'
                        />
                        <Input containerStyle={styles.Inform}
                            placeholder='Correo electronico'
                            leftIcon={{ type: 'font-awesome', name: 'user' }}
                            textAlign= 'center'
                        />
                        <Input containerStyle={styles.Inform}
                            placeholder='Contraseña'
                            leftIcon={{ type: 'font-awesome', name: 'lock' }}
                            secureTextEntry={true}
                            textAlign= 'center'
                        />
                        <Input containerStyle={styles.Inform}
                            placeholder='Validación de contraseña'
                            leftIcon={{ type: 'font-awesome', name: 'lock' }}
                            secureTextEntry={true}
                            textAlign= 'center'
                            errorStyle={{ color: 'red'}}
                        />
                    </ScrollView>
                </View>
                <View >
                    <Button 
                        containerStyle={styles.Button}
                        title="Registrate"
                        type="outline"
                    />
                </View>
            </View>

        )
    }
}

export default SignUp;

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
    padding: 50
  },
  Inform:{
    paddingBottom: 15
  },

 })