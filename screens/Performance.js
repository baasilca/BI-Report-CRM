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
        value: "25",
        color: "#f9c851"
    },
    {
        label: "Sale Count",
        value: "11",
        color: "#35b8e0"
    },
    {
        label: "Opportunity Lost",
        value: "3",
        color: "#ff5b5b"
    },
    {
        label: "Pipeline",
        value: "11",
        color: "#71b6f9"
    },
    {
        label: "Sale Conversion Ratio",
        value: "44.00%",
        color: "#ff8acc"
    },
    {
        label: "Average Sale Value",
        value: "6,272.73",
        color: "#323a46"
    },
    {
        label: "Revenue",
        value: "109,500.00",
        color: "#10c469",
        revenue: true
    },
]
const data2 = [
    {
        label: "Opportunity",
        value: "25",
        color: "#f9c851"
    },
    {
        label: "Sale Count",
        value: "11",
        color: "#35b8e0"
    },
    {
        label: "Opportunity Lost",
        value: "3",
        color: "#ff5b5b"
    },
    {
        label: "Pipeline",
        value: "11",
        color: "#71b6f9"
    },
    {
        label: "Sale Conversion Ratio",
        value: "44.00%",
        color: "#ff8acc"
    },
    {
        label: "Average Sale Value",
        value: "6,272.73",
        color: "#323a46"
    },
    {
        label: "Revenue",
        value: "109,500.00",
        color: "#10c469",
        revenue: true
    },
]
const data3 = [
    {
        label: "Opportunity",
        value: "25",
        color: "#f9c851"
    },
    {
        label: "Sale Count",
        value: "11",
        color: "#35b8e0"
    },
    {
        label: "Opportunity Lost",
        value: "3",
        color: "#ff5b5b"
    },
    {
        label: "Pipeline",
        value: "11",
        color: "#71b6f9"
    },
    {
        label: "Sale Conversion Ratio",
        value: "44.00%",
        color: "#ff8acc"
    },
    {
        label: "Average Sale Value",
        value: "6,272.73",
        color: "#323a46"
    },
    {
        label: "Revenue",
        value: "109,500.00",
        color: "#10c469",
        revenue: true
    },
]
const data4 = [
    {
        label: "Opportunity",
        value: "25",
        color: "#f9c851"
    },
    {
        label: "Sale Count",
        value: "11",
        color: "#35b8e0"
    },
    {
        label: "Opportunity Lost",
        value: "3",
        color: "#ff5b5b"
    },
    {
        label: "Pipeline",
        value: "11",
        color: "#71b6f9"
    },
    {
        label: "Sale Conversion Ratio",
        value: "44.00%",
        color: "#ff8acc"
    },
    {
        label: "Average Sale Value",
        value: "6,272.73",
        color: "#323a46"
    },
    {
        label: "Revenue",
        value: "109,500.00",
        color: "#10c469",
        revenue: true
    },
]

const PropertyRow = ({ label, value, revenue, color }) => {
    return (
        <>
            <View style={[styles.contentViewStyle,revenue&&{top:5}]}>
                {revenue ?
                    <>
                        <Text style={[styles.contentRevenueLabelStyle, { color: color }]}>{label}</Text>
                        <Text style={[styles.contentRevenueValueStyle, { color: color }]}>{value}</Text>
                    </>
                    :
                    <>
                        <Text style={[styles.contentLabelStyle, { color: color }]}>{label}</Text>
                        <Text style={[styles.contentValueStyle, { color: color }]}>{value}</Text>
                    </>
                }
            </View>
            {!revenue && <Divider />}
        </>
    )
}

const Title = ({ title, marginTop }) => {
    return (
        <View style={{ marginTop: marginTop, flexDirection: 'row', backgroundColor: "#fff", margin: 10, padding: 10, borderRadius: 5, marginBottom: -8 }}>
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
                                    <PropertyRow label={item.label} value={item.value} revenue={item.revenue} color={item.color} />
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
                                    <PropertyRow label={item.label} value={item.value} revenue={item.revenue} color={item.color} />
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
                                    <PropertyRow label={item.label} value={item.value} revenue={item.revenue} color={item.color} />
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
                                    <PropertyRow label={item.label} value={item.value} revenue={item.revenue} color={item.color} />
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
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
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
        padding: 5
    },
    contentRevenueLabelStyle: {
        flex: 1,
        opacity: 0.7,
        padding: 5,
        fontWeight: 'bold',
        fontSize: 20,

    },
    contentRevenueValueStyle: {
        flex: 0,
        fontWeight: 'bold',
        opacity: 0.7,
        fontSize: 20,
        marginTop: 5
    },
    contentValueStyle: {
        flex: 0,
        fontWeight: 'bold',
        opacity: 0.7,
        marginTop: 5
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