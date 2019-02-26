import React, {Component} from 'react';
import { View, Text } from 'react-native';
import Colors from '../helpers/colors';

class Store extends React.Component{
    render(){
        return(
            <View style={{backgroundColor: Colors.white, flex: 1}}>
                <Text style={{backgroundColor: Colors.white}}>Store</Text>
            </View>
        );
    }
}

export default Store;