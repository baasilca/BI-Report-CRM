import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const BasilScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Basil Screen</Text>
            <Button
                title="click here"
                onPress={() => alert('Button Clicked')}
            />
        </View>
    )
}
export default BasilScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})