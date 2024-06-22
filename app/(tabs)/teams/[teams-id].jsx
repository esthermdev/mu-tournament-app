import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from '@rneui/base';
import { router, useLocalSearchParams } from 'expo-router';
import { useSelector } from 'react-redux';
import { selectTeamById } from '../../../features/teams/teamsSlice';
import Header from '../../../components/Header';

const RenderTeam = () => {
    const { id } = useLocalSearchParams();
    const team = useSelector(selectTeamById(id));

    return (
        <View>
            <Card>
                <Card.Title>{team.name}</Card.Title>
                <Card.Divider/>
                <Text>Team Id: {team.id}</Text>
                <Text>Ranking: {team.rank}</Text>
                <Text>Location: {team.location}</Text>
            </Card>
        </View>
        
    );
};

export default RenderTeam;

const styles = StyleSheet.create({});