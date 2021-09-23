import 'react-native-gesture-handler';
import React, { useState, useCallback } from 'react';
import { View, Image, ImageSourcePropType, ImageBackground, Alert } from 'react-native';
import AppStyles from './AppStyles'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';
import { Assets, createStackNavigator } from "@react-navigation/stack";
import SalesKPI from './screens/SalesKPI';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { store } from './Redux/Store'
import { Provider } from 'react-redux'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const MyStack = (props) => {
  console.disableYellowBox = true;
  return (
    <Stack.Navigator   >
      <Stack.Screen name="Sales KPI" component={SalesKPI} options={{
        headerShown: false,
        headerStyle: { backgroundColor: AppStyles.Colors.screensHeaderColor }, headerTintColor: '#fff'
      }} />
    </Stack.Navigator>
  )
}

const DrawerContent = (props) => {

  const { navigation } = props;
  const [active, setActive] = useState('Sales KPI');

  const handleNavigation = useCallback(
    (to) => {
      if (navigation.dangerouslyGetState() &&
        navigation.dangerouslyGetState().routes[0] &&
        navigation.dangerouslyGetState().routes[0].state &&
        navigation.dangerouslyGetState().routes[0].state.index > 0) {
        props.navigation.dispatch(StackActions.popToTop());
      }
      setActive(to);
      navigation.navigate(to);
    },
    [navigation, setActive],
  )

  const screens = [
    { name: 'screens.home', to: 'Sales KPI', icon: "view-dashboard" },
    // { name: 'screens.conversion_analytics', to: 'Conversion Analytics', icon: "radar" },
    // { name: 'screens.yearly_overview', to: 'Yearly Overview', icon: "calendar-blank-multiple" },
    // { name: 'screens.sales_executive_overview', to: 'Sales Executive Overview', icon: "bullseye" },
    // { name: 'screens.aging_statics', to: 'Aging Statistics', icon: "desktop-mac-dashboard" },
    // { name: 'screens.perfomance', to: 'Perfomance', icon: "lock-check" },
    // { name: 'screens.custom_kpi', to: 'Custom KPI', icon: "gamepad" },
  ];

  return (
    <ImageBackground
      source={require("./images/back.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <DrawerContentScrollView
        {...props}
        scrollEnabled
        removeClippedSubviews
        renderToHardwareTextureAndroid
      >


        {screens?.map((screen, index) => {
          const isActive = active === screen.to;
          return (
            <DrawerItem
              icon={({ size }) => (
                <Icon
                  name={screen.icon}
                  color={isActive ? "red" : "black"}
                  size={20}
                />
              )}
              inactiveTintColor='black'
              label={screen.to}
              labelStyle={{ color: isActive ? "red" : "black" }}
              color="#fff"
              onPress={() => { handleNavigation(screen.to) }}
            />
          )
        })
        }

      </DrawerContentScrollView>
    </ImageBackground>
  )
}


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
          drawerType="slide"
          // overlayColor="transparent"
          // sceneContainerStyle={{ backgroundColor: 'transparent' }}
          drawerStyle={{
            flex: 1,
            width: '70%',
            borderRightWidth: 0,
            // backgroundColor: 'transparent',
          }}
          drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="Home" component={MyStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
