import React, {Component} from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Colors from '../helpers/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, Header} from 'react-native-elements';
import ImageFactory from 'react-native-image-picker-form';
import t from 'tcomb-form-native';

const Form = t.form.Form
const DocumentFormStruct = t.struct({
  image: t.String
})

class Add extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
          value: {},
          options: {
            fields: {
              image: {
                config: {
                  title: 'Selecciona una imagen',
                  options: ['Toma una foto', 'Abre la galeria', 'Cancelar'],
                  style: {
                    titleFontFamily: 'Roboto'
                  }
                },
                error: 'No hay imagen seleccionada',
                factory: ImageFactory
              }
            }
          }
        }
      }
    render(){
        return(
            <View style={{backgroundColor: Colors.white, flex: 1,flexDirection: 'column'}}>
                <Header
                    backgroundColor={Colors.primaryBlue}
                    placement="center"
                    centerComponent={{ text: 'Agregar Publicación', style: { color: '#fff', fontSize:20 } }}
                />
                <View style={{flexDirection: 'row'}}>
                    <TextInput placeholder ='¿Qué está pasando? ' {...this.props} style={styles.post} maxLength = {4000}></TextInput>
                </View>
                <View>
                    <Form
                        
                        type={DocumentFormStruct}
                        value={this.state.value}
                        options={this.state.options}
                    />
                </View>
                <View>
                    <Button containerStyle={styles.Button}
                         title="Comparte"
                         type="outline"
                    />
                </View>
            </View>
        );
    }
}

export default Add;

const styles = StyleSheet.create({
    post:{
        backgroundColor: '#e2e5e7',
        margin: 10,
        fontSize: 18,
        width: 390,
        height: 125

    }
})