import React, { useEffect, useState, useRef } from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Platform, View, Text, Image, ImageBackground, TextInput, StyleSheet, ScrollView, Alert, Animated, SafeAreaView, StatusBar } from "react-native";
import { useGetSalesKPIQuery, useUpdatePostMutation } from '../Redux/Slices/salesKPI'
import { Card } from "react-native-paper";
import { LinearGradient } from 'expo-linear-gradient';
import Swiper from 'react-native-swiper'
import SwiperFlatList from "react-native-swiper-flatlist";
import { WebView } from 'react-native-webview';
import DashboardSkeleton from '../Components/DashboardSkeleton'
import AppStyles from '../AppStyles'
import ModalSelector from "react-native-modal-selector";
import DialogWithLoadingIndicator from '../Components/progressIndicator';

const _dateRangeOptions = [
  { key: 'this_month', label: 'This Month' },
  { key: 'this_quarter', label: 'This Quarter' },
  { key: 'this_year', label: 'This Year' },
  { key: 'life_time', label: 'Life Time' },
];

const SalesKPI = (props) => {
  const { navigation } = props
  const [filterValue, setFilterValue] = useState({ key: 'this_quarter', label: 'This Quarter' })
  const { data, isLoading, isFetching } = useGetSalesKPIQuery({ sales_kpi_sort: filterValue.key });
  const [appLoaded, setappLoaded] = useState(false)
  const abc = useRef()
  const Header_Maximum_Height = Platform.OS == 'ios' ? 250 : 180;
  const Header_Minimum_Height = Platform.OS == 'ios' ? 90 : 50;
  const Content_Border_Radius = 30;
  const AnimatedHeaderValue = new Animated.Value(0);
  const AnStatusBar = Animated.createAnimatedComponent(StatusBar)
  const AnIcon = Animated.createAnimatedComponent(Icon)

  useEffect(() => {
    if (data && data.data) {
      setappLoaded(true)
    }
  }, [data])

  const {
    sales_kpi_details,
    best_salesman,
    company_sales,
    top_industry_sale,
    top_source_sale,
    data_details_date,
    remaining_days
  } = data && data.data || ";"

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
    outputRange: [10, Platform.OS == 'ios' ? 140 : 110],
    extrapolate: 'clamp',
  });
  const AnimatedFilterIconWidth = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
    outputRange: [0, 170],
    extrapolate: 'clamp',
  });
  const AnimateHeaderHeight = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Maximum_Height - Header_Minimum_Height],
    outputRange: [Header_Maximum_Height, Header_Minimum_Height],
    extrapolate: 'clamp',
  });

  const onChanageDateRangeOption = (option) => {
    setFilterValue(option);
  }

  const SwiperCards = () => {
    return (
      <View style={{ marginTop: 2 }}>
        <AnStatusBar
          animated={true}
          backgroundColor={AnimateHeaderBackgroundColor}
          barStyle={'light-content'}
        />
        <Swiper showsButtons={false} dotColor={"#808080"} activeDotColor={"#4286F4"} loop={false} height={370} autoplay={false} >
          {sales_kpi_details && sales_kpi_details.row1 &&
            <View style={{ padding: 10 }}>
              {
                sales_kpi_details.row1.map((item, index) => {
                  return (
                    <LinearGradient
                      colors={item.bg}
                      start={{ x: 0, y: 1 }}
                      end={{ x: 1, y: 1 }}
                      style={styles.swiperCards}
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
          }
          {sales_kpi_details && sales_kpi_details.row2 &&
            <View style={{ padding: 10 }}>
              {sales_kpi_details.row2.map((item, index) => {
                return (
                  <LinearGradient
                    colors={item.bg}
                    style={{}}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.swiperCards}
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
          }
          {sales_kpi_details && sales_kpi_details.row3 &&
            <View style={{ padding: 10 }}>
              {sales_kpi_details.row3.map((item, index) => {
                return (
                  <>
                    {item.type === 1 ?
                      <LinearGradient
                        colors={item.bg}
                        style={{}}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.swiperCards}
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
                        style={styles.swiperCards}
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
          }
        </Swiper>
      </View>
    )
  }

  if (!appLoaded && isLoading) {
    return (
      <DashboardSkeleton />
    )
  }
  // if (isUpdating) {
  //   return (
  //     <DialogWithLoadingIndicator visible title={"Please Wait..."}/>
  //   )
  // }
  // if (data && !data.data.length) {
  //   return (
  //     <View style={{height:"20%",backgroundColor:"black"}} />
  //   )
  // }
  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingTop: Header_Maximum_Height - Content_Border_Radius, zIndex: 9, elevation: 3 }}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: AnimatedHeaderValue } } },
        ])}>
        <View style={{ borderTopLeftRadius: Content_Border_Radius, borderTopRightRadius: Content_Border_Radius }}>
          <View style={styles.swiperCardView}>
            <SwiperCards />
            {best_salesman && best_salesman.sale &&
              <View>
                <View style={styles.bestSalesMan}>
                  <Text style={styles.bestSalesManText}>Best Salesman (Sale)</Text>
                </View>
                <SwiperFlatList
                  style={{ margin: 10 }}
                  autoplayDelay={6}
                  // autoplayLoop={true}
                  // autoplayLoopKeepAnimation={true}
                  data={best_salesman && best_salesman.sale}
                  renderItem={({ item }) =>
                    <View style={{ margin: -10 }}>
                      <LinearGradient
                        colors={["#fff", "#fff"]}
                        style={styles.bestSalesGradientView}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 1 }}
                      >
                        <View style={{ flexDirection: "row" }}>
                          <Image style={{ width: 20, height: 20, alignSelf: 'center' }} source={{ uri: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png' }} />
                          <Text style={{ marginLeft: 5, width: "80%", fontWeight: 'bold', color: "black" }} numberOfLines={1}>{item.UserName}</Text>
                        </View>
                        <Text style={{ fontSize: 12, color: "black" }} numberOfLines={1}>{item.UserEmail}</Text>
                        <View style={{ borderRadius: 5, backgroundColor: "#e8f6ff", padding: 10, width: "100%", marginTop: 5 }}>
                          <Text style={{ fontWeight: "bold", alignSelf: 'center', fontSize: 12, opacity: 0.8, color: "black" }}>Sale: {item.sales}</Text>
                        </View>
                      </LinearGradient>
                    </View>
                  }
                />
              </View>
            }
            {best_salesman && best_salesman.gp &&
              <>
                <View style={styles.bestSalesMan}>
                  <Text style={styles.bestSalesManText}>Best Salesman (Gross Profit)</Text>
                </View>
                <SwiperFlatList
                  style={{ margin: 10 }}
                  autoplayDelay={6}
                  // autoplayLoop={true}
                  // autoplayLoopKeepAnimation={true}
                  data={best_salesman && best_salesman.gp}
                  renderItem={({ item }) =>
                    <View style={{ margin: -10 }}>
                      <LinearGradient
                        colors={["#fff", "#fff"]}
                        style={styles.bestSalesGradientView}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 1 }}
                      >
                        <View style={{ flexDirection: "row" }}>
                          <Image style={{ width: 20, height: 20, alignSelf: 'center' }} source={{ uri: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png' }} />
                          <Text style={{ marginLeft: 5, width: "80%", fontWeight: 'bold', color: "black" }} numberOfLines={1}>{item.UserName}</Text>
                        </View>
                        <Text style={{ fontSize: 12, color: "black" }} numberOfLines={1}>{item.UserEmail}</Text>
                        <View style={{ borderRadius: 5, backgroundColor: "#e8f6ff", padding: 10, width: "100%", marginTop: 5 }}>
                          <Text style={{ fontWeight: "bold", alignSelf: 'center', fontSize: 12, opacity: 0.8, color: "black" }}>GP: {item.profit}</Text>
                        </View>
                      </LinearGradient>
                    </View>
                  }
                />
              </>
            }
            {company_sales &&
              <View style={{ marginTop: -25, }}>
                <Text style={[styles.bestSalesManText, { marginLeft: 15, marginBottom: -10 }]}>Company Sale</Text>
                <View style={{ height: 160, margin: 15, backgroundColor: "#fff", padding: 5, borderRadius: 10, borderWidth: 0.5, borderColor: "#bababa" }}>
                  <WebView style={{ marginTop: 5 }} source={{ html: company_sales }} />
                </View>
              </View>
            }
            {top_industry_sale &&
              <View style={{}}>
                <Text style={[styles.bestSalesManText, { marginLeft: 15, marginBottom: -10 }]}>Industry Sale</Text>
                <View style={{ height: 160, margin: 15, backgroundColor: "#fff", padding: 5, borderRadius: 10, borderWidth: 0.5, borderColor: "#bababa" }}>
                  <WebView style={{ marginTop: 5 }} source={{ html: top_industry_sale }} />
                </View>
              </View>
            }
            {top_source_sale &&
              <View style={{}}>
                <Text style={[styles.bestSalesManText, { marginLeft: 15, marginBottom: -10 }]}>Source Sale</Text>
                <View style={{ height: 160, margin: 15, backgroundColor: "#fff", padding: 5, borderRadius: 10, borderWidth: 0.5, borderColor: "#bababa" }}>
                  <WebView style={{ marginTop: 5 }} source={{ html: top_source_sale }} />
                </View>
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
            <Icon name="menu" size={30} color="#fff" style={[{ width: 20 }, Platform.OS == 'ios' && { marginLeft: 20 }]}
              onPress={() => { navigation.openDrawer() }}
            />
            <Animated.Text style={{ color: HeaderSecondColor, fontSize: 20, marginLeft: 10 }} >Sales KPI</Animated.Text>
            <Animated.View style={{ width: AnimatedFilterIconWidth }}>
              <Icon name="filter" size={33} color={"#ffa069"} style={{ marginLeft: 130, marginRight: 10 }}
                onPress={() => {
                  abc.current.open()
                }}
              />
            </Animated.View>
          </Animated.View>
          <View style={{ paddingHorizontal: 40, marginTop: 10, top: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <Animated.Text style={[styles.headerText, { color: HeaderFirstColor }]} >Sales KPI</Animated.Text>
              <Animated.Text style={{ marginTop: Platform.OS == 'ios' ? 15 : 10, color: HeaderFirstColor, fontSize: Platform.OS == 'ios' ? 20 : 17 }}>({data_details_date})</Animated.Text>
            </View>
            <Card style={{ backgroundColor: "#f79179", borderRadius: 30, padding: Platform.OS == 'ios' ? 4 : 2, width: "60%", justifyContent: "center", marginBottom: 5 }}>
              <Text style={{ color: "#fff", alignSelf: "center", fontWeight: 'bold' }}>Remaining Days {remaining_days}</Text>
            </Card>
          </View>
        </Animated.View>
        <View style={{ flexDirection: 'row', alignSelf: 'flex-end', right: 20 }}>
          <ModalSelector
            ref={abc}
            touchableActiveOpacity={0.9}
            data={_dateRangeOptions}
            backdropPressToClose={true}
            cancelText={"Cancel"}
            initValue={filterValue.label}
            onChange={onChanageDateRangeOption}
            overlayStyle={{ flex: 1, padding: '5%', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.7)' }}
          >
            <View style={{ padding: 10 }}>
              <Text style={{ color: "#fff" }}>
                {filterValue.label}
              </Text>
            </View>
          </ModalSelector>

          <Icon name="filter" size={22} color="#ffa069" style={{ top: 8 }}
            onPress={() => {
              abc.current.open()
            }}
          />
        </View>
        {
          appLoaded && isFetching &&
          <DialogWithLoadingIndicator visible title={"Please Wait..."} />
        }
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
    fontSize: Platform.OS == 'ios' ? 40 : 30,
    color: "#fff",
  },
  description: {
    fontSize: 15,
    paddingVertical: 10,
    paddingRight: 80,
    lineHeight: 22,
    color: "#a2a2db",
  },
  MainContainer: {
    flex: 1,
  },

  Header: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
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
  swiperCards: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    flexDirection: "row"
  },
  swiperCardView: {
    marginTop: Platform.OS == 'ios' ? -25 : 20
  },
  bestSalesMan: {
    padding: 5,
    marginTop: -30,
    marginBottom: -10
  },
  bestSalesManText: {
    fontSize: 15,
    color: AppStyles.Colors.screensHeaderColor,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: -5
  },
  bestSalesGradientView: {
    margin: 15,
    width: 160,
    padding: 10,
    borderRadius: 8,
    height: 100,
    marginBottom: 40,
    borderWidth: 0.5,
    borderColor: "#bababa"
  }
})

export default SalesKPI