import React, {Component} from 'react';
import { View, Text } from 'react-native';
import Colors from '../helpers/colors';

class Account extends React.Component{
    render(){
        return(
            <View style={{backgroundColor: Colors.white, flex: 1}}>
                <Text>Account</Text> 
            </View>
        );
    }
}

export default Account;