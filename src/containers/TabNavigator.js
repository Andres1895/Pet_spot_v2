import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../containers/Home';
import AccountScreen from '../containers/Account';


const TabNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    Settings: AccountScreen,
});
  
export default createAppContainer(TabNavigator);