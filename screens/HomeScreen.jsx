import { View, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import HomeButtons from '../components/HomeButtons';
import CustomButton from '../components/CustomButton';

const HomeScreen = () => {

	return ( 
        <>
            <View style={styles.container}>
                <HomeButtons
                    title='Games'
                    handlePress={() => router.push('/home/games')}
                />
                <HomeButtons
                    title='Scores'
                    handlePress={() => router.push('/home/scores')}
                />
                <HomeButtons
                    title='Field Map'
                    handlePress={() => router.push('/home/fieldmap')}
                />
                <HomeButtons
                    title='Watch Live'
                    handlePress={() => router.push('https://www.youtube.com/channel/UCUY1pzGlosJcOY_7prcQRtA/videos')}
                />
                <CustomButton 
                    title='Login'
                    containerStyles='w-4/5 mt-24'
                    handlePress={() => router.push('home/login')}
                />
                <Text className='font-interregular' >Login to use more features</Text>
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