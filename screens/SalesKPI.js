import React, { useEffect } from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { View, Text, Image, ImageBackground, TextInput, StyleSheet, ScrollView, Alert, Animated, SafeAreaView } from "react-native";
import { useGetSalesKPIQuery } from '../Redux/Slices/salesKPI'
import { Card } from "react-native-paper";
import { LinearGradient } from 'expo-linear-gradient';
import Swiper from 'react-native-swiper'
import { data0, data1, data2, bestSalesMan } from './api'
import SwiperFlatList from "react-native-swiper-flatlist";
import { Card as ElementCard } from "react-native-elements";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { WebView } from 'react-native-webview';

const SalesKPI = (props) => {
  const { navigation } = props
  const { data, isLoading, isError } = useGetSalesKPIQuery()
  console.log("++++++++++++++++++++++++++", data)


  const Header_Maximum_Height = 200;
  const Header_Minimum_Height = 80;
  const Content_Border_Radius = 30;
  const AnimatedHeaderValue = new Animated.Value(0);

  const AnimateHeaderBackgroundColor = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
    outputRange: ['#4286F4', '#177d99'],
    extrapolate: 'clamp',
  });
  const HeaderFirstColor = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
    outputRange: ['#fff', '#177d99'],
    extrapolate: 'clamp',
  });
  const HeaderSecondColor = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
    outputRange: ['#4286F4', '#fff'],
    extrapolate: 'clamp',
  });
  const AnimatedMarginTOP = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
    outputRange: [40, 110],
    extrapolate: 'clamp',
  });

  const AnimateHeaderHeight = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
    outputRange: [Header_Maximum_Height, Header_Minimum_Height],
    extrapolate: 'clamp',
  });



  const SwiperCards = () => {
    return (
      <View style={{ marginTop: 2 }}>
        <Swiper showsButtons={false} dotColor={"#808080"} activeDotColor={"#4286F4"} loop={false} height={370} autoplay={false} >
          <View style={{ padding: 10 }}>
            {
              data && data.data.sales_kpi_details.row1.map((item, index) => {
                return (
                  <LinearGradient
                    colors={item.bg}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                    style={{ padding: 10, margin: 5, borderRadius: 5, flexDirection: "row" }}
                  >
                    <View style={{ width: "60%" }}>
                      <Text style={{ color: "#fff", fontWeight: 'bold', }}>{item.title}</Text>
                      <Text style={{ fontSize: 22, fontWeight: "bold", color: "#fff" }}>{item.left_value}</Text>
                    </View>

                    <View style={{ justifyContent: 'center', flexDirection: 'row', flex: 1, alignSelf: 'center', marginLeft: 40 }}>
                      <View>
                        <Text style={{ alignSelf: "center", fontWeight: "bold", color: "#fff" }} >{item.value}</Text>
                        <Text style={{ color: "#fff" }} >{item.text}</Text>
                      </View>
                    </View>

                  </LinearGradient>
                )
              })

            }
          </View>

          <View style={{ padding: 10 }}>
            {data && data.data.sales_kpi_details.row2.map((item, index) => {
              return (
                <LinearGradient
                  colors={item.bg}
                  style={{}}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 1 }}
                  style={{ padding: 10, margin: 5, borderRadius: 5, flexDirection: "row" }}
                >
                  <View style={{ justifyContent: "center", alignSelf: "center", flexDirection: 'row', flex: 1 }}>
                    <View>
                      <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 22, color: "#fff" }}>{item.value}</Text>
                      <Text style={{ color: "#fff" }}>{item.text}</Text>
                    </View>
                  </View>

                </LinearGradient>
              )
            })}

          </View>

          <View style={{ padding: 10 }}>
            {data && data.data.sales_kpi_details.row3.map((item, index) => {
              return (
                <>

                  {item.type === 1 ?

                    <LinearGradient
                      colors={item.bg}
                      style={{}}
                      start={{ x: 0, y: 1 }}
                      end={{ x: 1, y: 1 }}
                      style={{ padding: 10, margin: 5, borderRadius: 5, flexDirection: "row" }}
                    >
                      <View style={{ width: "60%" }}>
                        <Text style={{ color: "#fff", fontWeight: 'bold', }}>{item.title}</Text>
                        <Text style={{ fontSize: 22, fontWeight: "bold", color: "#fff" }}>{item.left_value}</Text>
                      </View>

                      <View style={{ justifyContent: 'center', flexDirection: 'row', flex: 1, alignSelf: 'center', marginLeft: 40 }}>
                        <View>
                          <Text style={{ alignSelf: "center", fontWeight: "bold", color: "#fff" }} >{item.value}</Text>
                          <Text style={{ color: "#fff" }} >{item.text}</Text>
                        </View>
                      </View>
                    </LinearGradient>
                    :
                    <LinearGradient
                      colors={item.bg}
                      style={{}}
                      start={{ x: 0, y: 1 }}
                      end={{ x: 1, y: 1 }}
                      style={{ padding: 10, margin: 5, borderRadius: 5, flexDirection: "row" }}
                    >
                      <View style={{ justifyContent: "center", alignSelf: "center", flexDirection: 'row', flex: 1 }}>
                        <View>
                          <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 22, color: "#fff" }}>{item.value}</Text>
                          <Text style={{ color: "#fff" }}>{item.text}</Text>
                        </View>
                      </View>
                    </LinearGradient>
                  }
                </>
              )
            })}

          </View>
        </Swiper>
      </View>
    )
  }


  return (

    <SafeAreaView style={styles.MainContainer}>
      <ScrollView
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingTop: Header_Maximum_Height - Content_Border_Radius, zIndex: 9, elevation: 3 }}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: AnimatedHeaderValue } } },
        ])}>
        <View style={{ backgroundColor: '#FFF', borderTopLeftRadius: Content_Border_Radius, borderTopRightRadius: Content_Border_Radius }}>

          <View style={{ backgroundColor: "#fff", marginTop: 20 }}>
            <SwiperCards />
              <View>
                <View style={{ padding: 5, marginTop: -30,marginBottom:-10 }}>
                  <Text style={{ fontSize: 15, color: "#29248a", fontWeight: "bold", marginLeft: 10 }}>Best Salesman (Sale)</Text>
                </View>
                <SwiperFlatList
                  style={{ margin: 10 }}
                  autoplayDelay={6}
                  autoplayLoop={true}
                  autoplayLoopKeepAnimation={true}
                  data={data && data.data.best_salesman.sale}
                  renderItem={({ item }) =>
                    <View style={{ margin: -10 }}>
                      <LinearGradient
                        colors={data && data.data.best_salesman.color}
                        style={{
                          backgroundColor: "#fff",
                          margin: 15,
                          width: 160,
                          padding: 10,
                          borderRadius: 8,
                          height: 100,
                          marginBottom: 40,
                        }}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 1 }}
                      >
                        <View style={{ flexDirection: "row" }}>
                          <Image style={{ width: 20, height: 20, alignSelf: 'center' }} source={{ uri: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png' }} />
                          <Text style={{ marginLeft: 5, width: "80%", fontWeight: 'bold',color:"black" }} numberOfLines={1}>{item.UserName}</Text>
                        </View>
                        <Text style={{ fontSize: 12,color:"black"  }} numberOfLines={1}>{item.UserEmail}</Text>
                        <View style={{ borderRadius: 10, backgroundColor: "#e8f6ff", padding: 10, margin: 5 }}>
                          <Text style={{ fontWeight: "bold", alignSelf: 'center', fontSize: 15, opacity: 0.8,color:"black" }}>Sale: {item.sales}</Text>
                        </View>
                      </LinearGradient>
                    </View>
                  }
                />
              </View>
              <View style={{ padding: 5, marginTop: -30,marginBottom:-10 }}>
                <Text style={{ fontSize: 15, color: "#29248a", fontWeight: "bold", marginLeft: 10 }}>Best Salesman (Gross Profit)</Text>
              </View>
              <SwiperFlatList
                style={{ margin: 10 }}
                autoplayDelay={6}
                autoplayLoop={true}
                autoplayLoopKeepAnimation={true}
                data={data && data.data.best_salesman.gp}
                renderItem={({ item }) =>
                  <View style={{ margin: -10 }}>
                    <LinearGradient
                      colors={data && data.data.best_salesman.color}
                      style={{
                        backgroundColor: "#fff",
                        margin: 15,
                        width: 160,
                        padding: 10,
                        borderRadius: 8,
                        height: 100,
                        marginBottom: 40,
                      }}
                      start={{ x: 0, y: 1 }}
                      end={{ x: 1, y: 1 }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <Image style={{ width: 20, height: 20, alignSelf: 'center' }} source={{ uri: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png' }} />
                        <Text style={{ marginLeft: 5, width: "80%", fontWeight: 'bold',color:"black" }} numberOfLines={1}>{item.UserName}</Text>
                      </View>
                      <Text style={{ fontSize: 12,color:"black" }} numberOfLines={1}>{item.UserEmail}</Text>
                      <View style={{ borderRadius: 10, backgroundColor: "#e8f6ff", padding: 10, margin: 5 }}>
                        <Text style={{ fontWeight: "bold", alignSelf: 'center', fontSize: 15, opacity: 0.8,color:"black" }}>GP: {item.profit}</Text>
                      </View>
                    </LinearGradient>
                  </View>
                }
              />
            {data && data.data.company_sales &&
              <View style={{ height: 200 ,backgroundColor:"#f0f0f0",elevation:8}}>
                <WebView style={{ marginTop: 5 }} source={{ html: data && data.data.company_sales }} />
              </View>
            }
          </View>
        </View>
      </ScrollView>
      <Animated.View
        style={[
          styles.Header,
          {
            height: AnimateHeaderHeight,
            backgroundColor: AnimateHeaderBackgroundColor,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30
          },
        ]}>
        <Animated.View style={{ backgroundColor: AnimateHeaderBackgroundColor }}>

          <Animated.View style={{
            flexDirection: "row",
            marginTop: AnimatedMarginTOP,
            alignItems: "center",
            paddingHorizontal: 40,
          }}>
            <Icon name="menu" size={30} color="#fff" style={{ width: 20 }}
              onPress={() => { navigation.openDrawer() }}
            />
            <Animated.Text style={{ color: HeaderSecondColor, fontSize: 20, marginLeft: 10 }} >Sales KPI</Animated.Text>
            <Icon name="account-circle" size={33} color="#fff" style={{ marginLeft: 180 }} />
          </Animated.View>

          <View style={{ paddingHorizontal: 40, marginTop: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <Animated.Text style={[styles.headerText, { color: HeaderFirstColor }]} >Sales KPI</Animated.Text>
              <Animated.Text style={{ marginTop: 10, color: HeaderFirstColor, fontSize: 17 }}>({data && data.data.data_details_date})</Animated.Text>
            </View>
            <Card style={{ backgroundColor: "#f79179", borderRadius: 30, padding: 2, width: "60%", justifyContent: "center", marginBottom: 5 }}>
              <Text style={{ color: "#fff", alignSelf: "center", fontWeight: 'bold' }}>Remaining Days {data && data.data.remaining_days}</Text>
            </Card>
          </View>
        </Animated.View>
      </Animated.View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 40,
    alignItems: "center",
    paddingHorizontal: 40,
  },
  headerText: {
    fontSize: 30,
    color: "#fff",
  },
  description: {
    fontSize: 15,
    paddingVertical: 10,
    paddingRight: 80,
    lineHeight: 22,
    // fontFamily: "RobotoRegular",
    color: "#a2a2db",
  },
  MainContainer: {
    flex: 1,
    paddingTop: Platform.OS == 'ios' ? 20 : 0,
    // backgroundColor: '#4286F4'
  },

  Header: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: Platform.OS == 'ios' ? 20 : 0,
    overflow: 'hidden',
    elevation: 2,
  },

  HeaderInsideText: {
    color: '#fff',
    fontSize: 48,
    textAlign: 'center',
  },

  TextViewStyle: {
    textAlign: 'center',
    color: '#000',
    fontSize: 18,
    margin: 5,
    padding: 7,
  },
})

export default SalesKPI
