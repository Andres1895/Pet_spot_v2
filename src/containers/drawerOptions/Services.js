import React, {Component} from 'react';
import { View, Text } from 'react-native';
import Colors from '../../helpers/colors';

class Services extends React.Component{
    render(){
        return(
            <View style={{backgroundColor: Colors.white, flex: 1}}>
                <Text style={{backgroundColor: Colors.white}}>Servicios</Text>
            </View>
        );
    }
}

export default Services;