import React from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import { Icon } from '@rneui/themed';
import { useSelector } from 'react-redux';


const TeamsDirectoryScreen = () => {

	const teams = useSelector((state) => state.teams) 

    const renderDirectoryItem = ({ item: team }) => {
        return (
            <View style={styles.items}>
				<Icon
					reverse
					name='american-football-outline'
					type='ionicon'
					color='#517fa4'
				/>
                <Text>{team.name}</Text>
            </View>
        );
    };

    return (
        <FlatList 
            data={teams.teamsArray}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
			contentContainerStyle={styles.container}
        />
    );
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginTop: 15,
		alignItems: 'center',
		justifyContent: 'center'
	},	
	items: {
		alignItems: 'center',
		justifyContent: 'center',
		margin: 1,
		width: 120,
		height: 150
	}
})

export default TeamsDirectoryScreen;