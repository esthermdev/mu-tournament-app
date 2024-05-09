import { View, Text, Animated, TouchableWithoutFeedback, StyleSheet, ScrollView } from 'react-native';
import { Icon, ListItem } from '@rneui/base';
import React, { useState } from 'react'
import Header from '../../components/Header';
import { SCHEDULE } from '../../shared/schedule';
import { ListItemChevron } from '@rneui/base/dist/ListItem/ListItem.Chevron';
import { router } from 'expo-router';

const Schedule = () => {
	const [expanded, setExpanded] = useState(false);
	const [expandedTwo, setExpandedTwo] = useState(false);
	const [dayOneSchedule, setdayOneSchedule] = useState(SCHEDULE.filter((schedule) => schedule.gameday === 1));
	const [dayTwoSchedule, setdayTwoSchedule] = useState(SCHEDULE.filter((schedule) => schedule.gameday === 2));

	return (
		<View style={{flex: 1}}>
			<Header 
				title='Schedule'
				backButtonStyle='hidden' 
			/>
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
							<ListItemChevron />
						</ListItem>
					))}
				</ListItem.Accordion>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	accordianContainer: {
		margin: 5,
		borderBottomWidth: 1,
		borderBottomColor: 'gray'
	},	
	container: {
		marginHorizontal: 5,
		marginBottom: 3
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
})

export default Schedule