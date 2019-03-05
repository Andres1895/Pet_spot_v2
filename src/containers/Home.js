import React, {Component} from 'react';
import { View, Text } from 'react-native';
import Colors from '../helpers/colors';
import { Header, Button } from 'react-native-elements';

class Home extends React.Component{
    render(){
        return(
            <View style={{backgroundColor: Colors.white, flex: 1}}>
                 <Header
                    backgroundColor={Colors.primaryBlue}
                    placement="center"
                    centerComponent={{ text: 'Inicio', style: { color: '#fff', fontSize:20 } }}
                />
            </View>
        );
    }
}

export default Home;