import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'


class Gender extends Component {

    render() {
        return (

            <View style={styles.container}>

                <View style={styles.letter}>
                    <Text style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 18,
                        textAlign: 'justify'
                    }}>
                        Algumas informações sobre você serão solicitadas para calcular sua taxa metabólica basal
                    </Text>
                </View>
                <View style={styles.letter1}>

                    <Text style={{
                        color: 'white',
                        fontSize: 16,
                    }}>
                        Qual é o seu sexo biológico?
                    </Text>

                    <Text style={{
                        color: '#696969',
                        fontSize: 13,
                        textAlign: 'justify'
                    }}>
                        O sexo biológico é um dos pilares para determinar as necessidades energéticas do seu corpo.
                    </Text>
                </View>

                <View style={styles.iconContainer}>

                    <TouchableOpacity style={styles.maleIcon} onPress={() => this.props.navigation.navigate('Weight')}>
                        <Icon name='male' color={'#4169E1'} size={60} />
                        <Text style={{
                            color: '#696969',

                        }}>Masculino</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.femaleIcon} onPress={() => this.props.navigation.navigate('Weight')}>
                        <Icon name='female' color={'#FF69B4'} size={60} />
                        <Text style={{
                            color: '#696969',

                        }}>Feminino</Text>
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
        justifyContent: 'center',
        padding: 20,


    },

    letter: {
        alignSelf: 'flex-start',
        margin: 5,
        bottom: '25%',

    },

    letter1: {
        alignSelf: 'flex-start',
        margin: 5,
        bottom: '15%',

    },

    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        bottom: 90


    },

    maleIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 150,
        borderRadius: 15
    },

    femaleIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 150,
        borderRadius: 15
    }




});

export default Gender;