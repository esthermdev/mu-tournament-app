import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Round1Screen = () => {
  return (
    <View style={styles.container}>
      <Text>Round 1 Games List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Round1Screen;
