import React, { useState } from "react";
import { Text, View, Picker } from 'react-native';
import { Card } from 'react-native-paper'
import SelectDropdown from './../Components/SelectDropdown';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const AnalyticsAccount = () => {
    const tagging = ["All", "Premium", "No Website"]
    const KeyCustomer = ["All", "Yes", "No"]
    // const [tagging, setTagging] = useState("All");
    return (
        <View style={{ flex: 1 }}>
            <Card style={{ backgroundColor: "#fff", padding: 15, margin: 10 }}>
                <Text style={{ fontWeight: "bold", padding: 15, fontSize: 15, color: "#177d99", marginLeft: -10 }}>Account Overview</Text>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ left: 5, }}>Tagging</Text>
                    <SelectDropdown
                        buttonStyle={{ left: 65, bottom: 3, borderWidth: 0.444, backgroundColor: "#fff", height: 25, borderRadius: 10, width: 150 }}
                        buttonTextStyle={{ fontSize: 13 }}
                        data={tagging}
                        dropdownStyle={{ backgroundColor: "#fff", borderWidth: 1, borderRadius: 15 }}
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
                            // text represented after item is selected
                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            // text represented for each item in dropdown
                            // if data array is an array of objects then return item.property to represent item in dropdown
                            return item
                        }}
                    />

                </View>
                <View style={{ flexDirection: "row", marginTop: 25 }}>
                    <Text style={{ left: 5 }}>Key Customer</Text>
                    <SelectDropdown
                        buttonStyle={{ left: 30, bottom: 3, borderWidth: 0.444, backgroundColor: "#fff", height: 25, borderRadius: 10, width: 150 }}
                        buttonTextStyle={{ fontSize: 13 }}
                        data={KeyCustomer}
                        dropdownStyle={{ backgroundColor: "#fff", borderWidth: 1, borderRadius: 15, }}
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
                            // text represented after item is selected
                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            // text represented for each item in dropdown
                            // if data array is an array of objects then return item.property to represent item in dropdown
                            return item
                        }}
                    />

                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ marginTop: 20, marginLeft: 5, width: 140, height: 120, backgroundColor: "#1dc4e9", borderRadius: 10 }}>
                        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16, textAlign: "center", top: 20 }}>Total Accounts</Text>
                        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20, textAlign: "center", top: 30 }}>0</Text>

                    </View>
                    <View style={{ marginTop: 20, marginLeft: 10, width: 140, height: 120, backgroundColor: "#a389d4", borderRadius: 10 }}>
                        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16, textAlign: "center", top: 20 }}>Customers</Text>
                        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20, textAlign: "center", top: 30 }}>0</Text>
                        <Text style={{ color: "#fff", fontSize: 14, textAlign: "center", top: 40, left: 5 }}>0.00%</Text>

                    </View>
                </View>


            </Card>

        </View>
    );
}

export default AnalyticsAccount;