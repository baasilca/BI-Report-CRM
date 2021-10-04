import React, { useState, useRef } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert, Platform } from 'react-native';
import { Card } from 'react-native-paper'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import moment from "moment";
import SelectDropdown from './../Components/SelectDropdown';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ModalSelector from "react-native-modal-selector";

const _dateRangeOptions = [
    { key: 'today', label: 'Today' },
    { key: 'Yesterday', label: 'Yesterday' },
    { key: 'Last_7_days', label: 'Last 7 Days' },
    { key: 'Last_30_days', label: 'Last 30 Days' },
    { key: 'This_Month', label: 'This Month' },
    { key: 'Last_Month', label: 'Last Month' },
    { key: 'Custom_Range', label: 'Custom Range' },
];

const AnalyticsAccount = (props) => {


    const [filterValue, setFilterValue] = useState({ key: 'today', label: 'Today' })
    const abc = useRef()
    const [startDate, setstartDate] = useState()
    const [sDate, setSDate] = useState()
    const [endDate, setendDate] = useState()
    const [eDate, setEDate] = useState()
    const [DDate, setDDate] = useState()
    const tagging = ["All", "Premium", "No Website"]
    const KeyCustomer = ["All", "Yes", "No"]

    const onChanageDateRangeOption = (option) => {
        if (option.label !== 'Custom Range') {
            setstartDate(null)
            setSDate(null)
            setendDate(null)
            setEDate(null)
            setDDate(null)
        }
        if (option.label === 'Custom Range') {
            props.navigation.navigate('CustomRange', {
                callback: (item) => {
                    setDDate(item.displayedDate)
                    setSDate(item.startDate)
                    setEDate(item.endDate)
                    setstartDate(JSON.stringify(moment(item.startDate).format('DD-MM-YYYY')))
                    setendDate(JSON.stringify(moment(item.endDate).format('DD-MM-YYYY')))
                },
            })
        }
        setFilterValue(option);
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', alignSelf: 'flex-end', right: 20 }}>
                <ModalSelector
                    ref={abc}
                    touchableActiveOpacity={0.9}
                    data={_dateRangeOptions}
                    backdropPressToClose={true}
                    cancelText={"Cancel"}
                    initValue={filterValue.label}
                    onChange={onChanageDateRangeOption}
                    overlayStyle={{ flex: 1, padding: '5%', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.7)' }}
                >
                    <View style={{ padding: 10 }}>
                        <Text style={{ color: "black" }}>
                            {filterValue.label === "Custom Range" ?
                                <View></View>
                                : filterValue.label}
                        </Text>
                    </View>
                </ModalSelector>
                <TouchableOpacity hitSlop={{ top: 2, bottom: 2, left: 2, right: 2 }} onPress={() => {
                    abc.current.open()
                }}>
                    <Icon name="filter" size={22} color="#ffa069" style={{
                        top: filterValue.label === "Custom Range" && Platform.OS === "ios" ? 22 :
                            filterValue.label === "Custom Range" && Platform.OS === "android" ? 11 : 8,
                    }}

                    />
                </TouchableOpacity>
            </View>


            {filterValue.label === "Custom Range" ?
                <TouchableOpacity onPress={() => {
                    props.navigation.navigate('CustomRange', {
                        startdate: sDate,
                        enddate: eDate,
                        displaydate: DDate ? DDate : moment(),
                        fromUpdate: true,
                        callback: (item) => {
                            setDDate(item.displayedDate)
                            setSDate(item.startDate)
                            setEDate(item.endDate)
                            setstartDate(JSON.stringify(moment(item.startDate).format('DD-MM-YYYY')))
                            setendDate(JSON.stringify(moment(item.endDate).format('DD-MM-YYYY')))
                        },
                    })
                }} style={{ marginTop: 18, alignSelf: "flex-end", right: 45, bottom: 30 }}>
                    <View style={{ width: Platform.OS === "ios" ? 185 : 170, height: 25, backgroundColor: "#fff", borderWidth: 0.444, borderRadius: 5 }}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name="calendar-multiselect" size={20} color="#177d99" style={{ top: 3, left: 3 }}

                            />
                            {!startDate ?
                                <Text style={{ left: 5, top: 5, fontSize: 11 }}>Select Date Range</Text>
                                :
                                <>
                                    <Text style={{ left: 5, top: 5, fontSize: 11 }}>{startDate}</Text>
                                    <Text style={{ left: 5, top: 5, fontSize: 11 }}>--</Text>
                                    <Text style={{ left: 5, top: 5, fontSize: 11 }}>{endDate}</Text>
                                </>
                            }
                        </View>
                    </View>
                </TouchableOpacity> : null}


            <Card style={[styles.cardContainer, { bottom: filterValue.label === "Custom Range" ? 30 : 0 }]}>
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