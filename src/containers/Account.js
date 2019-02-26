import React, {Component} from 'react';
import { View, Text } from 'react-native';
import Colors from '../helpers/colors';
import { DrawerActions } from 'react-navigation';
import { Header, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


class MyCustomRightComponent extends React.Component {
    render(){
        const { openDrawer } = this.props.navigation;
        return(
            <Icon name="bars" size={30} color={Colors.secondaryBlue} onPress={() => openDrawer()} />
        );
    }
}

class Account extends React.Component{
    render(){
        return(
            <View style={{backgroundColor: Colors.white, flex: 1}}>
                <Header
                    backgroundColor={Colors.primaryBlue}
                    placement="center"
                    centerComponent={{ text: 'Andres', style: { color: '#fff' } }}
                    leftComponent={<MyCustomRightComponent {...this.props}/>}
                />
                

            </View>
        );
    }
}

export default Account;