import React from 'react';
import { Text, View, StyleSheet, ScrollView, FlatList, Image } from 'react-native';
import SelectDropdown from './../Components/SelectDropdown';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Divider, Card, IconButton } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';



const years = ["2019", "2020", "2021"]
const color = "#dce0dd"
const tint = "#fff"

const YearlyOverview = () => {
    const data = ["Email Marketing Jan 2016- June 2016",
        " Flyer June-Aug 2016	",
        " PPC Sep - Desc",
        "Telemarketing 2017 Jan- Feb	1",
        "April 2017 E	1	",
        " telecalling	1	",
        "Exhibition Eng"]

    const SaleCampaign = () => {
        const renderItem = ({ item }) => (
            <View style={{ flex: 1, flexDirection: 'row', padding: 10, alignItems: 'center', marginBottom: 5 }}>

                <MaterialCommunityIcons
                    name="checkbox-blank-circle"
                    color="#000"
                    size={8}
                    style={{}}
                />
                <Text style={{ width: '40%', marginLeft: 10, color: 'black', }}>
                    {item}
                </Text>
                <Text style={{ justifyContent: 'center', alignItems: 'center', width: '22%', fontSize: 16, textAlign: 'center' }}>65</Text>
                <Text style={{ justifyContent: 'center', alignItems: 'center', width: '28%', fontSize: 16, textAlign: 'right' }}>₹ 10,000.00</Text>

            </View>

        )
        return (
            <View style={{ flex: 1, borderRadius: 5, borderColor: '#bababa', borderWidth: .2, backgroundColor: tint, justifyContent: 'center', margin: '2%', }}>
                <LinearGradient
                    colors={["#fff", "#e6faff"]}
                    style={{}}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }} >
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </LinearGradient>
            </View>
        )
    }

    const BestSaleman = () => {
        return (
            <View style={{ flex: 1, margin: -10 }}>
                <LinearGradient
                    colors={["#fff", "#e6faff"]}
                    style={styles.bestSalesGradientView}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }} >
                    <View style={{ flexDirection: "row", marginTop: 5 }}>
                        <Image style={{ width: 20, height: 20, alignSelf: 'center' }} source={{ uri: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png' }} />
                        <Text style={{ marginLeft: 5, width: "100%", fontWeight: 'bold', color: "black" }} numberOfLines={1}> TestappMob admin</Text>
                    </View>
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <Text style={{ justifyContent: 'center', alignItems: 'center', width: '50%', }}>Sale</Text>
                        <Text style={{ justifyContent: 'center', alignItems: 'center', fontSize: 16, width: '45%', textAlign: 'right' }}>₹ 10,000.00</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                        <Text style={{ justifyContent: 'center', alignItems: 'center', width: '50%', }}>Profit(GP)</Text>
                        <Text style={{ justifyContent: 'center', alignItems: 'center', fontSize: 16, width: '45%', textAlign: 'right' }}>₹ 105260.00</Text>
                    </View>

                </LinearGradient>
            </View>



        )
    }

    return (
        <View style={{ flex: 1, }}>
            <LinearGradient
                colors={["#fff", "#fffff0"]}
                style={{}}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 1 }} >
                <SelectDropdown
                    buttonStyle={styles.KeyCustomerButton}
                    buttonTextStyle={{ fontSize: 13 }}
                    data={years}
                    dropdownStyle={styles.dropdownStyle}
                    defaultButtonText="All"
                    renderDropdownIcon={() => {
                        return (
                            <MaterialCommunityIcons
                                name="chevron-down"
                                color="#000"
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
                <ScrollView style={{ margin: 5, }}>
                    <View style={styles.row}>
                        <Text style={styles.propertyTitle}>Total account</Text>
                        <View style={{ borderRadius: 10, backgroundColor: '#fff', justifyContent: 'center', borderWidth: .5, width: '32%' }}>
                            <Text style={{
                                textAlign: 'right',
                                paddingRight: 15,
                                fontSize: 16,
                                color: 'black',
                                alignItems: 'center'
                            }} >52</Text>
                        </View>
                    </View>
                    <Divider />
                    <View style={styles.row}>
                        <Text style={styles.propertyTitle}>New customers</Text>
                        <View style={{ borderRadius: 10, backgroundColor: '#fff', justifyContent: 'center', borderWidth: .5, width: '32%' }}>
                            <Text style={{
                                textAlign: 'right',
                                paddingRight: 15,
                                fontSize: 16,
                                color: 'black',
                                alignItems: 'center'
                            }} >52</Text>
                        </View>
                    </View>
                    <Divider />
                    <View style={styles.row}>
                        <Text style={styles.propertyTitle}>Total opportunity</Text>
                        <View style={{ borderRadius: 10, backgroundColor: '#fff', justifyContent: 'center', borderWidth: .5, width: '32%' }}>
                            <Text style={{
                                textAlign: 'right',
                                paddingRight: 15,
                                fontSize: 16,
                                color: 'black',
                                alignItems: 'center'
                            }} >254</Text>
                        </View>
                    </View>
                    <Divider />
                    <View style={styles.row}>
                        <Text style={styles.propertyTitle}>Opportunity conversion ratio</Text>
                        <View style={{ borderRadius: 10, backgroundColor: '#fff', justifyContent: 'center', borderWidth: .5, width: '32%' }}>
                            <Text style={{
                                textAlign: 'right',
                                paddingRight: 15,
                                fontSize: 16,
                                color: 'black',
                                alignItems: 'center'
                            }} >52.6%</Text>
                        </View>
                    </View>
                    <Divider />
                    <View style={styles.row}>
                        <Text style={styles.propertyTitle}>Sales From Existing Customers</Text>
                        <View style={{ borderRadius: 10, backgroundColor: '#fff', justifyContent: 'center', borderWidth: .5, width: '32%' }}>
                            <Text style={{
                                textAlign: 'right',
                                paddingRight: 15,
                                fontSize: 16,
                                color: 'black',
                                alignItems: 'center'
                            }} >₹ 5300.00</Text>
                        </View>
                    </View>
                    <Divider />
                    <View style={styles.row}>
                        <Text style={styles.propertyTitle}>Customer Acquisition Cost</Text>
                        <View style={{ borderRadius: 10, backgroundColor: '#fff', justifyContent: 'center', borderWidth: .5, width: '32%' }}>
                            <Text style={{
                                textAlign: 'right',
                                paddingRight: 15,
                                fontSize: 16,
                                color: 'black',
                                alignItems: 'center'
                            }} >₹ 23000.00</Text>
                        </View>
                    </View>
                    <Divider />
                    <Divider />
                    <View style={styles.row}>
                        <Text style={styles.propertyTitle}>Cost per Conversion</Text>
                        <View style={{ borderRadius: 10, backgroundColor: '#fff', justifyContent: 'center', borderWidth: .5, width: '32%' }}>
                            <Text style={{
                                textAlign: 'right',
                                paddingRight: 15,
                                fontSize: 16,
                                color: 'black',
                                alignItems: 'center'
                            }} >₹ 24530003.00</Text>
                        </View>
                    </View>
                    <Divider />
                    <View style={styles.row}>
                        <Text style={styles.propertyTitle}>Opportunity lost</Text>
                        <View style={{ borderRadius: 10, backgroundColor: '#fff', justifyContent: 'center', borderWidth: .5, width: '32%' }}>
                            <Text style={{
                                textAlign: 'right',
                                paddingRight: 15,
                                fontSize: 16,
                                alignItems: 'center', color: "#0077b3"
                            }} >52</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.propertyTitle}>Best sale (Customer)</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', borderRadius: 5, borderWidth: .2, borderColor: 'grey', margin: '2%', padding: 10, alignItems: 'center', marginBottom: 5, backgroundColor: '#fff' }}>

                        <MaterialCommunityIcons
                            name="checkbox-blank-circle"
                            color="#000"
                            size={8}
                            style={{}}
                        />
                        <Text style={{ width: '40%', marginLeft: 10, color: 'black' }}>
                            Emaar group
                        </Text>
                        <Text style={{ justifyContent: 'center', alignItems: 'center', width: '20%', fontSize: 16, textAlign: 'center' }}>5</Text>
                        <Text style={{ justifyContent: 'center', alignItems: 'center', width: '28%', fontSize: 16, textAlign: 'right' }}>₹ 10,000.00</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.propertyTitle}>Top sale (Work type)</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', borderRadius: 5, borderWidth: .2, borderColor: 'grey', margin: '2%', padding: 10, alignItems: 'center', marginBottom: 5, backgroundColor: '#fff' }}>

                        <MaterialCommunityIcons
                            name="checkbox-blank-circle"
                            color="#000"
                            size={8}
                            style={{}}
                        />
                        <Text style={{ width: '40%', marginLeft: 10, color: 'black' }}>
                            Landscaping
                        </Text>
                        <Text style={{
                            justifyContent: 'center', alignItems: 'center', width: '20%',
                            fontSize: 16, textAlign: 'center'
                        }}>1</Text>
                        <Text style={{ justifyContent: 'center', alignItems: 'center', width: '28%', fontSize: 16, textAlign: 'right' }}>
                            ₹ 9622.00</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.propertyTitle}>Top sale (Industry)</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', borderRadius: 5, borderWidth: .2, borderColor: 'grey', margin: '2%', padding: 10, alignItems: 'center', marginBottom: 5, backgroundColor: '#fff' }}>

                        <MaterialCommunityIcons
                            name="checkbox-blank-circle"
                            color="#000"
                            size={8}
                            style={{}}
                        />
                        <Text style={{ width: '40%', marginLeft: 10, color: 'black' }}>
                            Service
                        </Text>
                        <Text style={{
                            justifyContent: 'center', alignItems: 'center', width: '20%',
                            fontSize: 16, textAlign: 'center'
                        }}>1</Text>
                        <Text style={{ justifyContent: 'center', alignItems: 'center', width: '28%', fontSize: 16, textAlign: 'right' }}>
                            ₹ 9632622.00</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.propertyTitle}>Top sale (Source)</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', borderRadius: 5, borderWidth: .2, borderColor: 'grey', margin: '2%', padding: 10, alignItems: 'center', marginBottom: 5, backgroundColor: '#fff' }}>

                        <MaterialCommunityIcons
                            name="checkbox-blank-circle"
                            color="#000"
                            size={8}
                            style={{}}
                        />
                        <Text style={{ width: '40%', marginLeft: 10, color: 'black' }}>
                        Outbound Sales
                        </Text>
                        <Text style={{
                            justifyContent: 'center', alignItems: 'center', width: '20%',
                            fontSize: 16, textAlign: 'center'
                        }}>1</Text>
                        <Text style={{ justifyContent: 'center', alignItems: 'center', width: '28%', fontSize: 16, textAlign: 'right' }}>
                            ₹ 36202.00</Text>
                    </View>

                    {/* <View style={{ height: 75, width: '100%', borderRadius: 5, borderWidth: .2, backgroundColor: tint, justifyContent: 'center', marginTop: 5, padding: 5 }}>
                    <Text style={styles.propertyTitle}>Top sale (Work type)</Text>
                    <View style={{ flex: 1, width: '100%', flexDirection: 'row', padding: 10 }}>
                        <MaterialCommunityIcons
                            name="checkbox-blank-circle"
                            color="#000"
                            size={8}
                            style={{ marginLeft: 8, alignSelf: 'center' }}
                        />
                        <Text style={{ width: '50%', marginLeft: 10, }}>Landscaping</Text>
                        <Text style={{ justifyContent: 'center', alignItems: 'center', width: '15%' }}>6</Text>
                        <Text style={styles.propertyValue}>₹ 60,000.00</Text>
                    </View>
                </View>

                <View style={{ height: 75, width: '100%', borderRadius: 5, borderWidth: .2, backgroundColor: tint, justifyContent: 'center', marginTop: 5, padding: 5 }}>
                    <Text style={styles.propertyTitle}>Top sale (Industry)</Text>
                    <View style={{ flex: 1, width: '100%', flexDirection: 'row', padding: 10 }}>
                        <MaterialCommunityIcons
                            name="checkbox-blank-circle"
                            color="#000"
                            size={8}
                            style={{ marginLeft: 8, alignSelf: 'center' }}
                        />
                        <Text style={{ width: '50%', marginLeft: 10, }}>Service</Text>
                        <Text style={{ justifyContent: 'center', alignItems: 'center', width: '15%' }}>2</Text>
                        <Text style={styles.propertyValue}>₹ 70,000.00</Text>
                    </View>
                </View>

                <View style={{ height: 75, width: '100%', borderRadius: 5, borderWidth: .2, backgroundColor: tint, justifyContent: 'center', marginTop: 5, padding: 5 }}>
                    <Text style={styles.propertyTitle}>Top sale (Source)</Text>
                    <View style={{ flex: 1, width: '100%', flexDirection: 'row', padding: 10 }}>
                        <MaterialCommunityIcons
                            name="checkbox-blank-circle"
                            color="#000"
                            size={8}
                            style={{ marginLeft: 8, alignSelf: 'center' }}
                        />
                        <Text style={{ width: '50%', marginLeft: 10, }}>Outbound Sales</Text>
                        <Text style={{ justifyContent: 'center', alignItems: 'center', width: '15%' }}>6</Text>
                        <Text style={styles.propertyValue}>₹ 80.00</Text>
                    </View>
                </View> */}
                    <View style={styles.row}>
                        <Text style={styles.propertyTitle}>SaleCampaign</Text>
                    </View>
                    <SaleCampaign />
                    <View style={styles.row}>
                        <Text style={styles.propertyTitle}>{years[0]} best salesman</Text>
                    </View>
                    <BestSaleman />
                </ScrollView>
            </LinearGradient>
        </View>
    );
}

