import React, { useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Key from 'react-native-vector-icons/FontAwesome5';

export default function InputLogin() {

    const password = useRef();

    return (
        <><View style={styles.formInput}>
            <Icon style={styles.icon} name="email" size={20} color="white" />
            <TextInput
                style={styles.input}
                color='white'
                placeholder="Digite seu e-mail"
                placeholderTextColor={'#363636'}
                keyboardType="ascii-capable"
                selectionColor={'white'}
                returnKeyType="next"
                onSubmitEditing={() => {
                    password.current.focus();
                }}
                blurOnSubmit={false} />
        </View>
            <View style={styles.formInput}>
                <Key style={styles.icon} name="key" size={18} color="white" />
                <TextInput
                    ref={password}
                    style={styles.input}
                    color='white'
                    placeholder="Digite sua senha"
                    placeholderTextColor={'#363636'}
                    keyboardType="ascii-capable"
                    selectionColor={'white'}
                    returnKeyType='done' />
            </View></>
    );
}

const styles = StyleSheet.create({

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
    }
});


