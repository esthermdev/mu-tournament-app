import React from 'react'
import { Stack } from 'expo-router';

const InfoLayout = () => {
	return (
		<>
			<Stack>
				<Stack.Screen 
					name='index'
					options={{ headerShown: false, headerTitle: 'Info' }}
				/>
			</Stack>
		</>
		
	)
}

export default InfoLayout;