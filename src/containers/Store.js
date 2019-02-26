import React, {Component} from 'react';
import { View, Text, Linking, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../helpers/colors';
import { Button } from 'react-native-elements';

class Store extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={[styles.boxContainer, styles.contText]}>
                     <Text style={styles.contText}>¿Buscas accesorios para tu mascota?</Text>
                </View>
                <TouchableOpacity onPress={()=>Linking.openURL('http://digitalclasstest.com.mx/CEC_DC/servicios/tienda-en-linea')}>
                    <Text style={styles.contText}>Ir a la tienda </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Store;

const styles = StyleSheet.create({
    container:{
        flex:   1,
        flexDirection: 'column',
        backgroundColor: Colors.secondaryBlue   
    },
    boxContainer:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contText:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25, 
        color: 'white'
    },
})