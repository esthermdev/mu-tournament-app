import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BackButton from './BackButton';

const Header = ({ title, backTitle, handlePress, backButtonStyle }) => {
  return (
    <View style={styles.container}>
      <BackButton backTitle={backTitle} handlePress={handlePress} backButtonStyle={backButtonStyle}/>
      <Text className='text-primary-100 font-interextrabold text-4xl' style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DB3228',
    alignItems: 'left',
    justifyContent: 'flex-end',
    paddingLeft: 15,
    paddingBottom: 8,
    height: 140
  },
});

export default Header;
