import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-paper'

const AnalyticsLead = () => {
    return (
        <View style={{ flex: 1 }}>

            <Card style={{ backgroundColor: "#fff", padding: 10, margin: 10 }}>
                <Text style={{ fontWeight: "bold", padding: 15, fontSize: 15, color: "#177d99", marginLeft: -10 }}>Lead Conversion Analytics</Text>

                <View style={{ width: 300, height: 27, backgroundColor: "#71b6f9", borderRadius: 20, alignSelf: "center" }}>
                    <Text style={{ textAlign: "center", fontSize: 11, top: 5, color: "#fff", fontWeight: "bold" }}>14</Text>
                </View>
                <Text style={{ textAlign: "center", fontSize: 11, color: "black", opacity: 0.5 }}>7.14%</Text>

                <View style={{ width: 250, height: 27, backgroundColor: "#f9c851", borderRadius: 20, alignSelf: "center" }}>
                    <Text style={{ textAlign: "center", fontSize: 11, top: 5, color: "#fff", fontWeight: "bold" }}>1</Text>
                </View>
                <Text style={{ textAlign: "center", fontSize: 11, color: "black", opacity: 0.5 }}>100.00%</Text>

                <View style={{ width: 200, height: 27, backgroundColor: "#35b8e0", borderRadius: 20, alignSelf: "center" }}>
                    <Text style={{ textAlign: "center", fontSize: 11, top: 5, color: "#fff", fontWeight: "bold" }}>1</Text>
                </View>
                <Text style={{ textAlign: "center", fontSize: 11, color: "black", opacity: 0.5 }}>0.00%</Text>

                <View style={{ width: 150, height: 27, backgroundColor: "#10c469", borderRadius: 20, alignSelf: "center" }}>
                    <Text style={{ textAlign: "center", fontSize: 11, top: 5, color: "#fff", fontWeight: "bold" }}>0</Text>
                </View>

                <View style={{ flexDirection: "row" }}>

                    <View style={{ height: 10, width: 10, backgroundColor: "#71b6f9", marginTop: 22, marginLeft: 50 }}></View>
                    <Text style={{ fontSize: 10, marginLeft: 5, marginTop: 20 }}>LEADS CREATED</Text>
                    <View style={{ height: 10, width: 10, backgroundColor: "#f9c851", marginTop: 22, marginLeft: 10 }}></View>
                    <Text style={{ fontSize: 10, marginLeft: 5, marginTop: 20 }}> LEADS CONVERTED</Text>

                </View>
                <View style={{ flexDirection: "row" }}>

                    <View style={{ height: 10, width: 10, backgroundColor: "#35b8e0", marginTop: 22, marginLeft: 35 }}></View>
                    <Text style={{ fontSize: 10, marginLeft: 5, marginTop: 20 }}> OPPORTUNITY CREATED</Text>
                    <View style={{ height: 10, width: 10, backgroundColor: "#10c469", marginTop: 22, marginLeft: 10 }}></View>
                    <Text style={{ fontSize: 10, marginLeft: 5, marginTop: 20 }}> ORDER RECEIVED</Text>

                </View>
            </Card >

        </View >
    );
}

export default AnalyticsLead;