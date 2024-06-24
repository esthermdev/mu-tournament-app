import { StyleSheet, Text, View } from 'react-native';
import { Stack } from 'expo-router';

const AuthLayout = () => {
	return (
		<Stack>
			<Stack.Screen 
				name='login'
				options={{
					headerShown: false
				}}
			/>
		</Stack>
	)
}

export default AuthLayout;

const styles = StyleSheet.create({})