import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

class Object extends Component {

    render() {
        return (

            <View style={styles.container} >
                <Text style={{
                    fontSize: 20,
                    color: 'white',
                }}>Ótimo! Agora selecione o seu objetivo</Text>
                <View style={{
                    flex:1,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: '',
                    backgroundColor: 'red',
                    padding: 20
                }}>
                    <TouchableOpacity style={styles.icon} onPress={() => this.props.navigation.navigate('Weight')}>
                        <Icon name='arrow-forward' color={'white'} size={28} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon} onPress={() => this.props.navigation.navigate('Weight')}>
                        <Icon name='arrow-forward' color={'white'} size={28} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon} onPress={() => this.props.navigation.navigate('Weight')}>
                        <Icon name='arrow-forward' color={'white'} size={28} />
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#1C1C1C',
        alignItems: 'center',
        padding: 25
    },

    input: {
        width: '20%',
        height: 50,
        padding: 8,
        textAlign: 'center',
        color: 'white',
        borderStyle: 'solid',
        borderBottomWidth: 0.5,
        borderColor: '#D3D3D3',
    },

    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#363636',
        width: 330,
        height: 100,
        borderRadius: 15,
        top: 20
    },



});

export default Object;