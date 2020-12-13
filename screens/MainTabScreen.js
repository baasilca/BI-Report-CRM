import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';


import ChatScreen from './ChatScreen';
import HomeScreen from './HomeScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import { Avatar } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';


const HomeStack = createStackNavigator();
const ChatStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const ProfileStack = createStackNavigator();

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
                backgroundColor: '#fff',
                shadowColor: '#fff',
                elevation: 0
            },
            headerTintColor: '#009387',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <HomeStack.Screen name="Home" component={HomeScreen} options={{
                title: 'OLX',
                headerLeft: () => (
                    <View style={{ marginLeft: 10 }}>
                        <Icon.Button
                            name="ios-menu"
                            size={25}
                            color="#333"
                            backgroundColor="#fff"
                            onPress={() => navigation.openDrawer()}
                        />
                    </View>
                ),
                headerRight: () => (
                    <View style={{ flexDirection: 'row', marginRight: 10 }}>
                        <Icon.Button
                            name="ios-search"
                            size={25}
                            color="#333"
                            backgroundColor="#fff"
                            onPress={() => { }}
                        />
                        <TouchableOpacity style={{ paddingHorizontal: 10, marginTop: 5 }} onPress={() => { navigation.navigate('Profile') }}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://scontent-maa2-1.xx.fbcdn.net/v/t1.0-9/45398110_2264991620457350_8396216246802055168_o.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=2ZdbDhRZIEcAX9h5Lpt&_nc_ht=scontent-maa2-1.xx&oh=e0c9e2746f54d014fe9d97ffbaaa01c3&oe=5FF8F45A'
                                }}
                                size={30}
                            />
                        </TouchableOpacity>
                    </View>
                ),


            }} />

        </HomeStack.Navigator>

    )
}

const ChatStackScreen = ({ navigation }) => {
    return (

        <ChatStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#1f65ff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <ChatStack.Screen name="Chats" component={ChatScreen} options={{
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25}
                        backgroundColor="#1f65ff" onPress={() =>
                            navigation.openDrawer()}></Icon.Button>

                )
            }} />
        </ChatStack.Navigator>
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
