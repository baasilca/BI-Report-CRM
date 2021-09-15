import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Support = () => {
  return (
    <View style={styles.container}>
      <Text>Support Screen</Text>
    </View>
  );
};

export default Support;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
