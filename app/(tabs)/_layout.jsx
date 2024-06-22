import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import Header from '../../components/Header';

const TabsLayout = () => {
  	return (
		<Tabs
			screenOptions={{
				header: () => (<Header />),
				tabBarShowLabel: true,
				tabBarLabelStyle: {
					fontFamily: 'Inter-SemiBold',
					fontSize: 11
				},
				tabBarActiveTintColor: '#FF4036',
				tabBarInactiveTintColor: '#F3F2F2',
				tabBarStyle: {
					backgroundColor: '#241F20',
				},
			}}
		>
			<Tabs.Screen 
				name='home'
				options={{
					title: 'Home',
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							raised
							name='home'
							size={25}
							color={color}
							focused={focused}
						/>
					)
				}}
			/>
			<Tabs.Screen 
				name='schedule'
				options={{
					title: 'Schedule',
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							raised
							name='calendar-outline'
							size={25}
							color={color}
							focused={focused}
						/>
					),
				}}
			/>
			<Tabs.Screen 
				name='teams'
				options={{
					title: 'Teams',
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							raised
							name='people-sharp'
							size={25}
							color={color}
							focused={focused}
						/>
					),
				}}
			/>
		</Tabs>
  	)
}

export default TabsLayout