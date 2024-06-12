import React from 'react';
import { FlatList, View, StyleSheet, Text, Pressable } from 'react-native';
import { Icon } from '@rneui/themed';
import { useSelector } from 'react-redux';
import Loading from '../components/Loading';
import { router } from 'expo-router';


const TeamsDirectoryScreen = () => {

	const teams = useSelector((state) => state.teams);
	
	if (teams.isLoading) {
		return <Loading />
	};

	if (teams.errMsg) {
		return (
			<View>
				<Text>{teams.errMsg}</Text>
			</View>
		);
	};

    const renderDirectoryItem = ({ item: team }) => {

        return (
			<Pressable onPress={() => router.push({
				pathname: "/teams/[teams-id]",
				params: { id: team.id }
			})}>
				<View style={styles.items}>
					<Icon
							reverse
							name='american-football-outline'
							type='ionicon'
							color='#517fa4'
					/>
					<Text>{team.name}</Text>
            	</View>
			</Pressable>
        );
    };

    return (
		<>
			<FlatList 
				data={teams.teamsArray}
				renderItem={renderDirectoryItem}
				keyExtractor={(item) => item.id}
				horizontal={false}
				numColumns={4}
				contentContainerStyle={styles.container}
			/>
		</>
    );
};

const styles = StyleSheet.create({
	container: {
		marginTop: 15,
		alignItems: 'center'
	},	
	items: {
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 5,
		marginHorizontal: 1,
		width: 90,
		height: 90
	}
})

export default TeamsDirectoryScreen;