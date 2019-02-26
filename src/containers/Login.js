import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Platform,AppRegistry, StyleSheet, Text, View, TouchableOpacity, Scr} from 'react-native';
import { Button, Input } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class login extends React.Component{
    state={
        errorMesagge:'',
        userName: '',
        password:''
    }

    verifyFields=()=>{
        const {userName, password} = this.state;


        const { goBack }=this.props.navigation;
        if(userName!== '' && password!=='' )
        {
            if (userName ==  'Andres' && password == '1234')
            {
                goBack();
            }else{
                this.state.userName='';
                this.state.password='';
                this.setState({
                    errorMessage:'Campos incorrectos'
                });
            }
          
        }else{
             this.setState({
                errorMessage:'Campo obligatorio'
            });
        }
    }
    render(){
        const { goBack }=this.props.navigation;
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
                        errorMessage= {this.state.userName !== '' ? '' : this.state.errorMessage}
                        onChangeText={(text) => this.setState({userName:text})}
                        value={this.state.userName}
                    />
                    <Input containerStyle={styles.Inform}
                        placeholder='Contraseña'
                        leftIcon={{ type: 'font-awesome', name: 'lock' }}
                        secureTextEntry={true}
                        textAlign= 'center'
                        errorMessage= {this.state.password !== '' ? '' : this.state.errorMessage}
                        onChangeText={(text) => this.setState({password:text})}
                        value={this.state.password}
                    />
                </View>
                
                <Button containerStyle={styles.Button}
                    title="Ingresa"
                    type="outline"
                    onPress={()=>this.verifyFields()}
                />

            </View>
        )
    }
}
export default login;

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