import { StyleSheet, Text, View, Button } from 'react-native'
import { router } from 'expo-router';
import Header from '../components/Header';

const GameScreen = () => {

    return (
        <>
            <View>
                <Button
                    title="Day 1"
                    onPress={() => router.push('/home/games/day1')}
                />
                <Button
                    title="Day 2"
                    onPress={() => router.push('/home/games/day2')}
                />
            </View>
        </>
    )
};

export default GameScreen;

const styles = StyleSheet.create({});