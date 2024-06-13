import { StyleSheet, Text, View } from 'react-native'
import { router } from 'expo-router';
import Header from '../../../components/Header';

const Scores = () => {
    return (
        <>
            <Header 
                title='Scores'
                handlePress={() => router.back()}
                backTitle='Home'
            />
        </>
    )
};

export default Scores;

const styles = StyleSheet.create({});