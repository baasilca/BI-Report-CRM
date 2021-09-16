import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Image } from 'react-native';
import AppStyles from './AppStyles'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Assets, createStackNavigator } from "@react-navigation/stack";
import MainTab from './screens/MainTab';
import Support from './screens/Support';
import Profile from './screens/Profile'
import Settings from './screens/Settings';
import { DrawerContent } from './screens/DrawerContents';
import AddTimeSheet from './screens/TimeSheet/AddTimeSheet';
import AddOrders from './screens/Order/AddOrders';
import AddWorkers from './screens/Workers/AddWorkers';
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { store } from './Redux/Store'
import { Provider } from 'react-redux'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const MyStack = (props) => {
  console.disableYellowBox = true;
  return (
    <Stack.Navigator   >
      <Stack.Screen name="Dashboard" component={MainTab} options={{
        title: 'CRM OPERATION',
        headerStyle: {
          backgroundColor: AppStyles.Colors.tabHeaderBarColor
        },
        headerTintColor: '#009387',
        headerTitleStyle: {
          fontWeight: 'bold'
        },
        headerLeft: () => (
          <View style={{ marginLeft: 10 }}>
            <Icon.Button
              name="ios-menu"
              size={AppStyles.IconStyle.menuBarSize}
              color="#009387"
              backgroundColor="#fff"
              onPress={() => props.navigation.openDrawer()}
            />
          </View>
        ),
        headerRight: () => (
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Profile')}>
            <View style={{ marginRight: 30, }}>
              <Image style={{ height: 40, width: 40, borderRadius: 45 }}
                source={require('./assets/avatar.jpeg')}
              />
            </View></TouchableOpacity>
        ),
      }} />

      <Stack.Screen name="Support" component={Support} options={{
        headerStyle: { backgroundColor: AppStyles.Colors.screensHeaderColor }, headerTintColor: '#fff'
      }} />
      <Stack.Screen name="Settings" component={Settings} options={{
        headerStyle: { backgroundColor: AppStyles.Colors.screensHeaderColor }, headerTintColor: '#fff'
      }} />
      <Stack.Screen name="Profile" component={Profile} options={{
        headerStyle: { backgroundColor: AppStyles.Colors.screensHeaderColor }, headerTintColor: '#fff'
      }} />
      <Stack.Screen name="AddOrders" component={AddOrders}
        options={{
          headerStyle: { backgroundColor: AppStyles.Colors.screensHeaderColor }, headerTintColor: '#fff'
        }}
      />
      <Stack.Screen name="AddWorkers" component={AddWorkers}
        options={{
          headerStyle: { backgroundColor: AppStyles.Colors.screensHeaderColor }, headerTintColor: '#fff'
        }} />
      <Stack.Screen name="AddTimeSheet" component={AddTimeSheet} options={{
        headerStyle: { backgroundColor: AppStyles.Colors.screensHeaderColor }, headerTintColor: '#fff'
      }} />
    </Stack.Navigator>
  )
}


export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={MyStack} />
      </Drawer.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
