import React ,{useState}from 'react';
import { Text, View, StyleSheet, ScrollView, FlatList, Image } from 'react-native';
import SelectDropdown from './../Components/SelectDropdown';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Divider, Card, IconButton } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { useGetYearlyOverviewQuery } from '../Redux/Slices/yearlyOverview'


const year = (new Date()).getFullYear();
const years = Array.from(new Array(3),( val, index) =>   year - index);

const color = "#dce0dd"
const tint = "#fff"

const YearlyOverview = () => {
    // const data = ["Email Marketing Jan 2016- June 2016",
    //     " Flyer June-Aug 2016	",
    //     " PPC Sep - Desc",
    //     "Telemarketing 2017 Jan- Feb	1",
    //     "April 2017 E	1	",
    //     " telecalling	1	",
    //     "Exhibition Eng"]

    //      const YearFilter=()=>{
    //          return
    //      }


const {data,isLoading,isFetching}=useGetYearlyOverviewQuery()
console.log("++++++++++++++++++++++++++++++++++++++",data)
    const SaleCampaign = () => {
        const renderItem = ({ item }) => (
            <View style={{ flex: 1, flexDirection: 'row', padding: 10, alignItems: 'center', marginBottom: 5 }}>
                <MaterialCommunityIcons
                    name="checkbox-blank-circle"
                    color="#099"
                    size={8}
                    style={{}}
                />
                <Text style={{ width: '40%', marginLeft: 10, color: 'black', }}>{item}</Text>
                <Text style={{ justifyContent: 'center', alignItems: 'center', width: '22%', fontSize: 14, textAlign: 'center' }}>65</Text>
                <Text style={{ justifyContent: 'center', alignItems: 'center', width: '28%', fontSize: 14, textAlign: 'right' }}>10,000.00</Text>
            </View>
        )
        return (
           
               <Card style={{ width: '90%',  justifyContent:'center',
                     marginLeft: '5%', margin: '1%', }}>
                <LinearGradient
                    colors={["#fff", "#fff"]}
                    style={{}}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }} >
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}/>
                </LinearGradient>
                </Card>
            
        )
    }
   

    const BestSaleman = () => {
        return (
            <View style={{ flex: 1,  }}>
                 <Card style={{ width: '90%',  justifyContent:'center',
                     marginLeft: '5%', margin: '1%', }}>
                <LinearGradient
                    colors={["#fff", "#eeff"]}
                    style={styles.bestSalesGradientView}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }} >
                    <View style={{ flexDirection: "row", marginTop: 5 }}>
                        <Image style={{ width: 20, height: 20, alignSelf: 'center' }} source={{ uri: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png' }} />
                        <Text style={{ marginLeft: 5, width: "100%", fontWeight: 'bold', color: "black" }} numberOfLines={1}>TestappMob admin</Text>
                    </View>
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <Text style={{ justifyContent: 'center', alignItems: 'center', width: '50%', }}>Sale</Text>
                        <Text style={{ justifyContent: 'center', alignItems: 'center', fontSize: 14, width: '47%', textAlign: 'right' }}>10,000.00</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                        <Text style={{ justifyContent: 'center', alignItems: 'center', width: '50%', }}>Profit(GP)</Text>
                        <Text style={{ justifyContent: 'center', alignItems: 'center', fontSize: 14, width: '47%', textAlign: 'right' }}>105260.00</Text>
                    </View>
                </LinearGradient>
                </Card>
            </View>
        )
    }
    return (
        <View style={{ flex: 1, }}>
            <LinearGradient
                colors={["#fff", "#effff9"]}
                style={{}}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }} >
                <SelectDropdown
                    buttonStyle={styles.KeyCustomerButton}
                    buttonTextStyle={{ fontSize: 13 }}
                    data={years}
                    dropdownStyle={styles.dropdownStyle}
                    defaultButtonText="All"
                    renderDropdownIcon={() => {
                        return (
                            <MaterialCommunityIcons
                                name="chevron-down"
                                color="#099"
                                size={20}
                            />
                        )
                    }}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        return item
                    }}
                />
                <ScrollView style={{ margin: 5, }}>
                    <View style={styles.row} >
                         <Text style={styles.propertyTitle}>Total account</Text>
                         <Card style={{ borderBottomWidth:0,shadowOpacity:'100%',shadowColor:'red',  justifyContent: 'center',  width: '32%',padding:8 }}>
                            <Text style={{
                                textAlign: 'right',
                                paddingRight: 15,
                                fontSize: 14,
                                color: 'black',
                                alignItems: 'center'
                            }} >52</Text>
                       </Card>
                    </View>
                    
                    <View style={styles.row} >
                        <Text style={styles.propertyTitle}>New customers</Text>
                        <Card style={{ borderBottomWidth:0,shadowOpacity:'100%',shadowColor:'red',  justifyContent: 'center',  width: '32%',padding:8 }}>
                            <Text style={{
                                textAlign: 'right',
                                paddingRight: 15,
                                fontSize: 14,
                                color: 'black',
                                alignItems: 'center'
                            }} >12</Text>
                        </Card>
                    </View>
                    <View style={styles.row} >
                        <Text style={styles.propertyTitle}>Total opportunity</Text>
                        <Card style={{ borderBottomWidth:0,shadowOpacity:'100%',shadowColor:'red',  justifyContent: 'center',  width: '32%',padding:8 }}>
                            <Text style={{
                                textAlign: 'right',
                                paddingRight: 15,
                                fontSize: 14,
                                color: 'black',
                                alignItems: 'center'
                            }} >254</Text>
                        </Card>
                    </View>
                    <View style={styles.row} >
                        <Text style={styles.propertyTitle}>Opportunity conversion ratio</Text>
                        <Card style={{ borderBottomWidth:0,shadowOpacity:'100%',shadowColor:'red',  justifyContent: 'center',  width: '32%',padding:8}}>
                            <Text style={{
                                textAlign: 'right',
                                paddingRight: 15,
                                fontSize: 14,
                                color: 'black',
                                alignItems: 'center'
                            }} >52.6%</Text>
                        </Card>
                    </View>
                    <Divider />
                    <View style={styles.row} >
                        <Text style={styles.propertyTitle}>Sales From Existing Customers</Text>
                        <Card style={{ borderBottomWidth:0,shadowOpacity:'100%',shadowColor:'red',  justifyContent: 'center',  width: '32%',padding:8 }}>
                            <Text style={{
                                textAlign: 'right',
                                paddingRight: 15,
                                fontSize: 14,
                                color: 'black',
                                alignItems: 'center'
                            }} >5300.00</Text>
                        </Card>
                    </View>
                    <Divider />
                    <View style={styles.row} >
                        <Text style={styles.propertyTitle}>Customer Acquisition Cost</Text>
                        <Card style={{ borderBottomWidth:0,shadowOpacity:'100%',shadowColor:'red',  justifyContent: 'center',  width: '32%',padding:8 }}>
                            <Text style={{
                                textAlign: 'right',
                                paddingRight: 15,
                                fontSize: 14,
                                color: 'black',
                                alignItems: 'center'
                            }} >23000.00</Text>
                        </Card>
                    </View>
                    <Divider />
                    <Divider />
                    <View style={styles.row} >
                        <Text style={styles.propertyTitle}>Cost per Conversion</Text>
                        <Card style={{ borderBottomWidth:0,shadowOpacity:'100%',shadowColor:'red',  justifyContent: 'center',  width: '32%',padding:8 }}>
                            <Text style={{
                                textAlign: 'right',
                                paddingRight: 15,
                                fontSize: 14,
                                color: 'black',
                                alignItems: 'center'
                            }} >24530003.00</Text>
                        </Card>
                    </View>
                    <Divider />
                    <View style={styles.row} >
                        <Text style={styles.propertyTitle}>Opportunity lost</Text>
                        <Card style={{ borderBottomWidth:0,shadowOpacity:'100%',shadowColor:'red',  justifyContent: 'center',  width: '32%',padding:8 }}>
                            <Text style={{
                                textAlign: 'right',
                                paddingRight: 15,
                                fontSize: 14,
                                alignItems: 'center', color: "#0077b3"
                            }} >52</Text>
                        </Card>
                    </View>
                    <View style={styles.row} >
                        <Text style={styles.propertyTitle}>Best sale (Customer)</Text>
                    </View>
                    <Card style={{ width: '90%',  justifyContent:'center',
                     marginLeft: '5%', margin: '1%', }}>
                    <View style={{ flexDirection: 'row',
                     padding: 10, alignItems: 'center', marginBottom: 5, backgroundColor: '#fff' }}>
                        <MaterialCommunityIcons
                            name="checkbox-blank-circle"
                            color="#099"
                            size={8}
                            style={{}}
                        />
                        <Text style={{ width: '40%', marginLeft: 10, color: 'black' }}> Emaar group</Text>
                        <Text style={{ width: '20%', fontSize: 14, textAlign: 'center' }}>5</Text>
                        <Text style={{   width: '32%', fontSize: 14, textAlign: 'right' }}>10,000.00</Text>
                    </View>
                    </Card>

                    <View style={styles.row} >
                        <Text style={styles.propertyTitle}>Top sale (Work type)</Text>
                    </View>
                    <Card style={{ width: '90%',  justifyContent:'center',
                     marginLeft: '5%', margin: '1%', }}>
                    <View style={{ flexDirection: 'row',
                     padding: 10, alignItems: 'center', marginBottom: 5, backgroundColor: '#fff' }}>
                        <MaterialCommunityIcons
                            name="checkbox-blank-circle"
                            color="#099"
                            size={8}
                            style={{}}
                        />
                        <Text style={{ width: '40%', marginLeft: 10, color: 'black' }}> Emaar group</Text>
                        <Text style={{ width: '20%', fontSize: 14, textAlign: 'center' }}>5</Text>
                        <Text style={{   width: '32%', fontSize: 14, textAlign: 'right' }}>10,000.00</Text>
                    </View>
                    </Card>
                    <View style={styles.row} >
                        <Text style={styles.propertyTitle}>Top sale (Industry)</Text>
                    </View>
                    <Card style={{ width: '90%',  justifyContent:'center',
                     marginLeft: '5%', margin: '1%', }}>
                    <View style={{ flexDirection: 'row',
                     padding: 10, alignItems: 'center', marginBottom: 5, backgroundColor: '#fff' }}>
                        <MaterialCommunityIcons
                            name="checkbox-blank-circle"
                            color="#099"
                            size={8}
                            style={{}}
                        />
                        <Text style={{ width: '40%', marginLeft: 10, color: 'black' }}> Emaar group</Text>
                        <Text style={{ width: '20%', fontSize: 14, textAlign: 'center' }}>5</Text>
                        <Text style={{   width: '32%', fontSize: 14, textAlign: 'right' }}>10,000.00</Text>
                    </View>
                    </Card>
                    <View style={styles.row} >
                        <Text style={styles.propertyTitle}>Top sale (Source)</Text>
                    </View>

                    <Card style={{ width: '90%',  justifyContent:'center',
                     marginLeft: '5%', margin: '1%', }}>
                    <View style={{ flexDirection: 'row',flex:1,
                     padding: 10, alignItems: 'center', marginBottom: 5, backgroundColor: '#fff' }}>
                        <MaterialCommunityIcons
                            name="checkbox-blank-circle"
                            color="#099"
                            size={8}
                            style={{}}
                        />
                        <Text style={{ width: '40%', marginLeft: 10, color: 'black' }}> Emaar group</Text>
                        <Text style={{ width: '20%', fontSize: 14, textAlign: 'center' }}>5</Text>
                        <Text style={{   width: '32%', fontSize: 14, textAlign: 'right' }}>10,000.00</Text>
                    </View>
                    </Card>
                    <View style={styles.row} >
                        <Text style={styles.propertyTitle}>SaleCampaign</Text>
                    </View>
                    <SaleCampaign />
                    <View style={styles.row} >
                        <Text style={styles.propertyTitle}>{years[0]} best salesman</Text>
                    </View>
                    <BestSaleman />
                    <View style={{height:200,width:200,backgroundColor:'red'}}></View>
                </ScrollView>
            </LinearGradient>
        </View>
    );
}
export default YearlyOverview;

const styles = StyleSheet.create({
    dropdownStyle: {
        backgroundColor: '#effff9',
        borderWidth: .5,
        borderRadius: 20,
    }, KeyCustomerButton: {
        alignSelf: 'flex-start',
        borderWidth: 0.3,
        backgroundColor: "#effff9",
        height: 27,
        left: 10,
        margin: '2%',
        borderRadius: 10,
        tintColor: 'white',
        width: 150
    },
    TextStyle: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#fff'
    },
    NumberStyle: {
        fontSize: 10,
        fontWeight: '100',
        color: '#fff',
    },
    photo: {
        width: "100%",
        height: 150,
        margin: 10,
        alignSelf: "center",
    },
    propertyTitle: {
        justifyContent: 'center', alignItems: 'center',
        fontSize: 14, fontWeight: 'bold', color: '#0077b3',
        width: '64%',
        marginLeft: 10,
        marginTop: 10,
        fontFamily: 'Roboto'
    },
    propertyValue: {
        textAlign: 'right',
        paddingRight: 25,
        fontSize: 14,
        color: 'black',
        width: '32%',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
        padding: 10,
    },
    bestSalesGradientView: {
        margin:2,
        padding: 10,
        flex: 1,
    }
});