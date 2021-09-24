import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { Appbar, Divider, List, Avatar } from 'react-native-paper';
import Button from 'react-native-button';
import AppStyles from '../AppStyles'

const DATA = [
    {
        avatar: 'https://st3.depositphotos.com/1007566/12989/v/950/depositphotos_129895116-stock-illustration-hacker-character-avatar-icon.jpg',
        title: 'Abdul Rasakh',
        description: 'Marketing Manager',
        target: '3000.00',
        acheived: '1500.00'
    },
    {
        avatar: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
        title: 'Ahmad Abdullah',
        description: 'Sales Executive',
        target: '4500.00',
        acheived: '2200.00'
    },
    {
        avatar: 'https://cdn2.vectorstock.com/i/1000x1000/49/86/man-character-face-avatar-in-glasses-vector-17074986.jpg',
        title: 'Demo User',
        description: 'Sales Supervisor',
        target: '3500.00',
        acheived: '1545.00'
    },
];



const SalesExecutiveOverview = () => {

    const renderItem = ({ item }) => (
        <View style={{ backgroundColor: '#fff', margin: 5, padding: 15, borderLeftWidth: 4, borderBottomWidth: 4, borderLeftColor: "#177d99", borderBottomColor: "#177d99", borderRadius: 10, elevation: 3, marginVertical: 8, marginHorizontal: 30, }}>
            <Avatar.Image
                resizeMode="contain"
                style={{ backgroundColor: "#e6d3d3", alignSelf: "center" }}
                size={55}
                source={{ uri: item.avatar }}
            />
            <Text style={{ textAlign: "center", top: 3, fontSize: 16, fontWeight: "bold" }}>{item.title}</Text>
            <Text style={{ textAlign: "center", top: 3, fontSize: 13 }}>{item.description}</Text>
            <Text style={{ textAlign: "center", top: 5, fontSize: 10 }}>Target (Q3): {item.target}</Text>
            <Text style={{ textAlign: "center", top: 8, fontSize: 10 }}>Achieved (Q3):: {item.acheived}</Text>
            <View style={{ marginTop: 15, alignSelf: "center" }}>
                <Button
                    containerStyle={{
                        width: 80,
                        height: 30,
                        backgroundColor: '#eb2459',
                        padding: 5,
                        alignItems: 'center',
                        borderRadius: 30
                    }}
                    style={{ color: 'white', fontSize: 13 }}
                    onPress={() => { }}
                >
                    Overview
                </Button>
            </View>
        </View>
    );

    return (
        <>
            <StatusBar
                backgroundColor={AppStyles.Colors.screensHeaderColor}
            />
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    }

});

export default SalesExecutiveOverview;