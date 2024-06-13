import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
	
	const [fontsLoaded, error] = useFonts({
		"Inter-Thin": require("../assets/fonts/Inter-Thin.ttf"),
		"Inter-ExtraLight": require("../assets/fonts/Inter-ExtraLight.ttf"),
		"Inter-Light": require("../assets/fonts/Inter-Light.ttf"),
		"Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
		"Inter-Medium": require("../assets/fonts/Inter-Medium.ttf"),
		"Inter-SemiBold": require("../assets/fonts/Inter-SemiBold.ttf"),
		"Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
		"Inter-ExtraBold": require("../assets/fonts/Inter-ExtraBold.ttf"),
		"Inter-Black": require("../assets/fonts/Inter-Black.ttf"),
	});
  
	useEffect(() => {
		if (error) throw error;
	
		if (fontsLoaded) {
		SplashScreen.hideAsync();
		}
	}, [fontsLoaded, error]);
  
	if (!fontsLoaded && !error) {
		return null;
	};

	return (
		<Provider store={store}>
			<Stack>
				<Stack.Screen name='index' options={{ headerShown: false, headerBackVisible: false }} />
				<Stack.Screen name='(tabs)' options={{ headerShown: false, headerBackVisible: false }} />
			</Stack>
		</Provider>
		
	);
}

export default RootLayout;