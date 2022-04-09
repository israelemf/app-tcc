import React, { useRef } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, Pressable, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Key from 'react-native-vector-icons/FontAwesome5';
import Eye from 'react-native-vector-icons/Ionicons'

function Form() {

    const email = useRef();
    const password = useRef();

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}
            accessible={false}>
            <View style={styles.container}>
                <View style={styles.letter}>
                    <Text style={styles.text}>Crie sua conta</Text>
                    <Text style={styles.text1}>RotinadaFit</Text>
                </View>

                <View style={styles.formText}>
                    <Text style={styles.inputText}>Nome</Text>
                </View>
                <View style={styles.formInput}>
                    <View style={styles.icon}>
                        <Icon name="person" size={22} color="white" />
                    </View>
                    <TextInput
                        style={styles.input}
                        color='white'
                        placeholder="Digite seu nome"
                        placeholderTextColor={'#363636'}
                        keyboardType="ascii-capable"
                        selectionColor={'white'}
                        onSubmitEditing={() => {
                            email.current.focus();
                        }}
                        blurOnSubmit={false}
                        returnKeyType="next" />
                    <View style={styles.eyeIcon}>
                    </View>
                </View>
                <View style={styles.formText}>
                    <Text style={styles.inputText}>Email</Text>
                </View>
                <View style={styles.formInput}>
                    <View style={styles.icon}>
                        <Icon name="email" size={22} color="white" />
                    </View>
                    <TextInput
                        ref={email}
                        style={styles.input}
                        color='white'
                        placeholder="Digite seu e-mail"
                        placeholderTextColor={'#363636'}
                        keyboardType="email-address"
                        selectionColor={'white'}
                        onSubmitEditing={() => {
                            password.current.focus();
                        }}
                        blurOnSubmit={false}
                        returnKeyType="next" />
                    <View style={styles.eyeIcon}>
                    </View>
                </View>

                <View style={styles.formText}>
                    <Text style={styles.inputText}>Senha</Text>
                </View>
                <View style={styles.formInput}>
                    <View style={styles.icon}>
                        <Key name="key" size={18} color="white" />
                    </View>
                    <TextInput
                        ref={password}
                        style={styles.input}
                        placeholder="Digite uma senha"
                        placeholderTextColor={'#363636'}
                        keyboardType="ascii-capable"
                        secureTextEntry={true}
                        selectionColor={'white'}
                        returnKeyType="done"

                    />
                    <TouchableOpacity style={styles.eyeIcon}>
                        <Eye name='eye' color={'white'} size={20} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.btn}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: "white",
                    }}
                    >Continuar</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#1C1C1C',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 25
    },

    icon: {
        width: '15%',
        height: 50,
        paddingRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'solid',
        borderBottomWidth: 0.5,
        borderColor: '#D3D3D3',

    },

    eyeIcon: {
        width: '15%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'solid',
        borderBottomWidth: 0.5,
        borderColor: '#D3D3D3',


    },

    formInput: {
        flexDirection: 'row',
        width: '85.6%',
        height: 50,
        alignItems: 'center',
        alignSelf: 'flex-start'

    },

    formInput2: {
        flexDirection: 'row',
        width: '86.5%',
        height: 50,
        alignItems: 'center',
        alignSelf: 'stretch',

    },

    input: {
        width: '85%',
        height: 50,
        padding: 8,
        color: 'white',
        borderStyle: 'solid',
        borderBottomWidth: 0.5,
        borderColor: '#D3D3D3',
    },

    formText: {
        margin: 15,
        top: 15,
        width: '100%',
    },

    inputText: {
        position: 'relative',
        fontSize: 15,
        color: "white",
    },

    letter: {
        position: 'relative',
        alignSelf: 'baseline',
        bottom: 50


    },

    text: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white'
    },

    text1: {
        fontWeight: 'bold',
        fontSize: 35,
        color: '#4169E1'
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
        margin: 100,
    }
});

export default Form;