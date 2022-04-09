import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import Balance from 'react-native-vector-icons/FontAwesome'
import Height from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/Feather'



function Profile() {

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}
            accessible={false}>
            <View style={styles.container}>
                <View style={styles.bloco}>

                    <View style={{ top: 30 }}>
                        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Birulinha da Silva</Text>
                    </View>

                    <View style={{ margin: 50 }}>
                        <Text style={styles.text}>Informações principais</Text>
                    </View>


                    <View style={styles.information}>
                        <View style={styles.icon}>
                            <Balance name="balance-scale" size={20} color="white" />
                        </View>
                        <Text style={styles.text}>Peso (kg): </Text>
                        <Text style={styles.text}>68</Text>
                    </View>
                    <View style={styles.information}>
                        <View style={styles.icon}>
                            <Height name="human-male-height" size={22} color="white" />
                        </View>
                        <Text style={styles.text}>Altura (cm): </Text>
                        <Text style={styles.text}>169</Text>
                    </View>

                    <View style={styles.information}>
                        <View style={styles.icon}>
                            <Icon name="target" size={22} color="white" />
                        </View>
                        <Text style={styles.text}>Objetivo: </Text>
                        <Text style={styles.text}>Ganhar peso</Text>
                    </View>

                    <View style={styles.information}>
                        <View style={styles.icon}>
                            <Icon name="activity" size={22} color="white" />
                        </View>
                        <Text style={styles.text}>Nivel de atividade: </Text>
                        <Text style={styles.text}>Avançado</Text>
                    </View>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: "white",
                        }}
                        >Editar</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </TouchableWithoutFeedback >
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#1C1C1C',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    bloco: {
        width: 350,
        height: 350,
        alignContent: 'center',
        borderColor: '#808080',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#4F4F4F',
        borderRadius: 10
    },

    information: {
        width: '90%',
        height: '8%',
        borderRadius: 10,
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#363636',
        bottom: 40
    },

    text: {
        color: 'white'
    },

    icon: {
        width: '15%',
        height: 50,
        paddingRight: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderStyle: 'solid',
        borderBottomWidth: 0.5,
        borderColor: '#D3D3D3',

    },

    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        width: '100%',
        height: 30,
        elevation: 10,
        backgroundColor: '#4169E1',

    }


});

export default Profile;