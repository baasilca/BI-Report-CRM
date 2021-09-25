
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { Appbar, Divider, List, Avatar } from 'react-native-paper';





const SalesDetails = (props) => {

    const { route } = props;
    const { title, avatar, designation, email, mobile, user } = route.params;

    return (
        <>
            <StatusBar
                backgroundColor="#177d99"
            />
            <View style={{ backgroundColor: '#fff', margin: 5, padding: 15, borderLeftWidth: 4, borderBottomWidth: 4, borderLeftColor: "#177d99", borderBottomColor: "#177d99", borderRadius: 10, elevation: 3, marginVertical: 8, marginHorizontal: 40, paddingBottom: 35 }}>
                <Avatar.Image
                    resizeMode="contain"
                    style={{ backgroundColor: "#e6d3d3", alignSelf: "center" }}
                    size={55}
                    source={{ uri: avatar }}
                />
                <Text style={{ textAlign: "center", top: 3, fontSize: 16, fontWeight: "bold" }}>{title}</Text>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ top: 5, fontSize: 13, opacity: 0.5 }}>Mobile: </Text>
                    <Text style={{ top: 5, fontSize: 13, opacity: 0.5 }}>{mobile}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ top: 5, fontSize: 13, opacity: 0.5 }}>Email: </Text>
                    <Text style={{ top: 5, fontSize: 13, opacity: 0.5 }}>{email}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ top: 5, fontSize: 13, opacity: 0.5 }}>Profile: </Text>
                    <Text style={{ top: 5, fontSize: 13, opacity: 0.5 }}>{user}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ top: 5, fontSize: 13, opacity: 0.5 }}>Designation: </Text>
                    <Text style={{ top: 5, fontSize: 13, opacity: 0.5 }}>{designation}</Text>
                </View>

            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }

});

export default SalesDetails;