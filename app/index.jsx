import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { Image, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton'
import { useDispatch } from 'react-redux';
import { fetchSchedule } from '../features/schedule/scheduleSlice';
import { fetchTeams } from '../features/teams/teamsSlice';

export default function App() {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchSchedule());
		dispatch(fetchTeams());
	}, [dispatch]);

	return (
		<SafeAreaView className='bg-black h-full'>
			<StatusBar backgroundColor='#241F20' style='light'/>
			<ScrollView>
				<View className='w-full justify-center items-center min-h-[85vh] px-4'>
					<Image 
						source={images.logo}
						className='w-[150px] h-[104px]'
						resizeMode='contain'
					/>
					<Image 
						source={images.cards}
						className='max-w-[380px] w-full h-[300px]'
						resizeMode='contain'
					/>
					<View className='relative mt-5'>
						<Text className='text-2xl text-primary font-interextrabold text-center'>
							Welcome to 
							<Text className='text-secondary'>{' '}Vacationland{' '}</Text> 
							2024
						</Text>
					</View>
					<Text className='text-xl text-gray-50 font-interregular mt-7 text-center'>Enjoy one of the best tournaments of the summer in Maine!</Text>
					<CustomButton
						title="Continue"
						handlePress={() => router.push('/home')}
						containerStyles='w-full mt-7'
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
