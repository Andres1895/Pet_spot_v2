import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../helpers/colors';
import MapView, { PROVIDER_GOOGLE, Polyline }  from 'react-native-maps';
import { Header, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


class MyCustomRightComponent extends React.Component {
    render(){
        const { openDrawer } = this.props.navigation;
        return(
            <Icon name="bars" size={30} color={Colors.white} onPress={() => openDrawer()} />
        );
    }
}

class Modules extends React.Component{
    render(){
        return(
            <View style={{ backgroundColor: Colors.primaryBlue, flex: 1, justifyContent: 'space-around'}}>
                <View style={{ justifyContent: 'space-around'}}>
                <Header
                    backgroundColor={Colors.primaryBlue}
                    placement="center"
                    centerComponent={{ text: 'Andres', style: { color: '#fff', fontSize:20 } }}
                    leftComponent={<MyCustomRightComponent {...this.props}/>}
                />
                </View>
                <View style={{justifyContent: 'space-around', backgroundColor: Colors.white, marginBottom: 10}}>
                    <Text style={{fontWeight: 'bold'}}> En nuestros módulos podemos aplicarle las vacunas que necesita tu peludo o realizarle un corte de pelo. Puedes revisar las ubicaciones del módulo en el siguiente mapa.</Text>
                </View>
                <View style={{ flex:1, justifyContent: 'space-around'}}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    region={{
                    latitude: 19.512806,
                    longitude: -99.1283901,
                    latitudeDelta: 0.00522,
                    longitudeDelta: 0.00121,
                    }}>

                <MapView.Marker
                    coordinate={{
                    latitude:  19.512307,
                    longitude: -99.129611}}
                    title={"Persona Detectada"}
                    description={"Persona en posible situacion de riesgo"}/>

                </MapView>
                </View>

            </View>
        );
    }
}

export default Modules;


const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 600,
      width: 400,
      justifyContent: 'center',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
      alignItems: 'center'
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
  