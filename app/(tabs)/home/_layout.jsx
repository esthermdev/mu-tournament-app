import React from 'react'
import { Stack } from 'expo-router';

const HomeLayout = () => {
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
			</Stack>
		</>
		
	)
}

export default HomeLayout;