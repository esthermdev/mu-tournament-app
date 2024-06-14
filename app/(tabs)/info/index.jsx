import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../../components/Header';

const Info = () => {
	
	return (
		<View className='bg-white h-full'>
			<Header 
				title='Information'
				backButtonStyle='hidden'
			/>
			<Text>Info</Text>
		</View>
	);
};

export default Info