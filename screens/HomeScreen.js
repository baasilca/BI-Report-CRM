import React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';


import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StarRating from '../components/StarRating';

const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <Text style={{
                marginLeft: 20,
                marginTop: 10,
                fontSize: 14,
                fontWeight: 'bold',
                color: '#333'
            }}>Recently Added</Text>
            <View style={styles.sliderContainer}>
                <Swiper autoplay height={200} activeDotColor="#009387">
                    <View style={styles.slide}>

                        <Image
                            source={require('../assets/banners/car1.jpg')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                        <Text style={{
                            alignSelf: 'center',
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: '#333'
                        }}>₹ 50,000,00</Text>
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={require('../assets/banners/car2.jpg')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                        <Text style={{
                            alignSelf: 'center',
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: '#333'
                        }}>₹ 60,000,00</Text>
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={require('../assets/banners/car3.jpg')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                        <Text style={{
                            alignSelf: 'center',
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: '#333'
                        }}>₹ 30,0000</Text>
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={require('../assets/banners/car4.jpg')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                        <Text style={{
                            alignSelf: 'center',
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: '#333'
                        }}>₹ 50,0000</Text>
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={require('../assets/banners/car5.jpg')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                        <Text style={{
                            alignSelf: 'center',
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: '#333'
                        }}>₹ 56,0000</Text>
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={require('../assets/banners/car6.jpg')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                        <Text style={{
                            alignSelf: 'center',
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: '#333'
                        }}>₹ 72,0000</Text>
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={require('../assets/banners/car7.jpg')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                        <Text style={{
                            alignSelf: 'center',
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: '#333'
                        }}>₹ 65,0000</Text>
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={require('../assets/banners/car8.jpg')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                        <Text style={{
                            alignSelf: 'center',
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: '#333'
                        }}>₹ 56,0000</Text>
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={require('../assets/banners/car9.jpg')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                        <Text style={{
                            alignSelf: 'center',
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: '#333'
                        }}>₹ 76,0000</Text>
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={require('../assets/banners/car10.jpg')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                        <Text style={{
                            alignSelf: 'center',
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: '#333'
                        }}>₹ 87,0000</Text>
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={require('../assets/banners/car10.jpg')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                        <Text style={{
                            alignSelf: 'center',
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: '#333'
                        }}>₹ 65,0000</Text>
                    </View>
                </Swiper>
            </View>
            <View style={[styles.categoryContainer, { marginTop: 10 }]}>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                    <View style={styles.categoryIcon}>
                        <Ionicons name="ios-home" size={35} color="grey" />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Properties</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                    <View style={styles.categoryIcon}>
                        <Ionicons name="ios-car" size={35} color="grey" />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Cars</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                    <View style={styles.categoryIcon}>
                        <Ionicons name="ios-bicycle" size={35} color="grey" />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Bikes</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.categoryContainer, { marginTop: 10 }]}>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                    <View style={styles.categoryIcon}>
                        <Ionicons name="ios-phone-portrait" size={35} color="grey" />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Mobiles</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                    <View style={styles.categoryIcon}>
                        <Ionicons name="ios-laptop" size={35} color="grey" />
                    </View>
                    <Text style={styles.categoryBtnTxt}>Laptops</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                    <View style={styles.categoryIcon}>
                        <Ionicons name="ios-arrow-down" size={35} color="grey" />
                    </View>
                    <Text style={styles.categoryBtnTxt}>More</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardsWrapper}>
                <Text style={{
                    alignSelf: 'center',
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#333'
                }}>recently viewed</Text>
                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={require('../assets/banners/car1.jpg')}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>test content</Text>
                        <StarRating ratings={4} reviews={99} />
                        <Text style={styles.cardDetails}>amazing description for this amazing place</Text>

                    </View>

                </View>
                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={require('../assets/banners/car2.jpg')}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>test content</Text>
                        <StarRating ratings={5} reviews={99} />
                        <Text style={styles.cardDetails}>amazing description for this amazing place</Text>

                    </View>

                </View>
                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={require('../assets/banners/car3.jpg')}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>test content</Text>
                        <StarRating ratings={3} reviews={99} />
                        <Text style={styles.cardDetails}>amazing description for this amazing place</Text>

                    </View>

                </View>
                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={require('../assets/banners/car4.jpg')}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>test content</Text>
                        <StarRating ratings={4} reviews={99} />
                        <Text style={styles.cardDetails}>amazing description for this amazing place</Text>

                    </View>

                </View>
                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={require('../assets/banners/car5.jpg')}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>test content</Text>
                        <StarRating ratings={3} reviews={99} />
                        <Text style={styles.cardDetails}>amazing description for this amazing place</Text>

                    </View>

                </View>
                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={require('../assets/banners/car6.jpg')}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>test content</Text>
                        <StarRating ratings={4} reviews={99} />
                        <Text style={styles.cardDetails}>amazing description for this amazing place</Text>

                    </View>

                </View>
                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={require('../assets/banners/car7.jpg')}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>test content</Text>
                        <StarRating ratings={5} reviews={99} />
                        <Text style={styles.cardDetails}>amazing description for this amazing place</Text>

                    </View>

                </View>
                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={require('../assets/banners/car8.jpg')}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>test content</Text>
                        <StarRating ratings={4} reviews={99} />
                        <Text style={styles.cardDetails}>amazing description for this amazing place</Text>

                    </View>

                </View>
                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={require('../assets/banners/car9.jpg')}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>test content</Text>
                        <StarRating ratings={3} reviews={99} />
                        <Text style={styles.cardDetails}>amazing description for this amazing place</Text>

                    </View>

                </View>
                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={require('../assets/banners/car10.jpg')}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>test content</Text>
                        <StarRating ratings={2} reviews={99} />
                        <Text style={styles.cardDetails}>amazing description for this amazing place</Text>

                    </View>

                </View>
                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={require('../assets/banners/car11.jpg')}
                            resizeMode="cover"
                            style={styles.cardImg}
                        />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>test content</Text>
                        <StarRating ratings={4} reviews={99} />
                        <Text style={styles.cardDetails}>amazing description for this amazing place</Text>

                    </View>

                </View>

            </View>
        </ScrollView>
    )
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sliderContainer: {
        height: 200,
        width: '90%',
        marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
    },

    wrapper: {},

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8,
    },
    sliderImage: {
        height: '85%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
    },
    categoryContainer: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 10,
    },
    categoryBtn: {
        flex: 1,
        width: '30%',
        marginHorizontal: 0,
        alignSelf: 'center',
    },
    categoryIcon: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 70,
        height: 70,
        backgroundColor: '#fdeae7' /* '#FF6347' */,
        borderRadius: 50,
    },
    categoryBtnTxt: {
        alignSelf: 'center',
        marginTop: 5,
        color: 'black',
    },
    cardsWrapper: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
    },
    card: {
        height: 100,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    cardImgWrapper: {
        flex: 1,
    },
    cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
    },
    cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#fff',
    },
    cardTitle: {
        fontWeight: 'bold',
    },
    cardDetails: {
        fontSize: 12,
        color: '#444',
    },
});
