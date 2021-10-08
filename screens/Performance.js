import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, FlatList, Image } from 'react-native';
import SelectDropdown from './../Components/SelectDropdown';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Divider, Card, IconButton } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

const filter = [, "2SCFDAFCSDZC019", "20SDFGVDSSCFD20", "20DSFVX21", "2SCFDAFCSDZC019", "20SDFGVDSSCFD20", "20DSFVX21", "2SCFDAFCSDZC019", "20SDFGVDSSCFD20", "20DSFVX21", "2SCFDAFCSDZC019", "20SDFGVDSSCFD20", "20DSFVX21", "2SCFDAFCSDZC019", "20SDFGVDSSCFD20", "20DSFVX21"]
const Dropdown = () => {
    return (
        <SelectDropdown
            buttonStyle={styles.KeyCustomerButton}
            buttonTextStyle={{ fontSize: 13 }}
            data={filter}
            dropdownStyle={styles.dropdownStyle}
            defaultButtonText="All"
            renderDropdownIcon={() => {
                return (
                    <MaterialCommunityIcons
                        name="chevron-down"
                        color="#099"
                        size={20}
                    />
                )
            }}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
            }}
            rowTextForSelection={(item, index) => {
                return item
            }}
        />

    )
}
const Performance = () => {
    return (
        <ScrollView style={{ flex: 1,margin:'1%' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text>Business Opportunity Report</Text>
                <Dropdown />
            </View>
            <View style={{}}>
                <Card style={{
                    backgroundColor: 'red', width: '90%',
                    marginLeft: '5%', margin: '1%',
                }}>
                    <Text>wsdefrgthjkwsedrftgyui</Text>
                </Card>
            </View>
        </ScrollView>
    );
}

export default Performance;
const styles = StyleSheet.create({
    dropdownStyle: {
        backgroundColor: '#effff9',
        borderWidth: .5,
        borderRadius: 20,
    }, KeyCustomerButton: {
        alignSelf: 'flex-start',
        borderWidth: 0.3,
        backgroundColor: "#effff9",
        height: 27,
        left: 10,
        margin: '2%',
        borderRadius: 2,
        tintColor: 'white',
        width: "50%"
    },
})