
import RNExitApp from 'react-native-exit-app'
import React, { useState } from 'react';
import AppStyles from '../AppStyles'
import { View, StyleSheet, Modal, TouchableOpacity, Image } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import { Avatar, Title, Caption, Drawer, } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Lightbox from 'react-native-lightbox';

export function DrawerContent(props) {

    return (
        <View style={{ flex: 1, backgroundColor: AppStyles.Colors.drawerBackgroundColor }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={{
                        justifyContent: 'center',
                        paddingLeft: 20,
                        height: 150,
                    }}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
                            <View style={{ flexDirection: 'row', }}>


                                {<Lightbox underlayColor="white"
                                    renderContent={() => {
                                        return (
                                            <Image
                                                style={{ height: "110%", width: "100%", alignSelf: 'center' }}
                                                resizeMode="contain"
                                                source={require('../assets/avatar.jpeg')}
                                            />
                                        )
                                    }}><Avatar.Image
                                        resizeMode="cover"
                                        source={require('../assets/avatar.jpeg')}
                                    />
                                </Lightbox>}


                                <View style={{ flexDirection: 'column', alignItems: 'center', flex: 1, alignSelf: 'center' }} >
                                    <Title style={
                                        { fontSize: 16, fontWeight: 'bold', color: AppStyles.Colors.drawerTextColor }}>user name</Title>
                                    <Caption style={
                                        { fontSize: 16, color: AppStyles.Colors.drawerTextColor }} >user@exmple.com</Caption>
                                </View>

                            </View></TouchableOpacity>

                    </View>
                    <Drawer.Section style={{ borderTopColor: 'black', borderTopWidth: .5, paddingTop: 20 }}
                    >
                        <DrawerItem
                            icon={({ size }) => (

                                <Icon
                                    name="home-outline"
                                    color="#fff"
                                    size={size}
                                />
                            )}
                            inactiveTintColor='black'
                            label="Dashboard"
                            labelStyle={{ color: 'white' }}
                            color="#fff"
                            onPress={() => { props.navigation.navigate('Dashboard') }}
                        />
                        <DrawerItem
                            icon={({ size }) => (
                                <Icon
                                    name="order-bool-descending-variant"
                                    color="#fff"
                                    size={size}
                                />
                            )}
                            label="Orders"
                            labelStyle={{ color: 'white' }}
                            onPress={() => { props.navigation.navigate('Orders') }}
                        />
                        <DrawerItem
                            icon={({ size }) => (
                                <Icon
                                    name="account-group"
                                    color="#fff"
                                    size={size}
                                />
                            )}
                            label="Workers"
                            labelStyle={{ color: 'white' }}
                            onPress={() => { props.navigation.navigate('Workers') }}
                        />
                        <DrawerItem
                            icon={({ size }) => (
                                <Icon
                                    name="chart-timeline-variant"
                                    color="#fff"
                                    size={size}
                                />
                            )}
                            label="TimeSheet"
                            labelStyle={{ color: 'white' }}
                            onPress={() => { props.navigation.navigate('TimeSheet') }}
                        />

                        <DrawerItem
                            icon={({ size }) => (
                                <Ionicons
                                    name="settings-outline"
                                    color="#fff"
                                    size={size}
                                />
                            )}
                            label="Settings"
                            labelStyle={{ color: 'white' }}
                            onPress={() => { props.navigation.navigate('Settings') }}
                        />
                        <DrawerItem
                            icon={({ size }) => (
                                <Icon
                                    name="account-check-outline"
                                    color="#fff"
                                    size={size}
                                />
                            )}
                            label="Support"
                            labelStyle={{ color: 'white' }}
                            onPress={() => { props.navigation.navigate('Support') }}
                        />
                        <DrawerItem
                            icon={({ size }) => (
                                <Icon
                                    name="bookmark-outline"
                                    color="#fff"
                                    size={size}
                                />
                            )}
                            label="About us"
                            labelStyle={{ color: 'white' }}
                            onPress={() => { props.navigation.navigate('AboutUs') }}
                        />
                    </Drawer.Section>


                </View>

            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <TouchableOpacity onpress={() => RNExitApp.exitApp()}>
                    <DrawerItem
                        icon={({ size }) => (
                            <Icon
                                name="exit-to-app"
                                color="#fff"
                                size={size}
                            />
                        )}
                        label="Log Out"
                        labelStyle={{ color: 'white' }}

                    /></TouchableOpacity>
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#fff',
        borderTopWidth: 1
    },

})
