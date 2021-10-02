import React, { useState, useRef } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

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
const AnalyticsLead = (props) => {

    const [filterValue, setFilterValue] = useState({ key: 'today', label: 'Today' })
    const abc = useRef()

    const onChanageDateRangeOption = (option) => {
        if (option.label === 'Custom Range') {
            props.navigation.navigate('CustomRange', {
                callback: (item) => {

                    console.log(item);

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
                            {filterValue.label}
                        </Text>
                    </View>
                </ModalSelector>
                <Icon name="filter" size={22} color="#ffa069" style={{ top: 8 }}
                    onPress={() => {
                        abc.current.open()
                    }}
                />
            </View>
            <Card style={styles.cardContainer}>
                <Text style={styles.heading}>Lead Conversion Analytics</Text>

                <View style={styles.firstRow}>
                    <Text style={styles.textStyle}>14</Text>
                </View>
                <Text style={styles.secondText}>7.14%</Text>

                <View style={styles.secondRow}>
                    <Text style={styles.textStyle}>1</Text>
                </View>
                <Text style={styles.secondText}>100.00%</Text>

                <View style={styles.thirdRow}>
                    <Text style={styles.textStyle}>1</Text>
                </View>
                <Text style={styles.secondText}>0.00%</Text>

                <View style={styles.fourthRow}>
                    <Text style={styles.textStyle}>0</Text>
                </View>

                <View style={{ flexDirection: "row" }}>

                    <View style={styles.leadsBox}></View>
                    <Text style={styles.text}>LEADS CREATED</Text>
                    <View style={styles.leadsConverted}></View>
                    <Text style={styles.text}> LEADS CONVERTED</Text>

                </View>
                <View style={{ flexDirection: "row" }}>

                    <View style={styles.opportunityBox}></View>
                    <Text style={styles.text}> OPPORTUNITY CREATED</Text>
                    <View style={styles.orderBox}></View>
                    <Text style={styles.text}> ORDER RECEIVED</Text>

                </View>
            </Card >
        </View >
    );
}

const styles = StyleSheet.create({

    cardContainer: {
        backgroundColor: "#fff",
        padding: 10,
        margin: 10,
    },
    heading: {
        fontWeight: "bold",
        padding: 15,
        fontSize: 15,
        color: "#177d99",
        marginLeft: -10
    },
    firstRow: {
        width: 300,
        height: 27,
        backgroundColor: "#71b6f9",
        borderRadius: 20,
        alignSelf: "center"
    },
    textStyle: {
        textAlign: "center",
        fontSize: 11,
        top: 5,
        color: "#fff",
        fontWeight: "bold"
    },
    secondText: {
        textAlign: "center",
        fontSize: 11,
        color: "black",
        opacity: 0.5
    },
    secondRow: {
        width: 250,
        height: 27,
        backgroundColor: "#f9c851",
        borderRadius: 20,
        alignSelf: "center"
    },
    thirdRow: {
        width: 200,
        height: 27,
        backgroundColor: "#35b8e0",
        borderRadius: 20,
        alignSelf: "center"
    },
    fourthRow: {
        width: 150,
        height: 27,
        backgroundColor: "#10c469",
        borderRadius: 20,
        alignSelf: "center"
    },
    leadsBox: {
        height: 10,
        width: 10,
        backgroundColor: "#71b6f9",
        marginTop: 22,
        marginLeft: 50
    },
    text: {
        fontSize: 10,
        marginLeft: 5,
        marginTop: 20
    },
    leadsConverted: {
        height: 10,
        width: 10,
        backgroundColor: "#f9c851",
        marginTop: 22,
        marginLeft: 10
    },
    opportunityBox: {
        height: 10,
        width: 10,
        backgroundColor: "#35b8e0",
        marginTop: 22,
        marginLeft: 35
    },
    orderBox: {
        height: 10,
        width: 10,
        backgroundColor: "#10c469",
        marginTop: 22,
        marginLeft: 10
    }

});

export default AnalyticsLead;