import React, { Component } from 'react';
import Colors from '../../helpers/colors';
import { Button } from 'react-native-elements';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import SignUp from '../auth/SignUp';
import Login from '../auth/Login'


class AuthTab extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.image}>
                    <Image style={{width: 150, height: 150}} source= {require('../../images/Icono.png')}/>
                </View>
                <View  style={styles.title}>
                    <Text style={{fontSize: 30,  paddingTop: 20, paddingLeft: 10, color: Colors.white}}>Bienvenido a Pet Spot</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Button 
                        titleStyle={{fontSize: 19}}
                        containerStyle={styles.button}
                        buttonStyle={{borderRadius: 50}}
                        title="Inicia Sesión"
                        onPress={()=> this.props.navigation.navigate('Login')}
                    />
                    <Button 
                        titleStyle={{fontSize: 19}}
                        containerStyle={{width: '80%', borderColor: Colors.secondaryBlue, borderStyle: 'solid'}}
                        buttonStyle={{borderRadius: 50, backgroundColor: 'transparent'}}
                        title="Registrate"
                        onPress={() => this.props.navigation.navigate('SignUp')}
                        type="outline"
                    />
                </View>
                <View>
                    <Text style={styles.footer}>
                        Powered by Digital Class
                    </Text>
                </View>
            </View>
        );
    }
}

const registerStack = createStackNavigator({
    Inicio:{
        screen: AuthTab,
        navigationOptions: {header: null}
    }, 
    SignUp: SignUp,
    Login: Login
  });

export default createAppContainer(registerStack);
  
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        backgroundColor: Colors.primaryBlue,
    },
    title: {
        textAlign: 'left'
    },
    button:{
        height: 40,
        marginBottom: 20,
        width: '80%',
        borderRadius:10,

    },
    image: {
        textAlign: 'left',
        paddingTop: 10
    },
    footer: {
        color: Colors.white,
        minHeight: '5%',
        fontSize: 16,
        textAlign: 'center'
    }
});