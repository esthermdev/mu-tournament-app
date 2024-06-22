import React from 'react';
import { images } from '../constants';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button, Icon } from '@rneui/base';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBarsStaggered, faUser } from '@fortawesome/free-solid-svg-icons';
import { router, useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Header = ({ title }) => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<StatusBar />
			<View style={styles.spacer}></View>
			<View style={styles.content}>
				<TouchableOpacity style={styles.button} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
					<FontAwesomeIcon icon={faBarsStaggered} size={25} />
				</TouchableOpacity>		
				<Image 
					source={images.logoW}
					className='w-[50] h-[50]'
				/>
				<TouchableOpacity style={styles.button}>
					<FontAwesomeIcon icon={faUser} size={25} />
				</TouchableOpacity>	
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		flexDirection: 'column',
		height: 120,
		borderBottomWidth: 0.2
	},
	spacer: {
		flex: 1,
	},
	content: {
		flex: 2,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	button: {
		marginHorizontal: 20,
	},
});

export default Header;
