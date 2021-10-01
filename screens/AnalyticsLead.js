import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper'

const AnalyticsLead = () => {
    return (
        <View style={{ flex: 1 }}>

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
        margin: 10
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