import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createDrawerNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../containers/Home';
import AccountScreen from '../containers/Account';
import StoreScreen from '../containers/Store';
import NotificationsScreen from '../containers/Notifications';
import AddScreen from '../containers/Add';
import ServicesScreen from '../containers/drawerOptions/Services';
import SettingsScreen from '../containers/drawerOptions/Settings';
import ModulesScreen from '../containers/drawerOptions/Modules';
import Colors from '../helpers/colors';

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
    Store: {
        screen: StoreScreen,
        navigationOptions: () => ({
            title: 'Tienda'
        })
    },
    Add: {
        screen: AddScreen,
        navigationOptions: () => ({
            title: 'Estado'
        })
    },
    Notification: {
        screen: NotificationsScreen,
        navigationOptions: () => ({
            title: 'Notificación'
        })
    },
    AccountS: {
        screen: AccountStack,
        navigationOptions: () => ({
            title: 'Mi perfil',
            headerBackTitle: null
        }),
    },   
}, {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home`;
          // Sometimes we want to add badges to some icons. 
          // You can check the implementation below.
          //IconComponent = HomeIconWithBadge; 
        } else if (routeName === 'AccountS') {
            iconName = `ios-person`;
        } else if (routeName === 'Store'){
            iconName = `ios-cart`;
        } else if ( routeName === 'Add'){
            iconName = `ios-add`;
        } else if ( routeName === 'Notification') {
            iconName = `ios-heart`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: Colors.secondaryBlue,
      style: {
          backgroundColor: Colors.primaryBlue
      },
      inactiveTintColor: Colors.grey,
    },
});


  
export default createAppContainer(MainTabNavigator);