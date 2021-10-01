
import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, Image, ScrollView, Alert } from 'react-native';
import { Avatar } from 'react-native-paper';

const SalesDetails = (props) => {

    const { route } = props;
    const { avatar, title, mobile, profile, description, email } = route.params.data;


    const renderItem = ({ item }) => {

        if (item.type === "1") {

            return (

                <View style={[styles.firstCard, { borderLeftColor: item.color, borderBottomColor: item.color, }]}>

                    <Text style={{ fontSize: 13, fontWeight: "bold" }}>{item.title}</Text>

                    <Text style={{ top: 3, fontWeight: "bold" }}>{item.amount}</Text>

                    <Text style={{ fontSize: 12, textAlign: "right", bottom: 20 }}>{item.badge}</Text>

                    <Text style={{ fontSize: 11, textAlign: "right", bottom: 15 }}>{item.status}</Text>

                </View>
            )
        } else {
            return (
                <View style={[styles.secondCard, { borderLeftColor: item.color, borderBottomColor: item.color, }]}>

                    <Text style={{ fontSize: 13, fontWeight: "bold", textAlign: "center" }}>{item.amount}</Text>

                    <Text style={{ top: 3, fontSize: 12, textAlign: "center" }}>{item.msg}</Text>


                </View>
            )
        }
    }

    return (
        <ScrollView>
            <StatusBar
                backgroundColor="#177d99"
            />
            <View style={styles.mainCard}>
                <Avatar.Image
                    resizeMode="contain"
                    style={{ backgroundColor: "#e6d3d3", alignSelf: "center" }}
                    size={55}
                    source={{ uri: avatar }}

                />
                <Text style={{ textAlign: "center", top: 3, fontSize: 16, fontWeight: "bold" }}>{title}</Text>
                <View style={{ flexDirection: "row", top: 5 }}>
                    <Text style={styles.cardText}>Mobile: </Text>
                    <Text style={styles.cardText}>{mobile}</Text>
                </View>
                <View style={{ flexDirection: "row", top: 5 }}>
                    <Text style={styles.cardText}>Email: </Text>
                    <Text style={styles.cardText}>{email}</Text>
                </View>
                <View style={{ flexDirection: "row", top: 5 }}>
                    <Text style={styles.cardText}>Profile: </Text>
                    <Text style={styles.cardText}>{profile}</Text>
                </View>
                <View style={{ flexDirection: "row", top: 5 }}>
                    <Text style={styles.cardText}>Designation: </Text>
                    <Text style={styles.cardText}>{description}</Text>
                </View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 10 }}>

                <View style={{ flex: 1 }}>
                    <View style={[styles.NotificationCircle, { backgroundColor: "#ffb74d" }]}>
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>7</Text>
                        </View>
                        <Image
                            style={styles.imageStyle}
                            source={require('../assets/hot_opportunity.jpg')}
                        />
                    </View>
                    <Text style={styles.label}>Hot Opportunity</Text>
                </View>



                <View style={{ flex: 1 }}>
                    <View style={[styles.NotificationCircle, { backgroundColor: "#F48FB1" }]}>
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>0</Text>
                        </View>

                        <Image
                            style={styles.imageStyle}
                            source={require('../assets/this_month_opportunity.png')}
                        />

                    </View>
                    <Text style={styles.label}>This Month Opportunity</Text>
                </View>


                <View style={{ flex: 1 }}>
                    <View style={[styles.NotificationCircle, { backgroundColor: "#CE93D8" }]}>
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>58</Text>
                        </View>

                        <Image
                            style={styles.imageStyle}
                            source={require('../assets/opportunity_due.png')}
                        />

                    </View>
                    <Text style={styles.label}>Due Opportunity</Text>
                </View>


            </View>
            <View style={{ flexDirection: "row", marginTop: 10 }}>

                <View style={{ flex: 1 }}>
                    <View style={[styles.NotificationCircle, { backgroundColor: "#B39DDB" }]}>
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>1</Text>
                        </View>
                        <Image
                            style={styles.imageStyle}
                            source={require('../assets/hot_leads.png')}
                        />
                    </View>
                    <Text style={styles.label}>Hot Leads</Text>
                </View>


                <View style={{ flex: 1 }}>
                    <View style={[styles.NotificationCircle, { backgroundColor: "#9FA8DA" }]}>
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>5</Text>
                        </View>

                        <Image
                            style={styles.imageStyle}
                            source={require('../assets/todays_task.png')}
                        />

                    </View>
                    <Text style={styles.label}>Task Pending Today</Text>
                </View>


                <View style={{ flex: 1 }}>
                    <View style={[styles.NotificationCircle, { backgroundColor: "#90caf9" }]}>
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>0</Text>
                        </View>

                        <Image
                            style={styles.imageStyle}
                            source={require('../assets/task_expired.png')}
                        />

                    </View>
                    <Text style={styles.label}>Task Expired</Text>
                </View>


            </View>
            <View style={{ flexDirection: "row" }}>

            </View>
            <View style={{ marginTop: 20, alignSelf: 'center' }}>
                <FlatList
                    data={[
                        { title: 'Sale Target', amount: "20,000.00", status: "Achieved", badge: "0%", color: "#321fdb", type: "1" },
                        { title: 'Sale', amount: "0.00", status: "Average Sale", badge: "0.00", color: "#39f", type: "1" },
                        { title: 'Collection Target', amount: "20,000.00", status: "Reached", badge: "0%", color: "#f9b115", type: "1" },
                        { title: 'Lead', amount: "0", status: "Qualified", badge: "0%", color: "#e55353", type: "1" },
                        { amount: "10,000.00", msg: "Required Average Sales/Day", color: "#4CAF50", type: "0" },
                        { amount: "2", msg: "Number of Sale Conversion Required", color: "#9E9E9E", type: "0" },
                        { amount: "6", msg: "Number of Opportunity Required", color: "#0044cc", type: "0" },
                        { amount: "0.00", msg: "Sales From Existing Customer", color: "#F44336", type: "0" },

                    ]}


                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns="2"
                />
            </View>



        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainCard: {
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
        marginHorizontal: 40,
        paddingBottom: 30,
        borderWidth: 0.5,
        borderTopColor: "#bababa",
        borderRightColor: "#bababa"
    },
    firstCard: {
        height: 80,
        width: 160,
        backgroundColor: "#fff",
        padding: 15,
        borderLeftWidth: 4,
        borderBottomWidth: 4,
        borderRadius: 10,
        elevation: 3,
        marginVertical: 8,
        marginHorizontal: 10,
        paddingBottom: 35,
        borderWidth: 0.5,
        borderTopColor: "#bababa",
        borderRightColor: "#bababa"
    },
    secondCard: {
        height: 90,
        width: 160,
        backgroundColor: "#fff",
        padding: 15,
        borderLeftWidth: 4,
        borderBottomWidth: 4,
        borderRadius: 10,
        elevation: 3,
        marginVertical: 8,
        marginHorizontal: 10,
        paddingBottom: 35,
        borderWidth: 0.5,
        borderTopColor: "#bababa",
        borderRightColor: "#bababa"
    },
    cardText: {
        top: 5,
        fontSize: 13,
        opacity: 0.5
    },
    badge: {
        backgroundColor: "red",
        width: 20,
        height: 20,
        borderRadius: 30,
        alignSelf: "flex-end",
        justifyContent: "center"
    },
    badgeText: {
        color: "#fff",
        alignSelf: "center",
        fontSize: 10
    },
    label: {
        fontSize: 10,
        color: "black",
        alignSelf: "center"
    },
    imageStyle: {
        height: 40,
        width: 40,
        alignSelf: "center",
        bottom: 4
    },
    NotificationCircle: {
        borderRadius: 50,
        height: 80,
        width: 80,
        alignSelf: "center"
    }

});

export default SalesDetails;