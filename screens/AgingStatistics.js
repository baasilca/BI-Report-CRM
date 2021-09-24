import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';



const AgingStatistics = () => {

    const renderItem = (item) => (
        <View style={{ backgroundColor: "#fff", margin: 4, alignSelf: 'center', flex: 1, borderLeftWidth: 3, borderBottomWidth: 3, borderLeftColor: "green", borderBottomColor: "green", borderRadius: 10, elevation: 3 }}>
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
                <View style={{ marginTop: -40 }}>
                    <Text style={{ fontWeight: 'bold', color: "#bababa" }}>{item.label}</Text>
                    <View>
                        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.amount}</Text>
                    </View>
                </View>
            </View>
        </View>
    )

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={[
                    { label: "Amount", amount: "10000", color: "#607d8b" },
                    { label: "Discount", amount: "40000", color: "#ec3674" },
                    { label: "Vat", amount: "6500", color: "#a741b9" },
                    { label: "Total", amount: "60000", color: "#ff9800" },
                    { label: "Paid", amount: "76000", color: "#4caf50" },
                    { label: "Balance", amount: "89000", color: "#2196f3" },
                ]}
                renderItem={renderItem}
                numColumns="2"
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },

});

export default AgingStatistics;

