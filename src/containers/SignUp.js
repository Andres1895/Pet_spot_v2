import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Platform,AppRegistry, StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import { Button, Input } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
//import t from 'tcomb-form-native';


class SignUp extends React.Component{
    state={
        errorMessage: '',
        userName: '',
        email:'',
        password:'',
        verifypassword:''   
    }

    verifyFields=()=>{
        const {password, verifypassword, userName, email} = this.state;
        const { goBack }=this.props.navigation;

        if(userName!=='' && email!=='' && password!=='' && verifypassword !=='')
        {
            if(password == verifypassword)
            {
                goBack();
            }else{
                this.state.password='';
                this.state.verifypassword='';
                this.setState({
                    errorMessage: 'La contraseña no coincide'
                })
            }
           
            
        }else{
            this.setState({
                errorMessage:'Campo obligatorio'
            });
        }

    }
    render(){
        console.log(this.state.userName, this.state.email)
        const { goBack }=this.props.navigation;

        
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
                            errorMessage= {this.state.userName !== '' ? '' : this.state.errorMessage}
                            onChangeText={(text) => this.setState({userName:text})}
                            value={this.state.userName}
                        />
                        <Input containerStyle={styles.Inform}
                            placeholder='Correo electronico'
                            leftIcon={{ type: 'font-awesome', name: 'user' }}
                            textAlign= 'center'
                            errorMessage= {this.state.email !== '' ? '' :  this.state.errorMessage}
                            onChangeText={(text) => this.setState({email:text})}
                            value={this.state.email}
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
                        <Input containerStyle={styles.Inform}
                            placeholder='Validación de contraseña'
                            leftIcon={{ type: 'font-awesome', name: 'lock' }}
                            secureTextEntry={true}
                            textAlign= 'center'
                            errorStyle={{ color: 'red'}}
                            errorMessage= {this.state.verifypassword !== '' ? '' : this.state.errorMessage}
                            onChangeText={(text) => this.setState({verifypassword:text})}
                            value={this.state.verifypassword}
                        />
                    </ScrollView>
                </View>
                <View >
                    <Button 
                        containerStyle={styles.Button}
                        title="Registrate"
                        type="outline"
                        onPress={()=>this.verifyFields()}
                    />
                </View>
            </View>

        )
    }
}

<<<<<<< HEAD
export default SignUp;
=======


  export default SignUp;
>>>>>>> dev

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