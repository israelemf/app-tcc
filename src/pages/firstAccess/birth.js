import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

class Birth extends Component {

    render() {
        return (

            <View style={styles.container} >
                <Text style={{
                    fontSize: 20,
                    color: 'white'
                }}>Qual sua data de nascimento?</Text>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 20
                }}>
                </View>

                <TouchableOpacity style={styles.icon} onPress={() => this.props.navigation.navigate('Height')}>
                    <Icon name='arrow-forward' color={'white'} size={28} />
                </TouchableOpacity>
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
        width: 50,
        height: 50,
        borderRadius: 30,
        top: 20
    },



});

export default Birth;