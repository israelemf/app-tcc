import React from 'react';
import { View, StyleSheet, StatusBar, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';

function Index() {

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}
            accessible={false}>
            <View style={styles.container}>

            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#1C1C1C',
        alignItems: 'center',
        padding: 25
    },

});

export default Index;