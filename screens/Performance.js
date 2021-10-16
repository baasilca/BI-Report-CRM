import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Alert, StyleSheet, ScrollView } from 'react-native';
import FlipComponent from 'react-native-flip-component';
import AppStyles from '../AppStyles'
import { LinearGradient } from 'expo-linear-gradient';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Divider } from 'react-native-paper';

const data1 = [
    {
        label: "Opportunity",
        value: "25"
    },
    {
        label: "Sale Count",
        value: "11"
    },
    {
        label: "Opportunity Lost",
        value: "3"
    },
    {
        label: "Pipeline",
        value: "11"
    },
    {
        label: "Sale Conversion Ratio",
        value: "44.00%"
    },
    {
        label: "Average Sale Value",
        value: "6,272.73"
    },
]
const data2 = [
    {
        label: "Opportunity",
        value: "25"
    },
    {
        label: "Sale Count",
        value: "11"
    },
    {
        label: "Opportunity Lost",
        value: "3"
    },
    {
        label: "Pipeline",
        value: "11"
    },
    {
        label: "Sale Conversion Ratio",
        value: "44.00%"
    },
    {
        label: "Average Sale Value",
        value: "6,272.73"
    },
]
const data3 = [
    {
        label: "Opportunity",
        value: "25"
    },
    {
        label: "Sale Count",
        value: "11"
    },
    {
        label: "Opportunity Lost",
        value: "3"
    },
    {
        label: "Pipeline",
        value: "11"
    },
    {
        label: "Sale Conversion Ratio",
        value: "44.00%"
    },
    {
        label: "Average Sale Value",
        value: "6,272.73"
    },
]
const data4 = [
    {
        label: "Opportunity",
        value: "25"
    },
    {
        label: "Sale Count",
        value: "11"
    },
    {
        label: "Opportunity Lost",
        value: "3"
    },
    {
        label: "Pipeline",
        value: "11"
    },
    {
        label: "Sale Conversion Ratio",
        value: "44.00%"
    },
    {
        label: "Average Sale Value",
        value: "6,272.73"
    },
]

const PropertyRow = ({ label, value }) => {
    return (
        <View style={styles.contentViewStyle}>
            <Text style={styles.contentLabelStyle}>{label}</Text>
            <Text style={styles.contentValueStyle}>{value}</Text>
        </View>
    )
}

const Title = ({ title, marginTop }) => {
    return (
        <View style={{ marginTop: marginTop, flexDirection: 'row' }}>
            <Text style={styles.headerFontStyle}>{title}</Text>

            <Icon name="filter" size={22} color="#ffa069" style={{ flex: 0, right: 15 }}
                onPress={() => {
                    alert("Filter")
                }}
            />
        </View>
    )
}

