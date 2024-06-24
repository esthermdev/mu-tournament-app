import { StyleSheet, Text, View } from 'react-native';
import { Stack } from 'expo-router';

const AdminLayout = () => {
    return (
        <Stack>
            <Stack.Screen name='addTeam' />
            <Stack.Screen name='addPlayer' />
        </Stack>
    )
}

export default AdminLayout

const styles = StyleSheet.create({})