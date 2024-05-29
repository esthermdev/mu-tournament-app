import { View } from 'react-native';
import Header from '../../../components/Header';
import HomeScreen from '../../../screens/HomeScreen';

const Home = () => {

	return (
		<View className='bg-gray-300 h-full'>
			<Header 
				title='Home'
				backButtonStyle='hidden'
			/>
			<HomeScreen />
		</View>
	);

};


export default Home;