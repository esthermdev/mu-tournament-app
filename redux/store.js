import { configureStore } from '@reduxjs/toolkit';
import { scheduleReducer } from '../features/schedule/scheduleSlice';
import { teamsReducer } from '../features/teams/teamsSlice';
import { authReducer } from '../features/users/authSlice';

export const store = configureStore({
    reducer: {
        schedule: scheduleReducer,
        teams: teamsReducer,
        auth: authReducer,
    }
})