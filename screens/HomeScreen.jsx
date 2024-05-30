import { Image, View, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { images } from '../constants';
import HomeButtons from '../components/HomeButtons';

const HomeScreen = () => {

	return ( 
        <>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={images.logo}
                    resizeMode='cover'
                />		
            </View>
            <View style={styles.container}>
                <HomeButtons
                    title='Field Map'
                    handlePress={() => router.push('/home/fieldmap')}
                    containerStyles='w-[170] h-40 border-0.5 shadow-sm shadow-black'
                />
                <HomeButtons
                    title='Watch Live'
                    handlePress={() => router.push('https://www.youtube.com/channel/UCUY1pzGlosJcOY_7prcQRtA/videos')}
                    containerStyles='w-[170] h-40 border-0.5 shadow-sm shadow-black'
                />
            </View>					
        </>
	)
}

const styles = StyleSheet.create({
	imageContainer: {
		backgroundColor: '#241F20',
		padding: 35,
		borderRadius: 8,
		alignItems: 'center',
		marginHorizontal: 20,
        marginVertical: 15,
		borderRadius: 4,
		borderWidth: 1,
		borderColor: '#fff'
	},	
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
		gap: 8
	},	
	image: {
		alignItems: 'center'
	},
})


export default HomeScreen;