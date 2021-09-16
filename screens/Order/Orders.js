import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native';
import { FAB, Portal, Provider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons'
import { useGetOrderQuery } from '../../Redux/Slices/order'


const Items = ["item", "item1", "item2", "item3", "item4", "item5", "item6", "item", "item1", "item2", "item3", "item4", "item5", "item6"]



const Orders = (props) => {

    const { data, isLoading, isError } = useGetOrderQuery()
    const [Open, setOpen] = useState(false);
    const onStateChange = ({ open }) => setOpen({ open });
    const { open } = Open

    // console.log("++++++", data);
    const renderItem = ({ item }) => (
        <View style={{ padding: 20, backgroundColor: '#fff', marginVertical: 2, marginHorizontal: 10 }}>
            <Text>{item}</Text>
        </View>
    )

    return (
        <Provider>
            <Portal >
                <FAB.Group
                    open={open}
                    icon={open ? 'minus' : 'plus'}

                    actions={[
                        { icon: 'plus', label: 'add', onPress: () => props.navigation.navigate('AddOrders') },
                        {
                            icon: 'star',
                            label: 'Star',
                            onPress: () => console.log('Pressed star'),
                        },
                        {
                            icon: 'email',
                            label: 'Email',
                            onPress: () => console.log('Pressed email'),
                        },

                    ]}

                    onStateChange={onStateChange}

                />
            </Portal>
            <View style={styles.container}>
                <View style={{
                    flexDirection: 'row',
                    marginLeft: 7,
                    height: 50,
                    borderWidth: .5,
                    borderColor: 'black',
                    backgroundColor: '#fff',
                    width: '97%', marginTop: 6,
                    borderRadius: 30,
                }}>
                    <View style={{ marginLeft: 10, borderRadius: 90, justifyContent: 'center' }}><Icon.Button
                        name="md-search"
                        size={20}
                        color="#009387"
                        backgroundColor="#fff"
                    /></View>
                    <TextInput style={{
                        height: 49,
                        backgroundColor: '#fff',
                        width: '80%',
                        borderRadius: 30,
                    }}
                        placeholder="Search Orders"
                        placeholderTextColor='#009387'>
                    </TextInput>
                </View>
                <FlatList
                    style={{ marginTop: 5 }}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </Provider>
    )
}
export default Orders;

const styles = StyleSheet.create({
    container: {
        flex: 1,


    }
})

