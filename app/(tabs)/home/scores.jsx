import { StyleSheet, Text, View } from 'react-native'
import { router } from 'expo-router';
import Header from '../../../components/Header';
import withAuth from '../../../hoc/withAuth';

const Scores = () => {
    return (
        <>
            <Header 
                title='Scores'
                handlePress={() => router.back()}
                backTitle='Home'
            />
            <Text>Scores Screen</Text>
        </>
    )
};

export default withAuth(Scores, 'user');
