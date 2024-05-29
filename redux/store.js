import { configureStore } from '@reduxjs/toolkit';
import { scheduleReducer } from '../features/schedule/scheduleSlice';
import { teamsReducer } from '../features/teams/teamsSlice';

export const store = configureStore({
    reducer: {
        schedule: scheduleReducer,
        teams: teamsReducer
    }
})