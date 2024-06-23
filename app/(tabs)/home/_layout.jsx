import React from 'react';
import { Stack } from 'expo-router';

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