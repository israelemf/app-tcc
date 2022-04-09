import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';

function Feeding() {

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}
            accessible={false}>
            <View style={styles.container}>
                <View style={styles.bloco}>
                    <Text style={styles.text}>Café da Manhã</Text>
                </View>
                <View style={styles.bloco1}>
                    <Text style={styles.text}>Lanche</Text>
                </View>
                <View style={styles.bloco1}>
                    <Text style={styles.text}>Almoço</Text>
                </View>
                <View style={styles.bloco1}>
                    
                    <Text style={styles.text}>Lanche</Text>
                    <View style={styles.subBloco}>

                    </View>
                </View>
                <View style={styles.bloco1}>
                    <Text style={styles.text}>Janta</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#1C1C1C',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },

    bloco: {
        flex: 1.8,
        alignContent: 'center',
        borderWidth: 1,
        borderColor: '#808080',
        alignItems: 'center',
    },

    bloco1: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#808080',
        alignContent: 'center',
        alignItems: 'center',
    },

    subBloco: {
        backgroundColor: 'red'
    },

    text: {
        color: 'white',
        fontSize: 15
    }

});

export default Feeding;