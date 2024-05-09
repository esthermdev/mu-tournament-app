import { ActivityIndicator, Image, View, StyleSheet, ImageBackground } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';
import { images } from '../../../constants';
import Header from '../../components/Header';
import HomeButtons from '../../components/HomeButtons';

const Home = () => {
	const [isBackgroundLoaded, setBackgroundLoaded] = useState(false);

	const handleBackgroundLoad = () => {
		setBackgroundLoaded(true);
	} 

	return (
		<View>
			<Header 
				title='Home'
				backButtonStyle='hidden'
			/>
			<ImageBackground
				source={images.bgImage}
				className='h-full'
				onLoad={handleBackgroundLoad}
			>
				{!isBackgroundLoaded && <ActivityIndicator size='small' color='#999999' />}
				{isBackgroundLoaded && (
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
				)}
			</ImageBackground>
		</View>
	)
}

const styles = StyleSheet.create({
	imageContainer: {
		backgroundColor: '#241F20',
		padding: 28,
		borderRadius: 8,
		alignItems: 'center',
		margin: 20,
		borderRadius: 4,
		borderWidth: 2,
		borderColor: '#fff'
	},	
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
		gap: 10,
		paddingHorizontal: 15
	},	
	image: {
		alignItems: 'center'
	},
})


export default Home