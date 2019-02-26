import React, {Component} from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Colors from '../helpers/colors';
import { DrawerActions } from 'react-navigation';
import { Header, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
  );
  const SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
  );

class MyCustomRightComponent extends React.Component {
    render(){
        const { openDrawer } = this.props.navigation;
        return(
            <Icon name="bars" size={30} color={Colors.secondaryBlue} onPress={() => openDrawer()} />
        );
    }
}

class Account extends React.Component{
    state = {
        index: 0,
        routes: [
          { key: 'first', title: 'Mis Publicaciones' },
          { key: 'second', title: 'Mis Perros' },
        ],
    };
    render(){
        return(
            <View style={{backgroundColor: Colors.white, flex: 1}}>
                <Header
                    backgroundColor={Colors.primaryBlue}
                    placement="center"
                    centerComponent={{ text: 'Andres', style: { color: '#fff' } }}
                    leftComponent={<MyCustomRightComponent {...this.props}/>}
                />
                <TabView
                    navigationState={this.state}
                    renderScene={SceneMap({
                        first: FirstRoute,
                        second: SecondRoute,
                    })}
                    onIndexChange={index => this.setState({ index })}
                    initialLayout={{ width: Dimensions.get('window').width }}
                />

            </View>
        );
    }
}

export default Account;

const styles = StyleSheet.create({
    scene: {
      flex: 1,
    },
});