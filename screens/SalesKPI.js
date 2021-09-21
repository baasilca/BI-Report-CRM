import React, { useEffect } from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { View, Text, Image, ImageBackground, TextInput, StyleSheet, ScrollView } from "react-native";
import { useGetSalesKPIQuery } from '../Redux/Slices/salesKPI'
import { Card } from "react-native-paper";
import { LinearGradient } from 'expo-linear-gradient';
import Swiper from 'react-native-swiper'
import { data, data1, data2, bestSalesMan } from './api'
import SwiperFlatList from "react-native-swiper-flatlist";
import { Card as ElementCard } from "react-native-elements";

const SalesKPI = (props) => {
  const { navigation } = props
  // const { data, isLoading, isError } = useGetSalesKPIQuery()

  const SwiperCards = () => {
    return (
      <View style={{ marginTop:2}}>
        <Swiper showsButtons={false} dotColor={"#fff"} loop={false} height={350} autoplay={false} >

          <View style={{ padding: 10 }}>
            {data.map((item, index) => {
              return (
                <LinearGradient
                  colors={item.color}
                  style={{}}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 1 }}
                  style={{ padding: 10, margin: 5, borderRadius: 5, flexDirection: "row" }}
                >
                  <View style={{ width: "60%" }}>
                    <Text style={{ color: "#fff", fontWeight: 'bold' }}>{item.title}</Text>
                    <Text style={{ fontSize: 20, color: "#fff" }}>{item.value}</Text>
                  </View>

                  <View style={{ justifyContent: 'center', flexDirection: 'row', flex: 1, alignSelf: 'center', marginLeft: 40 }}>
                    <View>
                      <Text style={{ alignSelf: "center" }} >{item.percentage}</Text>
                      <Text >{item.stage}</Text>
                    </View>
                  </View>

                </LinearGradient>
              )
            })}

          </View>

          <View style={{ padding: 10 }}>
            {data1.map((item, index) => {
              return (
                <LinearGradient
                  colors={item.color}
                  style={{}}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 1 }}
                  style={{ padding: 10, margin: 5, borderRadius: 5, flexDirection: "row" }}
                >
                  <View style={{ justifyContent: "center", alignSelf: "center", flexDirection: 'row', flex: 1 }}>
                    <View>
                      <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 20, color: "#fff" }}>{item.amount}</Text>
                      <Text style={{ opacity: 0.7 }}>{item.description}</Text>
                    </View>
                  </View>

                </LinearGradient>
              )
            })}

          </View>

          <View style={{ padding: 10 }}>
            {data2.map((item, index) => {
              return (
                <LinearGradient
                  colors={item.color}
                  style={{}}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 1 }}
                  style={{ padding: 10, margin: 5, borderRadius: 5, flexDirection: "row" }}
                >
                  {item.type ?
                    <>
                      <View style={{ width: "60%" }}>
                        <Text style={{ color: "#fff", fontWeight: 'bold' }}>{item.title}</Text>
                        <Text style={{ fontSize: 20, color: "#fff" }}>{item.value}</Text>
                      </View>

                      <View style={{ justifyContent: 'center', flexDirection: 'row', flex: 1, alignSelf: 'center', marginLeft: 40 }}>
                        <View>
                          <Text style={{ alignSelf: "center" }} >{item.percentage}</Text>
                          <Text >{item.stage}</Text>
                        </View>
                      </View>
                    </> :
                    <View style={{ justifyContent: "center", alignSelf: "center", flexDirection: 'row', flex: 1 }}>
                      <View>
                        <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 20, color: "#fff" }}>{item.amount}</Text>
                        <Text>{item.description}</Text>
                      </View>
                    </View>
                  }

                </LinearGradient>
              )
            })}

          </View>
        </Swiper>
      </View>
    )
  }

  return (
    <ImageBackground
      source={require("../images/back.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.container}>
        <Icon name="menu" size={30} color="#a2a2db" style={{ width: 20 }}
          onPress={() => { navigation.openDrawer() }}
        />
        <Icon name="account-circle" size={33} color="#a2a2db" style={{ marginLeft: 230 }} />
      </View>

      <View style={{ paddingHorizontal: 40, marginTop: 25 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.headerText} >Sales KPI</Text>
          <Text style={{ marginTop: 10, color: "#a2a2db", fontSize: 17 }}>(Jan 2021 - Dec 2022)</Text>
        </View>
        <Card style={{ backgroundColor: "#a2a2db", borderRadius: 30, padding: 2, width: "60%", justifyContent: "center",marginBottom:5 }}>
          <Text style={{ color: "#fff", alignSelf: "center" }}>Remaining Days 104</Text>
        </Card>
      </View>
      
      <ScrollView>
      <SwiperCards />
      <View>
      <View style={{ padding: 5,marginTop:-20 }}>
        <Text style={{ fontSize: 15, color: "#fff", fontWeight: "bold", marginLeft: 10 }}>Best Salesman (Sale)</Text>
      </View>
      <SwiperFlatList
        style={{ margin: 10 }}
        autoplayDelay={6}
        autoplayLoop={true}
        autoplayLoopKeepAnimation={true}
        data={bestSalesMan}
        renderItem={({ item }) =>
          <View style={{ margin: -10 }}>
            <LinearGradient
              colors={item.color}
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
              <View style={{flexDirection:"row"}}>
                <Image style={{ width: 20, height: 20,alignSelf:'center' }} source={{ uri: item.image, }} />
                <Text style={{marginLeft:5,width:"80%",fontWeight:'bold',opacity:0.7}} numberOfLines={2}>{item.name}</Text>
              </View>
              <Text style={{fontSize:12}} numberOfLines={2}>{item.email}</Text>
              <View style={{borderRadius:10,backgroundColor:"#e8f6ff",padding:10,margin:5}}>
                <Text style={{fontWeight:"bold",alignSelf:'center',fontSize:15,opacity:0.8}}>{item.amount}</Text>
              </View>
            </LinearGradient>
          </View>
        }
      />
       </View>
      <View style={{ padding: 5,marginTop:-20 }}>
        <Text style={{ fontSize: 15, color: "#fff", fontWeight: "bold", marginLeft: 10 }}>Best Salesman (Gross Profit)</Text>
      </View>
      <SwiperFlatList
        style={{ margin: 10 }}
        autoplayDelay={6}
        autoplayLoop={true}
        autoplayLoopKeepAnimation={true}
        data={bestSalesMan}
        renderItem={({ item }) =>
          <View style={{ margin: -10 }}>
            <LinearGradient
              colors={item.color}
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
              <View style={{flexDirection:"row"}}>
                <Image style={{ width: 20, height: 20,alignSelf:'center' }} source={{ uri: item.image, }} />
                <Text style={{marginLeft:5,width:"80%",fontWeight:'bold',opacity:0.7}} numberOfLines={2}>{item.name}</Text>
              </View>
              <Text style={{fontSize:12}} numberOfLines={2}>{item.email}</Text>
              <View style={{borderRadius:10,backgroundColor:"#e8f6ff",padding:10,margin:5}}>
                <Text style={{fontWeight:"bold",alignSelf:'center',fontSize:15,opacity:0.8}}>{item.amount}</Text>
              </View>
            </LinearGradient>
          </View>
        }
      />
      </ScrollView>


    </ImageBackground>
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
    color: "#522289",
    // fontFamily: "RobotoBold",
  },
  description: {
    fontSize: 15,
    paddingVertical: 10,
    paddingRight: 80,
    lineHeight: 22,
    // fontFamily: "RobotoRegular",
    color: "#a2a2db",
  }
})

export default SalesKPI
