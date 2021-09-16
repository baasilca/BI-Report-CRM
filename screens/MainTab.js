import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppStyles from '../AppStyles'
import Orders from './Order/Orders';
import Dashboard from './Dashboard';
import Workers from './Workers/Workers';
import TimeSheet from './TimeSheet/TimeSheet';


const DashboardStack = createStackNavigator();
const OrderStack = createStackNavigator();
const WorkersStack = createStackNavigator();
const TimeSheetStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();


const MainTab = () => (

    <Tab.Navigator >

        <Tab.Screen
            name="Dashboard"
            component={DashboardStackScreen}
            options={{
                tabBarLabel: 'Dashboard',
                tabBarColor: AppStyles.Colors.bottomTabColor,
                tabBarIcon: ({ color }) => (
                    <Ionicons name="ios-home" color={color} size={AppStyles.IconStyle.tabIconSize} />
                ),
            }}
        />
        <Tab.Screen
            name="Order"
            component={OrderStackScreen}
            options={{
                tabBarLabel: 'Orders',
                tabBarColor: '#009387',
                tabBarIcon: ({ color }) => (
                    <Icon name="order-bool-descending-variant" color={color} size={AppStyles.IconStyle.tabIconSize} />
                ),
            }}
        />
        <Tab.Screen
            name="Workers"
            component={WorkersStackScreen}
            options={{
                tabBarLabel: 'Workers',
                tabBarColor: '#009387',
                tabBarIcon: ({ color }) => (
                    <Icon name="account-group" color={color} size={AppStyles.IconStyle.tabIconSize} />
                ),
            }}
        />
        <Tab.Screen
            name="TimeSheet"
            component={TimeSheetStackScreen}
            options={{
                tabBarLabel: 'TimeSheet',
                tabBarColor: '#009387',
                tabBarIcon: ({ color }) => (
                    <Icon name="chart-timeline-variant" color={color} size={AppStyles.IconStyle.tabIconSize} />
                ),
            }}
        />

    </Tab.Navigator>

)

export default MainTab;

const DashboardStackScreen = ({ navigation }) => {

    return (
        <DashboardStack.Navigator>
            <DashboardStack.Screen name='Dashboard' component={Dashboard} options={{ headerShown: false }} />

        </DashboardStack.Navigator>

    )
}

const OrderStackScreen = () => {
    return (

        <OrderStack.Navigator>
            <OrderStack.Screen name='Orders' component={Orders} options={{ headerShown: false }} />
        </OrderStack.Navigator>
    )

}



const WorkersStackScreen = () => {
    return (

        <WorkersStack.Navigator >
            <WorkersStack.Screen name='Workers' component={Workers} options={{ headerShown: false }} />
        </WorkersStack.Navigator>
    )

}


const TimeSheetStackScreen = () => {
    return (

        <TimeSheetStack.Navigator >
            <TimeSheetStack.Screen name='TimeSheet' component={TimeSheet} options={{ headerShown: false }} />
        </TimeSheetStack.Navigator>
    )

}
