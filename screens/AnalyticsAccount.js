import React, { useState } from "react";
import { Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper'
import SelectDropdown from './../Components/SelectDropdown';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AnalyticsAccount = () => {

    const tagging = ["All", "Premium", "No Website"]
    const KeyCustomer = ["All", "Yes", "No"]

    return (
        <View style={{ flex: 1 }}>
            <Card style={styles.cardContainer}>
                <Text style={styles.heading}>Account Overview</Text>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ left: 5, }}>Tagging</Text>
                    <SelectDropdown
                        buttonStyle={styles.taggingButton}
                        buttonTextStyle={{ fontSize: 13 }}
                        data={tagging}
                        dropdownStyle={styles.dropdownStyle}
                        defaultButtonText="All"
                        renderDropdownIcon={() => {
                            return (
                                <MaterialCommunityIcons
                                    name="chevron-down"
                                    color="#bababa"
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

                </View>
                <View style={{ flexDirection: "row", marginTop: 25 }}>
                    <Text style={{ left: 5 }}>Key Customer</Text>
                    <SelectDropdown
                        buttonStyle={styles.KeyCustomerButton}
                        buttonTextStyle={{ fontSize: 13 }}
                        data={KeyCustomer}
                        dropdownStyle={styles.dropdownStyle}
                        defaultButtonText="All"
                        renderDropdownIcon={() => {
                            return (
                                <MaterialCommunityIcons
                                    name="chevron-down"
                                    color="#bababa"
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

                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={styles.accountBox}>
                        <Text style={styles.mainText}>Total Accounts</Text>
                        <Text style={styles.accountBoxText}>0</Text>

                    </View>
                    <View style={styles.customerBox}>
                        <Text style={styles.mainText}>Customers</Text>
                        <Text style={styles.customerBoxText}>0</Text>
                        <Text style={styles.customerTextTwo}>0.00%</Text>

                    </View>
                </View>


            </Card>

        </View>
    );
}

const styles = StyleSheet.create({

    mainText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
        top: 20
    },
    accountBox: {
        marginTop: 20,
        marginLeft: 5,
        width: 140,
        height: 120,
        backgroundColor: "#1dc4e9",
        borderRadius: 10
    },
    accountBoxText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        top: 30
    },
    customerBox: {
        marginTop: 20,
        marginLeft: 10,
        width: 140,
        height: 120,
        backgroundColor: "#a389d4",
        borderRadius: 10
    },
    customerBoxText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        top: 30
    },
    customerTextTwo: {
        color: "#fff",
        fontSize: 14,
        textAlign: "center",
        top: 40,
        left: 5
    },
    cardContainer: {
        backgroundColor: "#fff",
        padding: 15,
        margin: 10
    },
    heading: {
        fontWeight: "bold",
        padding: 15,
        fontSize: 15,
        color: "#177d99",
        marginLeft: -10
    },
    taggingButton: {
        left: 65,
        bottom: 3,
        borderWidth: 0.444,
        backgroundColor: "#fff",
        height: 25,
        borderRadius: 10,
        width: 150
    },
    KeyCustomerButton: {
        left: 30,
        bottom: 3,
        borderWidth: 0.444,
        backgroundColor: "#fff",
        height: 25,
        borderRadius: 10,
        width: 150
    },
    dropdownStyle: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderRadius: 15
    }

});


export default AnalyticsAccount;