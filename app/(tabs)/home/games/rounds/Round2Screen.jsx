import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Round2Screen = () => {
  return (
    <View style={styles.container}>
      <Text>Round 2 Games List</Text>
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

export default Round2Screen;
