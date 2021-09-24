import 'react-native-gesture-handler';
import React, { useState, useCallback, useEffect } from 'react';
import { View, Image, ImageSourcePropType, ImageBackground, Platform, Alert, StatusBar, TouchableOpacity, Text } from 'react-native';
import AppStyles from './AppStyles'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';
import { Assets, createStackNavigator } from "@react-navigation/stack";
import SalesKPI from './screens/SalesKPI';
import ConvertionAnalytics from './screens/ConvertionAnalytics';
import YearlyOverview from './screens/YearlyOverview';
import SalesExecutiveOverview from './screens/SalesExecutiveOverview';
import AgingStatistics from './screens/AgingStatistics';
import Performance from './screens/Performance';
import CustomKPI from './screens/CustomKPI';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { store } from './Redux/Store'
import { Provider } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-paper';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const MyStack = (props) => {
  console.disableYellowBox = true;

  function BackButtonAndDrawer({ navigation }) {

    return (
      <View style={{ flexDirection: 'row' }}>
        <StatusBar
          backgroundColor="#177d99"
        />
        <Icons name="menu" size={30} style={{ marginLeft: 10 }}
          color={"#fff"}
          backgroundColor="black" onPress={() =>
            navigation.openDrawer()} />
        {Platform.OS === "ios" ?
          <Icons name="chevron-left" size={35} style={{ marginLeft: 5, marginTop: -3 }}
            color={"#fff"}
            backgroundColor="black" onPress={() =>
              navigation.goBack()} />
          :
          <Ionicons name="md-arrow-back" size={25} style={{ marginLeft: 5, marginTop: 3 }}
            color={"#fff"}
            backgroundColor="black" onPress={() =>
              navigation.goBack()} />
        }
      </View >
    )
  }

  return (
    <Stack.Navigator   >
      <Stack.Screen name="Sales KPI" component={SalesKPI} options={{
        headerShown: false,
        headerStyle: { backgroundColor: AppStyles.Colors.screensHeaderColor }, headerTintColor: '#fff',
        headerLeft: () => (
          <BackButtonAndDrawer {...props} />
        )
      }} />
      <Stack.Screen name="Convertion Analytics" component={ConvertionAnalytics} options={{
        headerStyle: { backgroundColor: AppStyles.Colors.screensHeaderColor }, headerTintColor: '#fff',
        headerLeft: () => (
          <BackButtonAndDrawer {...props} />
        )
      }} />
      <Stack.Screen name="Yearly Overview" component={YearlyOverview} options={{
        headerStyle: { backgroundColor: AppStyles.Colors.screensHeaderColor }, headerTintColor: '#fff',
        headerLeft: () => (
          <BackButtonAndDrawer {...props} />
        )
      }} />
      <Stack.Screen name="Sales Executive Overview" component={SalesExecutiveOverview} options={{
        headerStyle: { backgroundColor: AppStyles.Colors.screensHeaderColor }, headerTintColor: '#fff',
        headerLeft: () => (
          <BackButtonAndDrawer {...props} />
        )
      }} />
      <Stack.Screen name="Aging Statistics" component={AgingStatistics} options={{
        headerStyle: { backgroundColor: AppStyles.Colors.screensHeaderColor }, headerTintColor: '#fff',
        headerLeft: () => (
          <BackButtonAndDrawer {...props} />
        )
      }} />
      <Stack.Screen name="Performance" component={Performance} options={{
        headerStyle: { backgroundColor: AppStyles.Colors.screensHeaderColor }, headerTintColor: '#fff',
        headerLeft: () => (
          <BackButtonAndDrawer {...props} />
        )
      }} />
      <Stack.Screen name="Custom KPI" component={CustomKPI} options={{
        headerStyle: { backgroundColor: AppStyles.Colors.screensHeaderColor }, headerTintColor: '#fff',
        headerLeft: () => (
          <BackButtonAndDrawer {...props} />
        )
      }} />
    </Stack.Navigator>
  )
}
const DrawerContent = (props) => {

  const { navigation } = props;
  const [active, setActive] = useState('Sales KPI');

  useEffect(() => {
    if ((navigation.dangerouslyGetState() && navigation.dangerouslyGetState().routes[0] &&
      navigation.dangerouslyGetState().routes[0].state &&
      navigation.dangerouslyGetState().routes[0].state.routes.length) === 1) {
      setActive("Sales KPI")
    }
  }, [navigation.dangerouslyGetState()])

  const handleNavigation = useCallback(
    (to) => {
      // if (navigation.dangerouslyGetState() &&
      //   navigation.dangerouslyGetState().routes[0] &&
      //   navigation.dangerouslyGetState().routes[0].state &&
      //   navigation.dangerouslyGetState().routes[0].state.index > 0) {
      //   props.navigation.dispatch(StackActions.popToTop());
      // }
      setActive(to);
      navigation.navigate(to);
    },
    [navigation, setActive],
  )

  const screens = [
    { name: 'screens.home', to: 'Sales KPI', icon: "view-dashboard" },
    { name: 'screens.conversion_analytics', to: 'Convertion Analytics', icon: "radar" },
    { name: 'screens.yearly_overview', to: 'Yearly Overview', icon: "calendar-blank-multiple" },
    { name: 'screens.sales_executive_overview', to: 'Sales Executive Overview', icon: "bullseye" },
    { name: 'screens.aging_statics', to: 'Aging Statistics', icon: "desktop-mac-dashboard" },
    { name: 'screens.perfomance', to: 'Performance', icon: "lock-check" },
    { name: 'screens.custom_kpi', to: 'Custom KPI', icon: "gamepad" },
  ];

  return (
    <View style={{ backgroundColor: "#177d99", flex: 1 }}>
      <View style={{ flexDirection: "row", padding: 10 }}>
        <Avatar.Image
          resizeMode="contain"
          style={{ backgroundColor: "#e6d3d3" }}
          size={65}
          source={{ uri: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png' }}
        />
        <Text style={{ color: "#fff", fontSize: 18, marginLeft: 15, marginTop: 20 }}>Administator</Text>
      </View>
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
                  color={"#fff"}
                  size={20}
                />
              )}
              inactiveTintColor='black'
              style={{ backgroundColor: isActive ? "#439db5" : "#177d99" }}
              label={screen.to}
              labelStyle={{ color: "#fff" }}
              color="#fff"
              backgroundColor="red"
              onPress={() => { handleNavigation(screen.to) }}
            />
          )
        })
        }

      </DrawerContentScrollView>
      <View style={{ borderWidth: 0.2, borderColor: '#fff', marginLeft: -10, marginBottom: 15 }}></View>
      <TouchableOpacity style={{ flexDirection: "row", marginLeft: 10, marginBottom: 5 }}
        onPress={() => { alert("logout") }}
      >
        <Icons name="exit-to-app" size={35} style={{ marginLeft: 5, marginTop: -3 }}
          color={"#fff"}
          backgroundColor="black" />
        <Text style={{ color: "#fff", fontSize: 18, marginLeft: 10 }}>singout</Text>
      </TouchableOpacity>


    </View>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
          drawerType="slide"
          drawerStyle={{
            flex: 1,
            width: '70%',
            borderRightWidth: 0,
          }}
          drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="Home" component={MyStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
