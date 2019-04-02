import React, {Component} from 'react';
import { View, Text, StyleSheet, Dimensions,TextInput } from 'react-native';
import Colors from '../helpers/colors';
import { DrawerActions } from 'react-navigation';
import { Header, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { SwipeListView, SwipeRow  } from 'react-native-swipe-list-view';




const FirstRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#fff', flexDirection: 'row', alignItems: 'flex-start' }]}>
    
    </View>
  );
  const SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#fff' }]}>
        <SwipeRow  rightOpenValue={-75}>
            <View style={styles.standaloneRowBack}>
                <Text>Hola</Text>
                <Icon name="medkit" size={30} color={Colors.secondaryBlue}/>
            </View>
            <View style={styles.standaloneRowFront}>
                <Text style={{color: Colors.white}}>Mi mascota 1</Text>
            </View>
        </SwipeRow>
        <SwipeRow  rightOpenValue={-75}>
            <View style={styles.standaloneRowBack}>
                <Text color={Colors.white}>Hola</Text>
                <Icon name="medkit" size={30} color={Colors.secondaryBlue}/>
            </View>
            <View style={styles.standaloneRowFront}>
                <Text style={{color: Colors.white}}>Mi mascota 2</Text>
            </View>
        </SwipeRow>
    </View>
  );

class MyCustomRightComponent extends React.Component {
    render(){
        const { openDrawer } = this.props.navigation;
        return(
            <Icon name="bars" size={30} color={Colors.white} onPress={() => openDrawer()} />
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
            <View style={{backgroundColor: Colors.primaryBlue, flex: 1}}>
                <Header
                    backgroundColor={Colors.primaryBlue}
                    placement="center"
                    centerComponent={{ text: 'Andres', style: { color: '#fff', fontSize:20 } }}
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
    standalone: {
		marginTop: 30,
		marginBottom: 30,
    },
    standaloneRowBack: {
		alignItems: 'center',
		backgroundColor: Colors.white,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
        padding: 15,
        marginTop: 10,
        marginBottom: 5
    },
    backTextWhite: {
		color: '#FFF'
    },
    standaloneRowFront: {
		alignItems: 'center',
		backgroundColor: Colors.grey,
		justifyContent: 'center',
        height: 50,
        marginTop: 10,
        marginBottom: 5
    },
    post:{
        backgroundColor: '#e2e5e7',
        margin: 10,
        fontSize: 18,
        width: 300,
        height: 125

    }
});