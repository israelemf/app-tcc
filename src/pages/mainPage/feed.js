import React from 'react';
import { View, StyleSheet, StatusBar, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';

function Feed() {

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}
            accessible={false}>
            <View style={styles.container}>
                <Text>Teste</Text>
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

export default Feed;