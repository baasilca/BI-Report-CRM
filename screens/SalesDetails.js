
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, ScrollView } from 'react-native';
import { Appbar, Divider, List, Avatar } from 'react-native-paper';

const SalesDetails = (props) => {

    const { route } = props;
    const { title, avatar, designation, email, mobile, user } = route.params;


    const renderItem = ({ item }) => {

        if (item.type === "1") {

            return (

                <View style={{
                    height: 80,
                    width: 160,
                    backgroundColor: "#fff",
                    padding: 15,
                    borderLeftWidth: 4,
                    borderBottomWidth: 4,
                    borderLeftColor: "red",
                    borderBottomColor: "green",
                    borderRadius: 10,
                    elevation: 3,
                    marginVertical: 8,
                    marginHorizontal: 10,
                    paddingBottom: 35,
                    borderWidth: 0.5,
                    borderTopColor: "#bababa",
                    borderRightColor: "#bababa"
                }}>

                    <Text style={{ fontSize: 13, fontWeight: "bold" }}>{item.title}</Text>

                    <Text style={{ top: 3, fontWeight: "bold" }}>{item.amount}</Text>

                    <Text style={{ fontSize: 12, textAlign: "right", bottom: 20 }}>{item.badge}</Text>

                    <Text style={{ fontSize: 11, textAlign: "right", bottom: 15 }}>{item.status}</Text>

                </View>
            )
        } else {
            return (
                <View style={{
                    height: 90,
                    width: 160,
                    backgroundColor: "#fff",
                    padding: 15,
                    borderLeftWidth: 4,
                    borderBottomWidth: 4,
                    borderLeftColor: "red",
                    borderBottomColor: "green",
                    borderRadius: 10,
                    elevation: 3,
                    marginVertical: 8,
                    marginHorizontal: 10,
                    paddingBottom: 35,
                    borderWidth: 0.5,
                    borderTopColor: "#bababa",
                    borderRightColor: "#bababa"
                }}>



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
            <View style={{
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
            }}>
                <Avatar.Image
                    resizeMode="contain"
                    style={{ backgroundColor: "#e6d3d3", alignSelf: "center" }}
                    size={55}
                    source={{ uri: avatar }}
                />
                <Text style={{ textAlign: "center", top: 3, fontSize: 16, fontWeight: "bold" }}>{title}</Text>
                <View style={{ flexDirection: "row", top: 5 }}>
                    <Text style={{ top: 5, fontSize: 13, opacity: 0.5 }}>Mobile: </Text>
                    <Text style={{ top: 5, fontSize: 13, opacity: 0.5 }}>{mobile}</Text>
                </View>
                <View style={{ flexDirection: "row", top: 5 }}>
                    <Text style={{ top: 5, fontSize: 13, opacity: 0.5 }}>Email: </Text>
                    <Text style={{ top: 5, fontSize: 13, opacity: 0.5 }}>{email}</Text>
                </View>
                <View style={{ flexDirection: "row", top: 5 }}>
                    <Text style={{ top: 5, fontSize: 13, opacity: 0.5 }}>Profile: </Text>
                    <Text style={{ top: 5, fontSize: 13, opacity: 0.5 }}>{user}</Text>
                </View>
                <View style={{ flexDirection: "row", top: 5 }}>
                    <Text style={{ top: 5, fontSize: 13, opacity: 0.5 }}>Designation: </Text>
                    <Text style={{ top: 5, fontSize: 13, opacity: 0.5 }}>{designation}</Text>
                </View>
            </View>
            <View style={{ flexDirection: "row" }}>

                <View>
                    <View style={{ backgroundColor: "#ffb74d", borderRadius: 50, height: 80, width: 80, left: "30%", justifyContent: "center" }}>
                        <View style={{ backgroundColor: "red", width: 20, height: 20, borderRadius: 30, alignSelf: "flex-end", justifyContent: "center" }}>
                            <Text style={{ color: "#fff", alignSelf: "center", fontSize: 10 }}>7</Text>
                        </View>
                        <Image
                            style={{ height: 40, width: 40, alignSelf: "center", bottom: 8 }}
                            source={{
                                uri: 'https://www.crm-app-portal.com/crm/static/logo/hot_opportunity.jpg',
                            }}
                        />
                    </View>
                    <Text style={{ fontSize: 10, color: "black", alignSelf: "center", left: 20 }}>Hot Opportunity</Text>
                </View>
                <View>
                    <View style={{ backgroundColor: "#F48FB1", borderRadius: 50, height: 80, width: 80, left: "60%", justifyContent: "center" }}>
                        <View style={{ backgroundColor: "red", width: 20, height: 20, borderRadius: 30, alignSelf: "flex-end", justifyContent: "center" }}>
                            <Text style={{ color: "#fff", alignSelf: "center", fontSize: 10 }}>0</Text>
                        </View>

                        <Image
                            style={{ height: 40, width: 40, alignSelf: "center", bottom: 8 }}
                            source={{
                                uri: 'https://www.crm-app-portal.com/crm/static/logo/this_month_opportunity.png',
                            }}
                        />

                    </View>
                    <Text style={{ fontSize: 10, color: "black", alignSelf: "center", left: 45 }}>This Month Opportunity</Text>
                </View>
                <View>
                    <View style={{ backgroundColor: "#CE93D8", borderRadius: 50, height: 80, width: 80, left: "96%", justifyContent: "center" }}>
                        <View style={{ backgroundColor: "red", width: 20, height: 20, borderRadius: 30, alignSelf: "flex-end", justifyContent: "center" }}>
                            <Text style={{ color: "#fff", alignSelf: "center", fontSize: 10 }}>58</Text>
                        </View>

                        <Image
                            style={{ height: 40, width: 40, alignSelf: "center", bottom: 8 }}
                            source={{
                                uri: 'https://www.crm-app-portal.com/crm/static/logo/opportunity_due.png',
                            }}
                        />

                    </View>
                    <Text style={{ fontSize: 10, color: "black", alignSelf: "center", left: 75 }}>Due Opportunity</Text>
                </View>

            </View>
            <View style={{ flexDirection: "row", marginTop: 10 }}>

                <View>
                    <View style={{ backgroundColor: "#B39DDB", borderRadius: 50, height: 80, width: 80, left: "30%", justifyContent: "center" }}>
                        <View style={{ backgroundColor: "red", width: 20, height: 20, borderRadius: 30, alignSelf: "flex-end", justifyContent: "center" }}>
                            <Text style={{ color: "#fff", alignSelf: "center", fontSize: 10 }}>1</Text>
                        </View>
                        <Image
                            style={{ height: 40, width: 40, alignSelf: "center", bottom: 8 }}
                            source={{
                                uri: "https://www.crm-app-portal.com/crm/static/logo/hot_leads.png",
                            }}
                        />
                    </View>
                    <Text style={{ fontSize: 10, color: "black", alignSelf: "center", left: 20 }}>Hot Leads</Text>
                </View>
                <View>
                    <View style={{ backgroundColor: "#9FA8DA", borderRadius: 50, height: 80, width: 80, left: "70%", justifyContent: "center" }}>
                        <View style={{ backgroundColor: "red", width: 20, height: 20, borderRadius: 30, alignSelf: "flex-end", justifyContent: "center" }}>
                            <Text style={{ color: "#fff", alignSelf: "center", fontSize: 10 }}>5</Text>
                        </View>

                        <Image
                            style={{ height: 40, width: 40, alignSelf: "center", bottom: 8 }}
                            source={{
                                uri: 'https://www.crm-app-portal.com/crm/static/logo/todays_task.png',
                            }}
                        />

                    </View>
                    <Text style={{ fontSize: 10, color: "black", alignSelf: "center", left: 55 }}>Task Pending Today</Text>
                </View>
                <View>
                    <View style={{ backgroundColor: "#90caf9", borderRadius: 50, height: 80, width: 80, left: "110%", justifyContent: "center" }}>
                        <View style={{ backgroundColor: "red", width: 20, height: 20, borderRadius: 30, alignSelf: "flex-end", justifyContent: "center" }}>
                            <Text style={{ color: "#fff", alignSelf: "center", fontSize: 10 }}>0</Text>
                        </View>

                        <Image
                            style={{ height: 40, width: 40, alignSelf: "center", bottom: 8 }}
                            source={{
                                uri: 'https://www.crm-app-portal.com/crm/static/logo/task_expired.png',
                            }}
                        />

                    </View>
                    <Text style={{ fontSize: 10, color: "black", alignSelf: "center", left: 86 }}>Task Expired</Text>
                </View>

            </View>
            <View style={{ flexDirection: "row" }}>

            </View>
            <View style={{ marginTop: 20 }}>
                <FlatList
                    data={[
                        { title: 'Sale Target', amount: "20,000.00", status: "Achieved", badge: "0%", type: "1" },
                        { title: 'Sale', amount: "0.00", status: "Average Sale", badge: "0.00", type: "1" },
                        { title: 'Collection Target', amount: "20,000.00", status: "Reached", badge: "0%", type: "1" },
                        { title: 'Lead', amount: "0", status: "Qualified", badge: "0%", type: "1" },
                        { amount: "10,000.00", msg: "Required Average Sales/Day", type: "0" },
                        { amount: "2", msg: "Number of Sale Conversion Required", type: "0" },
                        { amount: "6", msg: "Number of Opportunity Required", type: "0" },
                        { amount: "0.00", msg: "Sales From Existing Customer", type: "0" },

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
    }

});

export default SalesDetails;