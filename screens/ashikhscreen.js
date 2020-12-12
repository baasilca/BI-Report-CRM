import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';



const ashikhscreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button
                title="Click Here"
                onPress={() => navigation.navigate('BasilScreen')}
            />

        </View>
    )
}
export default ashikhscreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    }
})