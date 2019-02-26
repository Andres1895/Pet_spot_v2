import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Colors from './src/helpers/colors';

import AuthTab from './src/containers/auth/AuthTab';
import TabNav from './src/containers/TabNavigator';

class App extends React.Component {
    state = {
        loggedIn: true
    }
    render() {
        if (this.state.loggedIn) {
            return (
                <TabNav />
            )
        }
        return (
            <AuthTab />
        )
    }
}

export default App;