const Performance = () => {

    const [isFlipped, setisFlipped] = useState(false)
    const [isFlipped2, setisFlipped2] = useState(false)
    const [isFlipped3, setisFlipped3] = useState(false)
    const [isFlipped4, setisFlipped4] = useState(false)

    return (
        <ScrollView style={styles.containerStyle}>
            <Title title="Business Opportunity Report" marginTop={10} />
            <FlipComponent
                isFlipped={isFlipped}
                frontView={
                    <TouchableOpacity onPress={() => { setisFlipped(!isFlipped) }} >
                        <LinearGradient
                            colors={["#fff", "#fff"]}
                            start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 1 }}
                            style={styles.contentContainerStyle}
                        >
                            {data1.map((item, index) => {
                                return (
                                    <PropertyRow label={item.label} value={item.value} />
                                )
                            })}
                        </LinearGradient>
                    </TouchableOpacity>
                }
                backView={
                    <TouchableOpacity onPress={() => { setisFlipped(!isFlipped) }} style={{ backgroundColor: "#bababa", width: 400, alignSelf: 'center', justifyContent: 'center', height: 200 }}>
                        <Text style={{ alignSelf: 'center' }}>Graph component</Text>
                    </TouchableOpacity>
                }
            />
            <View style={{ padding: 10 }}>
                <Divider />
            </View>
            <Title title="Industry" />
            <FlipComponent
                isFlipped={isFlipped2}
                frontView={
                    <TouchableOpacity onPress={() => { setisFlipped2(!isFlipped2) }}>
                        <LinearGradient
                            colors={["#fff", "#fff"]}
                            start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 1 }}
                            style={styles.contentContainerStyle}
                        >
                            {data2.map((item, index) => {
                                return (
                                    <PropertyRow label={item.label} value={item.value} />
                                )
                            })}
                        </LinearGradient>
                    </TouchableOpacity>
                }
                backView={
                    <TouchableOpacity onPress={() => { setisFlipped2(!isFlipped2) }} style={{ backgroundColor: "#bababa", width: 400, alignSelf: 'center', justifyContent: 'center', height: 200 }}>
                        <Text style={{ alignSelf: 'center' }}>Graph component</Text>
                    </TouchableOpacity>
                }
            />
            <View style={{ padding: 10 }}>
                <Divider />
            </View>
            <Title title="Source" />
            <FlipComponent
                isFlipped={isFlipped3}
                frontView={
                    <TouchableOpacity onPress={() => { setisFlipped3(!isFlipped3) }} >
                        <LinearGradient
                            colors={["#fff", "#fff"]}
                            start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 1 }}
                            style={styles.contentContainerStyle}
                        >
                            {data3.map((item, index) => {
                                return (
                                    <PropertyRow label={item.label} value={item.value} />
                                )
                            })}
                        </LinearGradient>
                    </TouchableOpacity>
                }
                backView={
                    <TouchableOpacity onPress={() => { setisFlipped3(!isFlipped3) }} style={{ backgroundColor: "#bababa", width: 400, alignSelf: 'center', justifyContent: 'center', height: 200 }}>
                        <Text style={{ alignSelf: 'center' }}>Graph component</Text>
                    </TouchableOpacity>
                }
            />
            <View style={{ padding: 10 }}>
                <Divider />
            </View>
            <Title title="Emirate" />
            <FlipComponent
                isFlipped={isFlipped4}
                frontView={
                    <TouchableOpacity onPress={() => { setisFlipped4(!isFlipped4) }}>
                        <LinearGradient
                            colors={["#fff", "#fff"]}
                            start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 1 }}
                            style={styles.contentContainerStyle}
                        >
                            {data3.map((item, index) => {
                                return (
                                    <PropertyRow label={item.label} value={item.value} />
                                )
                            })}
                        </LinearGradient>
                    </TouchableOpacity>
                }
                backView={
                    <TouchableOpacity onPress={() => { setisFlipped4(!isFlipped4) }} style={{ backgroundColor: "#bababa", width: 400, alignSelf: 'center', justifyContent: 'center', height: 200 }}>
                        <Text style={{ alignSelf: 'center' }}>Graph component</Text>
                    </TouchableOpacity>
                }
            />
            <View style={{ padding: 10 }}>
                <Divider />
            </View>
            {/* <View style={styles.contentContainerStyle}>
                {data2.map((item, index) => {
                    return (
                        <PropertyRow label={item.label} value={item.value} />
                    )
                })}
            </View> */}
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        // backgroundColor: "#fff"
    },
    contentContainerStyle: {
        backgroundColor: "#f0f0f0",
        margin: 10,
        borderRadius: 5,
        padding: 10
    },
    contentViewStyle: {
        flexDirection: 'row'
    },
    contentLabelStyle: {
        flex: 1,
        // backgroundColor:"#bababa"
        color: "black",
        opacity: 0.7,
        padding: 5
    },
    contentValueStyle: {
        flex: 0,
        fontWeight: 'bold',
        opacity: 0.7,
        color: "black"
    },
    headerFontStyle: {
        fontSize: 15,
        color: AppStyles.Colors.screensHeaderColor,
        fontWeight: "bold",
        marginLeft: 10,
        marginBottom: -5,
        flex: 1
    }
})
export default Performance;