export default YearlyOverview;

const styles = StyleSheet.create({
    dropdownStyle: {
        backgroundColor: '#effff9',
        borderWidth: .5,
        borderRadius: 20,


    }, KeyCustomerButton: {
        alignSelf: 'flex-start',
        borderWidth: 0.3,
        backgroundColor: "#effff9",
        height: 27,
        left: 10,
        margin: '2%',
        borderRadius: 10,
        tintColor: 'white',
        width: 150
    },
    TextStyle: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#fff'
    },
    NumberStyle: {
        fontSize: 10,
        fontWeight: '100',
        color: '#fff',
    },
    photo: {
        width: "100%",
        height: 150,
        margin: 10,
        alignSelf: "center",
    },
    propertyTitle: {
        justifyContent: 'center', alignItems: 'center',
        fontSize: 16, fontWeight: 'bold', color: '#0077b3',
        width: '68%',
        marginLeft: 10,
        marginTop: 10,
        fontFamily: 'bold'
    },
    propertyValue: {
        textAlign: 'right',
        paddingRight: 25,
        fontSize: 16,
        color: 'black',
        width: '32%',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
        padding: 10,

    },
    bestSalesGradientView: {
        margin: 15,
        padding: 10,
        borderRadius: 8,
        flex: 1,
        marginBottom: 40,
        borderWidth: 0.5,
        borderColor: "#bababa"
    }
});