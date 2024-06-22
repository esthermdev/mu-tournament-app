import React from 'react';
import { StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import Header from '../../../components/Header';

export default function HomeLayout() {
	return (
	<>
		<Stack>
			<Stack.Screen 
				name='index'
				options={{ headerShown: false, headerTitle: 'Home' }}
			/>
			<Stack.Screen 
				name='fieldmap'
				options={{ headerShown: false }}
			/>
			<Stack.Screen 
				name='games'
				options={{ headerShown: false }}
			/>
		</Stack>
	</>
	);
};