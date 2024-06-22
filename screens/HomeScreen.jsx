import { View, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import HomeButtons from '../components/HomeButtons';
import CustomButton from '../components/CustomButton';

const HomeScreen = () => {

	return ( 
        <>
            <View style={styles.container}>
                <HomeButtons
                    title='My Games'
                    handlePress={() => router.push('/home/games')}
                    buttonColor='bg-orange-500'
                    iconType='ionicon'
                    iconName='heart'
                />
                <HomeButtons
                    title='Report Scores'
                    handlePress={() => router.push('/home/scores')}
                    buttonColor='bg-lime-500'
                    iconType='ionicon'
                    iconName='heart'
                />
                <HomeButtons
                    title='Field Map'
                    handlePress={() => router.push('/home/fieldmap')}
                    buttonColor='bg-lime-500'
                    iconType='ionicon'
                    iconName='heart'
                />
                <HomeButtons
                    title='Watch Live'
                    handlePress={() => router.push('https://www.youtube.com/channel/UCUY1pzGlosJcOY_7prcQRtA/videos')}
                    buttonColor='bg-secondary'
                    iconType='ionicon'
                    iconName='heart'
                />
                <HomeButtons
                    title='Watch Live'
                    handlePress={() => router.push('https://www.youtube.com/channel/UCUY1pzGlosJcOY_7prcQRtA/videos')}
                    buttonColor='bg-blue-600'
                    iconType='ionicon'
                    iconName='heart'
                />
            </View>					
        </>
	)
}

const styles = StyleSheet.create({	
	container: {
        display: 'flex',
        flexWrap: 'wrap',
		flexDirection: 'row',
        marginTop: 25,
        justifyContent: 'center',
		gap: 20
	},
})


export default HomeScreen;