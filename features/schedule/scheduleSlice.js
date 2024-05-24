import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';

export const fetchSchedule = createAsyncThunk(
    'schedule/fetchSchedule',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(baseUrl + 'schedule');
            if (!response.ok) {
                console.error('Server responded with:', response.status);
                return rejectWithValue('Unable to fetch, status: ' + response.status);
            }
            const data = await response.json();
            console.log('Fetched data:', data);
            return data;
        } catch (error) {
            console.error('Network request failed:', error);
            return rejectWithValue('Network request failed: ' + error.message);
        }
    }
);

const initialState = {
    scheduleArray: [],
    isLoading: true, 
    errMsg: null
};

const scheduleSlice = createSlice({
    name: 'schedule',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSchedule.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchSchedule.fulfilled, (state, action) => {
                state.isLoading = false;
                state.errMsg = '';
                state.scheduleArray = action.payload;
            })
            .addCase(fetchSchedule.rejected, (state, action) => {
                state.isLoading = false;
                state.errMsg = action.error ? action.error.message : 'Fetch failed';
            })
    }
});

export const scheduleReducer = scheduleSlice.reducer;

export const selectFullSchedule = (state) => {
    return state.schedule.scheduleArray;
}