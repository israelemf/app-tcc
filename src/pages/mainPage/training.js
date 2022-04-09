import React from 'react';
import { View, StyleSheet, StatusBar, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { DataTable } from 'react-native-paper';

function Training() {

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}
            accessible={false}>
            <View style={styles.container}>
                <DataTable style={{ backgroundColor: 'white' }}>
                    <DataTable.Header style={{ height: 70 }}>
                        <DataTable.Title numberOfLines={10} >A (Peitoral x Triceps x Antebraço)</DataTable.Title>
                        <DataTable.Title numberOfLines={10} >B (Costas x Biceps x Triceps)</DataTable.Title>
                        <DataTable.Title numberOfLines={10} >C (Pernas x Ombro)</DataTable.Title>
                    </DataTable.Header>

                    <DataTable.Row >
                        <DataTable.Cell  >Supino</DataTable.Cell>
                        <DataTable.Cell>Remada</DataTable.Cell>
                        <DataTable.Cell >Agachamento</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell>Crucifixo</DataTable.Cell>
                        <DataTable.Cell>Pulley</DataTable.Cell>
                        <DataTable.Cell >Flexor</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell>Voador</DataTable.Cell>
                        <DataTable.Cell>Barra</DataTable.Cell>
                        <DataTable.Cell >Abdutor</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell>Sup. Alter</DataTable.Cell>
                        <DataTable.Cell>Rosca Direta</DataTable.Cell>
                        <DataTable.Cell >Sumô</DataTable.Cell>
                    </DataTable.Row>

                </DataTable>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#1C1C1C',
        alignItems: 'center',

    },

});

export default Training;