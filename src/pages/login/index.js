import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import InputLogin from '../../components/login';

class Login extends Component {

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}
                accessible={false}>
                <View style={styles.container}>
                    <StatusBar translucent backgroundColor='transparent' />
                    <View style={styles.formOuter}>
                        <View style={styles.letter}>
                            <Text style={styles.text}>Entre em</Text>
                            <Text style={styles.text1}>RotinadaFit</Text>
                        </View>
                        <InputLogin />
                        <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('MyTabs')}>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: 'bold',
                                color: "white",
                            }}
                            >Continuar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Form')}>
                            <Text style={{
                                fontSize: 15,
                                color: "white",
                            }}>Esqueci minha senha</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }

}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#000000',
        height: '100%',
        width: '100%',
        justifyContent: 'space-between'
    },

    formOuter: {
        maxWidth: 400,
        margin: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    letter: {
        position: 'relative',
        display: 'flex',
        paddingBottom: 35,
        width: '100%',

    },

    icon: {
        position: 'absolute',
        paddingEnd: '88%'
    },

    formInput: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },

    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: "white",
    },

    text1: {
        fontSize: 35,
        fontWeight: 'bold',
        color: "#4169E1",
    },

    input: {
        borderStyle: 'solid',
        borderColor: '#D3D3D3',
        paddingLeft: 50,
        borderWidth: 0,
        borderBottomWidth: 0.5,
        fontSize: 17,
        lineHeight: 30,
        width: '100%',
        height: 50,
        margin: 20,

    },

    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        height: 60,
        width: '100%',
        borderRadius: 8,
        elevation: 10,
        backgroundColor: '#4169E1',
        margin: 20,
    }
});

export default Login;