import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Round1Screen from '../../../../screens/rounds/Round1Screen';
import Round2Screen from '../../../../screens/rounds/Round2Screen';
import Round3Screen from '../../../../screens/rounds/Round3Screen';

const Tab = createMaterialTopTabNavigator();

const Day1Screen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Round 1" component={Round1Screen} />
      <Tab.Screen name="Round 2" component={Round2Screen} />
      <Tab.Screen name="Round 3" component={Round3Screen} />
    </Tab.Navigator>
  );
};

export default Day1Screen;
