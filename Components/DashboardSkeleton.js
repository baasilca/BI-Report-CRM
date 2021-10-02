import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Animated, ScrollView, View, Platform } from 'react-native';
const color = "#dce0dd"
const tint = "#fff"
export default function DashboardSkeleton(props) {
  const fadeAnim = useRef(new Animated.Value(0)).current
  useEffect(() => {
    Animated.loop(
      Animated.timing(
        fadeAnim,
        {
          toValue: 10,
          duration: 3000,
          useNativeDriver: true,
        },
      ))
      .start();
  }, [fadeAnim])

  const Swiper = () => {
    return (
      <View style={{ height: 60, width: '95%', borderRadius: 5, backgroundColor: color, marginTop: 8 }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', padding: 5 }}>
          <View style={{ flex: 1 }} >
            <View style={{ height: 12, width: 65, backgroundColor: tint, marginTop: 10 }}></View>
            <View style={{ height: 25, width: 100, backgroundColor: tint, borderRadius: 5, marginTop: 5 }}></View>
          </View>
          <View style={{ flex: 0 }}>
            <View style={{ height: 25, width: 30, backgroundColor: tint, marginTop: 10, borderRadius: 5, marginLeft: 45 }}></View>
            <View style={{ height: 12, width: 80, backgroundColor: tint, marginTop: 5 }}></View>
          </View>
        </View>
      </View>
    )
  }
  const ScrollCards = () => {
    return (
      <ScrollView style={{ marginTop: Platform.OS === "android" ? 10 : 15, width: '100%', marginLeft: 10 }} horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{ height: 110, width: 150, borderRadius: 10, backgroundColor: color, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ height: 30, width: 30, borderRadius: 15, backgroundColor: tint, marginLeft: 5 }}></View>
            <View style={{ height: 10, width: 90, backgroundColor: tint, marginTop: 3, marginLeft: 5 }}></View>
          </View>
          <View style={{ height: 8, width: 125, backgroundColor: tint, marginTop: 2, marginLeft: 5 }}></View>
          <View style={{ height: 35, width: 130, borderRadius: 5, backgroundColor: tint, marginTop: 5, marginLeft: 5 }}></View>
        </View>

        <View style={{ height: 110, width: 150, borderRadius: 10, backgroundColor: color, marginLeft: 10, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ height: 30, width: 30, borderRadius: 15, backgroundColor: tint, marginLeft: 5 }}></View>
            <View style={{ height: 10, width: 90, backgroundColor: tint, marginTop: 3, marginLeft: 5 }}></View>
          </View>
          <View style={{ height: 8, width: 125, backgroundColor: tint, marginTop: 2, marginLeft: 5 }}></View>
          <View style={{ height: 35, width: 130, borderRadius: 5, backgroundColor: tint, marginTop: 5, marginLeft: 5 }}></View>
        </View>

        <View style={{ height: 110, width: 150, borderRadius: 10, backgroundColor: color, marginLeft: 10, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ height: 30, width: 30, borderRadius: 15, backgroundColor: tint, marginLeft: 5 }}></View>
            <View style={{ height: 10, width: 90, backgroundColor: tint, marginTop: 3, marginLeft: 5 }}></View>
          </View>
          <View style={{ height: 8, width: 125, backgroundColor: tint, marginTop: 2, marginLeft: 5 }}></View>
          <View style={{ height: 35, width: 130, borderRadius: 5, backgroundColor: tint, marginTop: 5, marginLeft: 5 }}></View>
        </View>

      </ScrollView>
    )
  }

  return (
    <Animated.View
      style={[styles.container, { opacity: fadeAnim }]}>
      <View style={{
        height: 210, width: '100%', borderBottomEndRadius: 30, borderBottomStartRadius: 30, backgroundColor: color,
        justifyContent: 'center', paddingLeft: 50
      }}>
        <View style={{ height: 5, width: 30, backgroundColor: tint, marginTop: 50 }}></View>
        <View style={{ height: 5, width: 30, backgroundColor: tint, marginTop: 3 }}></View>
        <View style={{ height: 5, width: 30, backgroundColor: tint, marginTop: 3 }}></View>

        <View style={{ height: 35, width: 260, backgroundColor: tint, marginTop: 10 }}></View>
        <View style={{ height: 25, width: 175, backgroundColor: tint, borderRadius: 10, marginTop: 8 }}></View>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Swiper />
        <Swiper />
        <Swiper />
        <Swiper />
      </View>

      <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: 15 }}>
        <View style={{ height: 10, width: 10, borderRadius: 10, backgroundColor: color, }}></View>
        <View style={{ height: 10, width: 10, borderRadius: 10, backgroundColor: color, marginLeft: 15 }}></View>
        <View style={{ height: 10, width: 10, borderRadius: 10, backgroundColor: color, marginLeft: 15 }}></View>
      </View>
      <View>
        <View style={{ height: 15, width: '45%', backgroundColor: color, marginTop: 20, marginLeft: 10 }}></View>
        <ScrollCards />
        <View style={{ height: 15, width: '52%', backgroundColor: color, marginTop: 15, marginLeft: 10 }}></View>
        <ScrollCards />
      </View>

    </Animated.View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: '100%', width: '100%', flex: 1,
  },
});
