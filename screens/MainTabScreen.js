import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';


import ChatScreen from './ChatScreen';
import HomeScreen from './HomeScreen';
import ashikhscreen from './ashikhscreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import BasilScreen from './BasilScreen';


const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ExploreStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();


const MainTabScreen = () => (

    <Tab.Navigator>

        <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarColor: '#009387',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Chats"
            component={ChatStackScreen}
            options={{
                tabBarLabel: 'Chats',
                tabBarColor: '#1f65ff',
                tabBarIcon: ({ color }) => (
                    <Icon name="md-chatboxes" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Explore"
            component={ExploreStackScreen}
            options={{
                tabBarLabel: 'Explore',
                tabBarColor: '#d02860',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-camera" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={ProfileStackScreen}
            options={{
                tabBarLabel: 'Profile',
                tabBarColor: '#694fad',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-person" color={color} size={26} />
                ),
            }}
        />

    </Tab.Navigator>

)

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => {

    return (
        <HomeStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <HomeStack.Screen name="Home" component={HomeScreen} options={{
                title: 'welcome',
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25}
                        backgroundColor="#009387" onPress={() =>
                            navigation.openDrawer()}></Icon.Button>

                )
            }} />
            <HomeStack.Screen name="ashikhscreen" component={ashikhscreen} />
            <HomeStack.Screen name="BasilScreen" component={BasilScreen} />
        </HomeStack.Navigator>

    )
}

const ChatStackScreen = ({ navigation }) => {
    return (

        <DetailsStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#1f65ff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <DetailsStack.Screen name="Chats" component={ChatScreen} options={{
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25}
                        backgroundColor="#1f65ff" onPress={() =>
                            navigation.openDrawer()}></Icon.Button>

                )
            }} />
        </DetailsStack.Navigator>
    )

}


const ProfileStackScreen = ({ navigation }) => {
    return (

        <ProfileStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#694fad',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25}
                        backgroundColor="#694fad" onPress={() =>
                            navigation.openDrawer()}></Icon.Button>

                )
            }} />
        </ProfileStack.Navigator>
    )

}


const ExploreStackScreen = ({ navigation }) => {
    return (

        <ExploreStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#d02860',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <ExploreStack.Screen name="Explore" component={ExploreScreen} options={{
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25}
                        backgroundColor="#d02860" onPress={() =>
                            navigation.openDrawer()}></Icon.Button>

                )
            }} />
        </ExploreStack.Navigator>
    )

}
