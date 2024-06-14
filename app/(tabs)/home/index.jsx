import { View } from 'react-native';
import Header from '../../../components/Header';
import HomeScreen from '../../../screens/HomeScreen';

const Home = () => {

	return (
		<View className='bg-white h-full'>
			<Header 
				title='Home'
				backButtonHidden='hidden'
			/>
			<HomeScreen />
		</View>
	);

};


export default Home;