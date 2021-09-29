import React from 'react';
import { Text, View, Platform } from 'react-native';
import { IconButton } from 'react-native-paper';
import AnalyticsAccount from './AnalyticsAccount'
import AnalyticsLead from './AnalyticsLead'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const ConvertionAnalyticsMain = (props) => {

  const { route } = props

  return (
    <Tab.Navigator
      tabBarOptions={{
        showIcon: true,
        iconStyle: {
          width: 'auto',
          height: 20,
        },
        scrollEnabled: true,
        activeTintColor: 'black',
        inactiveTintColor: '#525252',
        activeBackgroundColor: 'green',
        tabStyle: {
          backgroundColor: '#fff',
          padding: -10,
          margin: 0.2,
          borderRadius: 10,
          marginBottom: 5,
          width: Platform.OS === "ios" ? 190 : 180
        },
        labelStyle: { fontSize: 8, marginLeft: 5, marginTop: 20 },
      }}>
      <Tab.Screen name="AnalyticsLead" component={AnalyticsLead} options={{
        title: "LEAD",
        tabBarIcon: ({ focused }) =>
          focused ?
            <IconButton size={20} color="#424242" icon="information-variant" style={{ backgroundColor: "#2196f3" }} />
            :
            <IconButton size={20} color="#fff" icon="information-variant" style={{ backgroundColor: "#2196f3" }} />
        ,
      }}
        initialParams={{

        }}
      />
      <Tab.Screen name="AnalyticsAccount" component={AnalyticsAccount} options={{
        title: "ACCOUNT",
        tabBarIcon: ({ focused }) =>
          focused ?
            <IconButton size={20} color="#424242" icon="view-list" style={{ backgroundColor: "#4caf50" }} />
            :
            <IconButton size={20} color="#fff" icon="view-list" style={{ backgroundColor: "#4caf50" }} />
      }}
        initialParams={{

        }}
      />
    </Tab.Navigator>
  )

}
export default ConvertionAnalyticsMain;



