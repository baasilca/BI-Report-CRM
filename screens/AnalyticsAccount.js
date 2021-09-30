import React, { useState } from "react";
import { Text, View, Picker } from 'react-native';
import { Card } from 'react-native-paper'
const AnalyticsAccount = () => {
    const [tagging, setTagging] = useState("All");
    return (
        <View style={{ flex: 1 }}>
            <Card style={{ backgroundColor: "#fff", padding: 15, margin: 10 }}>
                <Text style={{ fontWeight: "bold", padding: 15, fontSize: 15, color: "#177d99", marginLeft: -10 }}>Account Overview</Text>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ left: 5, }}>Tagging</Text>
                    <Picker
                        selectedValue={tagging}
                        style={{ height: 50, width: 150, marginLeft: 50, bottom: 15 }}
                        onValueChange={(itemValue, itemIndex) => setTagging(itemValue)}
                    >
                        <Picker.Item label="All" value="All" />
                        <Picker.Item label="premium" value="premium" />
                        <Picker.Item label="No website" value="Nowebsite" />
                    </Picker>
                </View>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <Text style={{ left: 5 }}>Key Customer</Text>

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