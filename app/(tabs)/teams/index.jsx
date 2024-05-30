import { View } from 'react-native'
import React from 'react';
import Header from '../../../components/Header';
import TeamsDirectoryScreen from '../../../screens/TeamsDirectoryScreen';

const Teams	= () => {
	
	return (
		<View>
			<Header 
				title='Teams'
				backButtonStyle='hidden' 
			/>
			<TeamsDirectoryScreen />
		</View>
	);
};

export default Teams
