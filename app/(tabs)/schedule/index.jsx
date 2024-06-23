import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { ListItem } from '@rneui/base';

const ScheduleScreen = () => {

	const schedule = useSelector((state) => state.schedule);
	const dayOneSchedule = schedule.scheduleArray.filter((events) => events.gameday === 1);
	const dayTwoSchedule = schedule.scheduleArray.filter((events) => events.gameday === 2);

	const [expanded, setExpanded] = useState(false);
	const [expandedTwo, setExpandedTwo] = useState(false);

	return (
        <ScrollView>
            <ListItem.Accordion
                content={
                    <ListItem.Content>
                        <ListItem.Title className='font-interbold'>Sunday, 3rd August 2024</ListItem.Title>
                    </ListItem.Content>
                }
                isExpanded={expanded}
                onPress={() => {
                    setExpanded(!expanded); 
                }}
                containerStyle={styles.accordianContainer}
            >
                {dayOneSchedule.map((event, i) => (
                    <ListItem 
                        key={i} 
                        bottomDivider 
                        containerStyle={styles.container}
                    >
                        <ListItem.Content className='flex-row'>
                            <View style={styles.time}>
                                <Text className='font-interregular text-base'>{event.startTime}</Text>
                                <Text className='font-interregular text-base text-gray-500'>{event.endTime}</Text>
                            </View>
                            <View style={styles.title}>
                                <Text className='font-intermedium text-base'>{event.title}</Text>
                            </View>
                        </ListItem.Content>
                    </ListItem>
                ))}
            </ListItem.Accordion>
            <ListItem.Accordion
                content={
                        <ListItem.Content>
                            <ListItem.Title className='font-interbold'>Saturday, 4th August 2024</ListItem.Title>
                        </ListItem.Content>
                }
                isExpanded={expandedTwo}
                onPress={() => {
                    setExpandedTwo(!expandedTwo);
                }}
                containerStyle={styles.accordianContainer}
            >	
                {dayTwoSchedule.map((event, i) => (
                    <ListItem 
                        key={i} 
                        bottomDivider 
                        containerStyle={styles.container}
                    >
                        <ListItem.Content className='flex-row'>
                            <View style={styles.time}>
                                <Text className='font-interregular text-base'>{event.startTime}</Text>
                                <Text className='font-interregular text-base text-gray-500'>{event.endTime}</Text>
                            </View>
                            <View style={styles.title}>
                                <Text className='font-intermedium text-base'>{event.title}</Text>
                            </View>
                        </ListItem.Content>
                    </ListItem>
                ))}
            </ListItem.Accordion>
            </ScrollView>
	);
};

const styles = StyleSheet.create({
	accordianContainer: {
		marginTop: 10,
        marginHorizontal: 15,
        height: 80, 
        backgroundColor: 'rgb(254 242 242)',
        borderRadius: 20
	},	
	container: {
		marginHorizontal: 5,
		marginBottom: 3,
	},	
	time: {
		flex: 1,
		alignItems: 'center',
	},
	title: {
		flex: 3,
		padding: 12,
		borderLeftWidth: 2,
		borderLeftColor: '#FF4036'
	}
});

export default ScheduleScreen;