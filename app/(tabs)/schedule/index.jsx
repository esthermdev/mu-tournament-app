import React from 'react';
import { View } from 'react-native';
import Header from '../../../components/Header';
import ScheduleScreen from '../../../screens/ScheduleScreen';


const Schedule = () => {
	return (
		<View className='bg-white h-full' style={{flex: 1}}>
			<Header 
				title='Schedule'
				backButtonStyle='hidden' 
			/>
			<ScheduleScreen />
		</View>
	);
};

export default Schedule;