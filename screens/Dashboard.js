import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import StackedBarChart from 'react-native-chart-kit'

const Dashboard = () => {

    // const data = {
    //     labels: ["Test1", "Test2"],
    //     legend: ["L1", "L2", "L3"],
    //     data: [
    //         [60, 60, 60],
    //         [30, 30, 60]
    //     ],
    //     barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"]
    // };
    return (
        <View style={styles.container}>
           <Text>Dashboard Screen</Text>
        </View>
    )
}
export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

});
