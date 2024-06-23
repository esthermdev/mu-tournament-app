import { View, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import HomeButtons from '../../../components/HomeButtons';
import { icons } from '../../../constants';

const HomeScreen = () => {

	return ( 
		<View style={styles.container}>
			<HomeButtons
				title='My Games'
				handlePress={() => router.push('/home/games')}
				buttonColor='bg-orange-500'
				icon={icons.frisbee}
			/>
			<HomeButtons
				title='Report Scores'
				handlePress={() => router.push('/home/scores')}
				buttonColor='bg-lime-500'
			/>
			<HomeButtons
				title='Watch Live'
				handlePress={() => router.push('https://www.youtube.com/channel/UCUY1pzGlosJcOY_7prcQRtA/videos')}
				buttonColor='bg-secondary'
				icon={icons.video}
			/>
			<HomeButtons
				title='Field Map'
				handlePress={() => router.push('/home/fieldmap')}
				buttonColor='bg-lime-500'
				icon={icons.map}
			/>
			<HomeButtons
				title='Medic'
				handlePress={() => router.push('https://www.youtube.com/channel/UCUY1pzGlosJcOY_7prcQRtA/videos')}
				buttonColor='bg-blue-600'
			/>
		</View>					
	)
}

const styles = StyleSheet.create({	
	container: {
		justifyContent: 'space-between',
		width: 'auto',
        flexWrap: 'wrap',
		flexDirection: 'row',
        margin: 25,
		gap: 20,
	},

})


export default HomeScreen;