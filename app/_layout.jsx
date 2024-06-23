import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
	
	const [fontsLoaded, error] = useFonts({
		"Outfit-Black": require("../assets/fonts/Outfit-Black.ttf"),
		"Outfit-Bold": require("../assets/fonts/Outfit-Bold.ttf"),
		"Outfit-ExtraBold": require("../assets/fonts/Outfit-ExtraBold.ttf"),
		"Outfit-ExtraLight": require("../assets/fonts/Outfit-ExtraLight.ttf"),
		"Outfit-Light": require("../assets/fonts/Outfit-Light.ttf"),
		"Outfit-Medium": require("../assets/fonts/Outfit-Medium.ttf"),
		"Outfit-Regular": require ("../assets/fonts/Outfit-Regular.ttf"),
		"Outfit-SemiBold": require("../assets/fonts/Outfit-SemiBold.ttf"),
		"Outfit-Thin": require("../assets/fonts/Outfit-Thin.ttf"),
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

	const DrawerLayout = () => {
		return (
			<Drawer
				screenOptions={{
					headerShown: false
				}}
			>
				<Drawer.Screen 
					name='index'
					options={{
						drawerItemStyle: { display: 'none' }
					}}
				/>
				<Drawer.Screen 
					name='(tabs)'
					options={{
						drawerLabel: 'Home',
					}}
				/>
				<Drawer.Screen 
					name='auth'
					options={{
						drawerLabel: 'Login',
					}}
				/>
				<Drawer.Screen 
					name='admin'
					options={{
						drawerLabel: 'Admin Portal',
					}}
				/>
				<Drawer.Screen 
					name='info'
					options={{
						drawerLabel: 'Tournament Information',
					}}
				/>
			</Drawer>
		);
	};

	return (
		<Provider store={store}>
			<StatusBar style='dark' />
			<GestureHandlerRootView>
				<DrawerLayout />
			</GestureHandlerRootView>
		</Provider>
	);
}

export default RootLayout;