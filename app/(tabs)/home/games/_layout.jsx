import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Round1Screen from './rounds/Round1Screen';
import Round2Screen from './rounds/Round2Screen';
import Round3Screen from './rounds/Round3Screen';
import Round4Screen from './rounds/Round4Screen';
import Round5Screen from './rounds/Round5Screen';
import Round6Screen from './rounds/Round6Screen';

const GameScreen = () => {
    const Tab = createMaterialTopTabNavigator();

    return (
		<Tab.Navigator>
			<Tab.Screen name="R1" component={Round1Screen} />
			<Tab.Screen name="R2" component={Round2Screen} />
			<Tab.Screen name="R3" component={Round3Screen} />
			<Tab.Screen name="R4" component={Round4Screen} />
			<Tab.Screen name="R5" component={Round5Screen} />
			<Tab.Screen name="R6" component={Round6Screen} />
		</Tab.Navigator>
    );
};

export default GameScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F3F2F2',
    },
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
