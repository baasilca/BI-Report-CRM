import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FAB, Portal, Provider } from 'react-native-paper';



export default function TimeSheet(props) {

    const [Open, setOpen] = useState(false);
    const onStateChange = ({ open }) => setOpen({ open });
    const { open } = Open

    return (
        <Provider>
            <Portal>
                <FAB.Group
                    open={open}
                    icon={open ? 'minus' : 'plus'}
                    actions={[
                        { icon: 'plus', label: 'add',onPress: () => props.navigation.navigate('AddTimeSheet') },
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
                <Text>TimeSheet_Screen</Text>
                <FAB
                    style={{ position: 'absolute', margin: 20, right: 10, bottom: 10, color: '#009387' }}
                    small
                    icon="plus"
                    onPress={() => props.navigation.navigate('Profile')}
                />
            </View></Provider>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

});