import { View } from 'react-native'
import React from 'react';
import Header from '../../../components/Header';
import TeamsDirectoryScreen from '../../../screens/TeamsDirectoryScreen';

const Teams	= () => {
	
	return (
		<View className='bg-white h-full'>
			<Header 
				title='Teams'
				backButtonStyle='hidden' 
			/>
			<TeamsDirectoryScreen />
		</View>
	);
};

export default Teams
