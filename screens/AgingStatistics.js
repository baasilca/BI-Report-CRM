import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, ScrollView } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';



const AgingStatistics = () => {


    const renderOpportunity = (item) => (
        <View style={{ backgroundColor: "#fff", margin: 10, alignSelf: 'center', flex: 1, borderLeftWidth: 3, borderBottomWidth: 3, borderLeftColor: item.item.color, borderBottomColor: item.item.color, borderRadius: 10, elevation: 3 }}>
            <View style={[{
                height: responsiveHeight(8),
                width: responsiveWidth(40),
                paddingTop: responsiveHeight(1),
                margin: 10
            }]}>
                {/* <Image
                    source={item.item.image}
                    style={{ height: 35, width: 35, alignSelf: 'flex-end', marginTop: 5 }}
                ></Image> */}
                <Text style={{ fontWeight: "bold", fontSize: 16, color: "black" }}>{item.item.amount}</Text>
                <Text style={{ fontWeight: 'bold', color: "#bababa" }}>{item.item.label}</Text>
            </View>
        </View>
    )
    const renderInvoice = (item) => (
        <View style={{ backgroundColor: "#fff", margin: 10, alignSelf: 'center', flex: 1, borderLeftWidth: 3, borderBottomWidth: 3, borderLeftColor: item.item.color, borderBottomColor: item.item.color, borderRadius: 10, elevation: 3 }}>
            <View style={[{
                height: responsiveHeight(8),
                width: responsiveWidth(40),
                paddingTop: responsiveHeight(1),
                margin: 10
            }]}>
                {/* <Image
                    source={item.item.image}
                    style={{ height: 35, width: 35, alignSelf: 'flex-end', marginTop: 5 }}
                ></Image> */}
                <Text style={{ fontWeight: "bold", fontSize: 16, color: "black" }}>{item.item.amount}</Text>
                <Text style={{ fontWeight: 'bold', color: "#bababa" }}>{item.item.label}</Text>
            </View>
        </View>
    )
    const renderCustomer = (item) => (
        <View style={{ backgroundColor: "#fff", margin: 10, alignSelf: 'center', flex: 1, borderLeftWidth: 3, borderBottomWidth: 3, borderLeftColor: item.item.color, borderBottomColor: item.item.color, borderRadius: 10, elevation: 3 }}>
            <View style={[{
                height: responsiveHeight(8),
                width: responsiveWidth(40),
                paddingTop: responsiveHeight(1),
                margin: 10
            }]}>
                {/* <Image
                    source={item.item.image}
                    style={{ height: 35, width: 35, alignSelf: 'flex-end', marginTop: 5 }}
                ></Image> */}
                <Text style={{ fontWeight: "bold", fontSize: 16, color: "black" }}>{item.item.amount}</Text>
                <Text style={{ fontWeight: 'bold', color: "#bababa" }}>{item.item.label}</Text>
            </View>
        </View>
    )

    return (
        <ScrollView >
            <View style={{ backgroundColor: "#fff", marginTop: 20, paddingBottom: 15, marginHorizontal: 10, borderRadius: 30, borderWidth: 0.3 }}>
                <Text style={{ textAlign: "center", fontSize: 16, fontWeight: "bold", marginTop: 10, marginBottom: 10 }}>opportunity</Text>

                <FlatList
                    data={[
                        { label: "1 to 3 Months", amount: "8", color: "#607d8b" },
                        { label: "3 to 6 Months", amount: "222", color: "#ec3674" },
                        { label: "6 to 1 Year", amount: "7", color: "#a741b9" },
                        { label: "1 Year Above", amount: "11", color: "#ff9800" },

                    ]}
                    renderItem={renderOpportunity}
                    numColumns="2"
                />
            </View>
            <View style={{ backgroundColor: "#fff", marginTop: 20, paddingBottom: 15, marginHorizontal: 10, borderRadius: 30, borderWidth: 0.3 }}>
                <Text style={{ textAlign: "center", fontSize: 16, fontWeight: "bold", marginBottom: 10, marginTop: 10 }}>Invoice</Text>

                <FlatList
                    data={[
                        { label: "1 to 3 Months", amount: "1", color: "#607d8b" },
                        { label: "3 to 6 Months", amount: "0", color: "#ec3674" },
                        { label: "6 to 1 Year", amount: "2", color: "#a741b9" },
                        { label: "1 Year Above", amount: "8", color: "#ff9800" },

                    ]}
                    renderItem={renderInvoice}
                    numColumns="2"
                />
            </View>
            <View style={{ backgroundColor: "#fff", marginTop: 20, paddingBottom: 15, marginHorizontal: 10, borderRadius: 30, borderWidth: 0.3 }}>
                <Text style={{ textAlign: "center", fontSize: 16, fontWeight: "bold", marginBottom: 10, marginTop: 10 }}>Key customer</Text>

                <FlatList
                    data={[
                        { label: "No Opportunity", amount: "16", color: "#607d8b" },
                        { label: "3 to 6 Months", amount: "6", color: "#ec3674" },
                        { label: "6 to 1 Year", amount: "3", color: "#a741b9" },
                        { label: "1 Year Above", amount: "8", color: "#ff9800" },

                    ]}
                    renderItem={renderCustomer}
                    numColumns="2"
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },

});

export default AgingStatistics;

