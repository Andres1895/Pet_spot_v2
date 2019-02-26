import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createDrawerNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from '../containers/Home';
import AccountScreen from '../containers/Account';
import ServicesScreen from '../containers/drawerOptions/Services';
import SettingsScreen from '../containers/drawerOptions/Settings';
import ModulesScreen from '../containers/drawerOptions/Modules';

const AccountStack = createDrawerNavigator({
    Account:{
        screen: AccountScreen,
        navigationOptions: () => ({
            title: 'Mi perfil',
            headerBackTitle: null
        }),
    },
    Services:{
        screen: ServicesScreen,
        navigationOptions: () => ({
            title: 'Servicios',
            headerBackTitle: null
        }),
    },
    Modules:{
        screen: ModulesScreen,
        navigationOptions: () => ({
            title: 'Módulos',
            headerBackTitle: null
        }),
    },
    Settings:{
        screen: SettingsScreen,
        navigationOptions: () => ({
            title: 'Configuración',
            headerBackTitle: null
        }),
    },
    
});

const MainTabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: () => ({
            title: 'Inicio',
            headerBackTitle: null
        }),
    },
    AccountS: {
        screen: AccountStack,
        navigationOptions: () => ({
            title: 'Mi perfil',
            headerBackTitle: null
        }),
    },
    
});


  
export default createAppContainer(MainTabNavigator);