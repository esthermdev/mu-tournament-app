import { View, Text } from 'react-native';
import React from 'react'
import Header from '../../../components/Header';

const Rankings = () => {

	return (
		<View className='bg-white h-full'>
			<Header 
				title='Rankings'
				backButtonStyle='hidden' 
			/>
			<Text>Rankings</Text>
		</View>
	);
};

export default Rankings