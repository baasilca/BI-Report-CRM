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
        acheived: '1500.00',
        email: 'abdulrasak@cezcon.com',
        mobile: '9539293708',
        profile: 'user'
    },
    {
        avatar: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
        title: 'Ahmad Abdullah',
        description: 'Sales Executive',
        target: '4500.00',
        acheived: '2200.00',
        email: 'ahmedk@cezcon.com',
        mobile: '9961693615',
        profile: 'user'
    },
    {
        avatar: 'https://cdn2.vectorstock.com/i/1000x1000/49/86/man-character-face-avatar-in-glasses-vector-17074986.jpg',
        title: 'Demo User',
        description: 'Sales Supervisor',
        target: '3500.00',
        acheived: '1545.00',
        email: 'demouser@cezcon.com',
        mobile: '8078007956',
        profile: 'user'
    },
];



const SalesExecutiveOverview = (props) => {

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Avatar.Image
                resizeMode="contain"
                style={{ backgroundColor: "#e6d3d3", alignSelf: "center" }}
                size={55}
                source={{ uri: item.avatar }}
            />
            <Text style={styles.titleStyle}>{item.title}</Text>
            <Text style={styles.descriptionStyle}>{item.description}</Text>
            <Text style={styles.targetStyle}>Target (Q3): {item.target}</Text>
            <Text style={styles.acheivedStyle}>Achieved (Q3):: {item.acheived}</Text>
            <View style={{ marginTop: 15, alignSelf: "center" }}>
                <Button
                    containerStyle={styles.buttonStyle}
                    style={{ color: 'white', fontSize: 13 }}
                    onPress={() => {
                        props.navigation.navigate('Sales Details', {
                            data: item,
                        })
                    }}
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
    },
    card: {
        backgroundColor: '#fff',
        margin: 5,
        padding: 15,
        borderLeftWidth: 4,
        borderBottomWidth: 4,
        borderLeftColor: "#177d99",
        borderBottomColor: "#177d99",
        borderRadius: 10,
        elevation: 3,
        marginVertical: 8,
        marginHorizontal: 30,
        borderWidth: 0.5,
        borderTopColor: "#bababa",
        borderRightColor: "#bababa"
    },
    titleStyle: {
        textAlign: "center",
        top: 3,
        fontSize: 16,
        fontWeight: "bold"
    },
    descriptionStyle: {
        textAlign: "center",
        top: 3,
        fontSize: 13
    },
    targetStyle: {
        textAlign: "center",
        top: 5,
        fontSize: 10
    },
    acheivedStyle: {
        textAlign: "center",
        top: 8,
        fontSize: 10
    },
    buttonStyle: {
        width: 80,
        height: 30,
        backgroundColor: '#eb2459',
        padding: 5,
        alignItems: 'center',
        borderRadius: 30
    }

});

export default SalesExecutiveOverview;