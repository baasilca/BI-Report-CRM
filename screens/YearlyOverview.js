import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, FlatList, Image, Alert } from 'react-native';
// import SelectDropdown from './../Components/SelectDropdown';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Divider, Card, IconButton } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { useGetYearlyOverviewQuery } from '../Redux/Slices/yearlyOverview'
import SwitchSelector from 'react-native-switch-selector';
import { WebView } from 'react-native-webview';

const currentYear = (new Date()).getFullYear();
const years = Array.from(new Array(3), (val, index) => currentYear - index);
const mapYears = years.reverse();
const sort = mapYears.map((item, index) => (
    { label: item, value: item }
)
)

const YearlyOverview = () => {
    const [selectYear, setselectYear] = useState(currentYear)
    const [appLoaded, setappLoaded] = useState(false)
    const { data, isLoading, isFetching, isError } = useGetYearlyOverviewQuery({ year: selectYear })

    const {
        account,
        customer,
        opportunity_closed_lost,
        opportunity,
        sales_from_existing_customer,
        top_industry_sale,
        top_work_sale,
        top_source_sale,
        campaign_wise_sale,
        top_sale_brought_salesman,
        top_profit_salesman,
        top_total_sale_company,
        cost_per_conversion,
        opportunity_conversion_ratio,
        customer_acquisition_cost,
        year_sale_chart,
        year_opportunity_chart,
        year_invoice_collection_chart
    } = data && data.data || ";"


//   Alert.alert(",.",JSON.stringify(data))
  console.log("edrftgyh",data);
    useEffect(() => {
        if (data && data.data) {
            setappLoaded(true)
        }
    }, [data])

    const SaleCampaign = () => {
        const renderItem = ({ item }) => (
         
            <Card style={{
                width: '95%', justifyContent: 'center',alignSelf:'center',
                margin: '.5%',
            }}>
                <View style={{
                    flexDirection: 'row',
                    padding: 10, alignItems: 'center', marginBottom: 5, backgroundColor: '#fff'
                }}>
                    <MaterialCommunityIcons
                        name="checkbox-blank-circle"
                        color="#099"
                        size={8}
                        style={{}}
                    />
                <Text style={{ width: '40%', marginLeft: 10, color: 'black', }}>{item.c_name}</Text>
                <Text style={{ justifyContent: 'center', alignItems: 'center', width: '22%', fontSize: 14, textAlign: 'center',color:'#136086' }}>{item.count}</Text>
                <Text style={{ justifyContent: 'center', alignItems: 'center', width: '28%', fontSize: 14, textAlign: 'right' }}>{item.amount}</Text>
            
            </View>
             </Card>  
         
        )
        return (
               
                    <FlatList
                        data={campaign_wise_sale}
                        renderItem={renderItem}
                        keyExtractor={item => item.id} />
                
        )
    }


    const BestSaleman = () => {
        return (
            <View style={{ flex: 1, marginBottom: 0 }}>
                <Card style={{
                    width: '95%', justifyContent: 'center',
                    alignSelf:'center',
                }}>
                    <LinearGradient
                        colors={["#fff", "#fff"]}
                        style={styles.bestSalesGradientView}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 1 }} >
                        <View style={{ flexDirection: "row", marginTop: 5 }}>
                            <Image style={{ width: 20, height: 20, alignSelf: 'center' }} source={{ uri: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png' }} />
                            <Text style={{ marginLeft: 5, width: "100%", fontWeight: 'bold', color: "black" }} numberOfLines={1}>TestappMob admin</Text>
                        </View>
                        <View style={{ flexDirection: 'row', padding: 10 }}>
                            <Text style={{ justifyContent: 'center', alignItems: 'center', width: '50%', }}>Sale</Text>
                            <Text style={{ justifyContent: 'center', alignItems: 'center', fontSize: 14, width: '47%', textAlign: 'right' }}>{top_sale_brought_salesman}</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                            <Text style={{ justifyContent: 'center', alignItems: 'center', width: '50%', }}>Profit(GP)</Text>
                            <Text style={{ justifyContent: 'center', alignItems: 'center', fontSize: 14, width: '47%', textAlign: 'right' }}>{top_profit_salesman}</Text>
                        </View>
                    </LinearGradient>
                </Card>
            </View>
        )
    }
    return (
        <View style={{ flex: 1, }}>
            <LinearGradient
                colors={["#fff9e6", '#fff9e6']}
                style={{}}
                start={{ x: 1, y: 1 }}
                end={{ x: 1, y: 1 }} >

                <SwitchSelector
                    initial={2}
                    onPress={years => setselectYear(years)}
                    textColor={'#fff'}
                    backgroundColor={'#136086'}
                    selectedColor={'#136086'}
                    buttonColor={'#fff'}
                    hasPadding
                    options={sort}
                    style={{ margin: '2%', width: '90%', alignSelf: "center" }}
                />



                <ScrollView style={{ margin: 5, }}>
                    <View style={styles.row} >
                        <Text style={styles.propertyTitle}>Total account</Text>
                        <Card style={{ borderBottomWidth: 0, shadowOpacity: '100%', justifyContent: 'center', width: '32%', padding: 8 }}>
                            <Text style={{
                                textAlign: 'right',
                                paddingRight: 15,
                                fontSize: 14,
                                color: 'black',
                                alignItems: 'center'
                            }} > {account} </Text>
                        </Card>
                    </View>
                    <Divider />
                    <View style={styles.row} >
                        <Text style={styles.propertyTitle}>New customers</Text>
                        <Card style={{ borderBottomWidth: 0, shadowOpacity: '100%', justifyContent: 'center', width: '32%', padding: 8 }}>
                            <Text style={{
                                textAlign: 'right',
                                paddingRight: 15,
                                fontSize: 14,
                                color: 'black',
                                alignItems: 'center'
                            }} >{customer}</Text>
                        </Card>
                    </View>
                    <Divider />
                    <View style={styles.row} >
                        <Text style={styles.propertyTitle}>Total opportunity</Text>
                        <Card style={{ borderBottomWidth: 0, shadowOpacity: '100%', justifyContent: 'center', width: '32%', padding: 8 }}>
                            <Text style={{
                                textAlign: 'right',
                                paddingRight: 15,
                                fontSize: 14,
                                color: 'black',
                                alignItems: 'center'
                            }} >{opportunity&&opportunity.opportunity}</Text>
                        </Card>
                    </View>
                    <Divider />
                    <View style={styles.row} >
                        <Text style={styles.propertyTitle}>Opportunity conversion ratio</Text>
                        <Card style={{ borderBottomWidth: 0, shadowOpacity: '100%', justifyContent: 'center', width: '32%', padding: 8 }}>
                            <Text style={{
                                textAlign: 'right',
                                paddingRight: 15,
                                fontSize: 14,
                                color: 'black',
                                alignItems: 'center'
                            }} >{opportunity_conversion_ratio}</Text>
                        </Card>
                    </View>
                    <Divider />
                    <View style={styles.row} >
                        <Text style={styles.propertyTitle}>Sales From existing customers</Text>
                        <Card style={{ borderBottomWidth: 0, shadowOpacity: '100%', justifyContent: 'center', width: '32%', padding: 8 }}>
                            <Text style={{
                                textAlign: 'right',
                                paddingRight: 15,
                                fontSize: 14,
                                color: 'black',
                                alignItems: 'center'
                            }} >{sales_from_existing_customer&&sales_from_existing_customer.AMOUNT}</Text>
                        </Card>
                    </View>
                    <Divider />
                    <View style={styles.row} >
                        <Text style={styles.propertyTitle}>Customer acquisition cost</Text>
                        <Card style={{ borderBottomWidth: 0, shadowOpacity: '100%', justifyContent: 'center', width: '32%', padding: 8 }}>
                            <Text style={{
                                textAlign: 'right',
                                paddingRight: 15,
                                fontSize: 14,
                                color: 'black',
                                alignItems: 'center'
                            }} >{customer_acquisition_cost}</Text>
                        </Card>
                    </View>
                    <Divider />
                    <Divider />
                    <View style={styles.row} >
                        <Text style={styles.propertyTitle}>Cost per conversion</Text>
                        <Card style={{ borderBottomWidth: 0, shadowOpacity: '100%', justifyContent: 'center', width: '32%', padding: 8 }}>
                            <Text style={{
                                textAlign: 'right',
                                paddingRight: 15,
                                fontSize: 14,
                                color: 'black',
                                alignItems: 'center'
                            }} >{cost_per_conversion}</Text>
                        </Card>
                    </View>
                    <Divider />
                    <View style={styles.row} >
                        <Text style={styles.propertyTitle}>Opportunity lost</Text>
                        <Card style={{ borderBottomWidth: 0, shadowOpacity: '100%', justifyContent: 'center', width: '32%', padding: 8 }}>
                            <Text style={{
                                textAlign: 'right',
                                paddingRight: 15,
                                fontSize: 14,
                                alignItems: 'center', color: "#0077b3"
                            }} >{opportunity_closed_lost}</Text>
                        </Card>
                    </View>
                    <View style={styles.row} >
                        <Text style={styles.propertyTitle}>Best sale (customer)</Text>
                    </View>
                    <Card style={styles.cardViewStyle}>
                        <View style={{
                            flexDirection: 'row',
                            padding: 10, alignItems: 'center', marginBottom: 5, backgroundColor: '#fff'
                        }}>
                            <MaterialCommunityIcons
                                name="checkbox-blank-circle"
                                color="#099"
                                size={8}
                                style={{}}
                            />
                            <Text style={{ width: '40%', marginLeft: 10, color: 'black' }}>{top_total_sale_company&&top_total_sale_company.AccountName}</Text>
                            <Text style={{ width: '20%', fontSize: 14, textAlign: 'center',color:'#136086' }}></Text>
                            <Text style={{ width: '32%', fontSize: 14, textAlign: 'right' }}>{top_total_sale_company&&top_total_sale_company.amount}</Text>
                        </View>
                    </Card>

                    <View style={styles.row} >
                        <Text style={styles.propertyTitle}>Top sale (work type)</Text>
                    </View>
                    <Card style={styles.cardViewStyle}>
                        <View style={{
                            flexDirection: 'row',
                            padding: 10, alignItems: 'center', marginBottom: 5, backgroundColor: '#fff'
                        }}>
                            <MaterialCommunityIcons
                                name="checkbox-blank-circle"
                                color="#099"
                                size={8}
                                style={{}}
                            />
                            <Text style={{ width: '40%', marginLeft: 10, color: 'black' }}>{top_work_sale&&top_work_sale.WorkCategory}</Text>
                            <Text style={{ width: '20%', fontSize: 14, textAlign: 'center',color:'#136086' }}>{top_work_sale&&top_work_sale.sale_count}</Text>
                            <Text style={{ width: '32%', fontSize: 14, textAlign: 'right' }}>{top_work_sale&&top_work_sale.amount}</Text>
                        </View>
                    </Card>
                    <View style={styles.row} >
                        <Text style={styles.propertyTitle}>Top sale (industry)</Text>
                    </View>
                    <Card style={styles.cardViewStyle}>
                        <View style={{
                            flexDirection: 'row',
                            padding: 10, alignItems: 'center', marginBottom: 5, backgroundColor: '#fff'
                        }}>
                            <MaterialCommunityIcons
                                name="checkbox-blank-circle"
                                color="#099"
                                size={8}
                                style={{}}
                            />
                            <Text style={{ width: '40%', marginLeft: 10, color: 'black' }}>{top_industry_sale&&top_industry_sale.AccountIndustry}</Text>
                            <Text style={{ width: '20%', fontSize: 14, textAlign: 'center',color:'#136086' }}>{top_industry_sale&&top_industry_sale.sale_count}</Text>
                            <Text style={{ width: '32%', fontSize: 14, textAlign: 'right' }}>{top_industry_sale&&top_industry_sale.amount}</Text>
                        </View>
                    </Card>
                    <View style={styles.row} >
                        <Text style={styles.propertyTitle}>Top sale (source)</Text>
                    </View>

                    <Card style={styles.cardViewStyle}>
                        <View style={{
                            flexDirection: 'row', flex: 1,
                            padding: 10, alignItems: 'center', marginBottom: 5, backgroundColor: '#fff'
                        }}>
                            <MaterialCommunityIcons
                                name="checkbox-blank-circle"
                                color="#099"
                                size={8}
                                style={{}}
                            />
                            <Text style={{ width: '40%', marginLeft: 10, color: 'black' }}>{top_source_sale&&top_source_sale.OpertunitySource}</Text>
                            <Text style={{ width: '20%', fontSize: 14, textAlign: 'center',color:'#136086' }}>{top_source_sale&&top_source_sale.sale_count}</Text>
                            <Text style={{ width: '32%', fontSize: 14, textAlign: 'right' }}>{top_source_sale&&top_source_sale.amount}</Text>
                        </View>
                    </Card>
                    <View style={styles.row} >
                        <Text style={styles.propertyTitle}>Sale campaign</Text>
                    </View>
                    <SaleCampaign />
                    <View style={styles.row} >
                        <Text style={styles.propertyTitle}>{selectYear} Best salesman</Text>
                    </View>
                    <BestSaleman />
                    <View style={styles.row} >
                        <Text style={styles.propertyTitle}>{selectYear} Sale</Text>
                    </View>
                    {year_sale_chart &&
              <View style={{ marginTop: -15,marginBottom:-15 }}>
                <Card style={{ height: 160, margin: 15,width:'95%',alignSelf:'center', backgroundColor: "#fff", padding: 5, borderRadius: 5,}}>
                  <WebView style={{ marginTop: 5 }} source={{ html: year_sale_chart }} />
                </Card>
              </View>
            }
            <View style={styles.row} >
                        <Text style={styles.propertyTitle}>{selectYear} Opprtunity</Text>
                    </View>
                {year_opportunity_chart &&
              <View style={{ marginTop: -15,marginBottom:-15 }}>
              <Card style={{ height: 160, margin: 15,width:'95%', backgroundColor: "#fff",alignSelf:'center',padding: 5, borderRadius: 5, }}>
              <WebView style={{ marginTop: 5 }} source={{ html: year_opportunity_chart }} />
            </Card>
          </View>
        }
          <View style={styles.row} >
                        <Text style={styles.propertyTitle}>{selectYear} Invoice-Collection</Text>
                    </View>     
                    {year_invoice_collection_chart &&
              <View style={{ marginTop: -15,marginBottom:60 }}>
            <Card style={{ height: 160, margin: 15,width:'95%', backgroundColor: "#fff",alignSelf:'center',padding: 5, borderRadius: 5, }}>
                  <WebView style={{ marginTop: 5 }} source={{ html: year_invoice_collection_chart }} />
                </Card>
              </View>
            }
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
        width: '68%',
        // marginLeft: 10,
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
        margin: 2,
        padding: 10,
        flex: 1,
    },
cardViewStyle:{
    width: '95%', justifyContent: 'center',
   alignSelf:'center'
}

});