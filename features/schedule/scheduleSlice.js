import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export const fetchSchedule = createAsyncThunk(
    'schedule/fetchSchedule',
    async (_, { rejectWithValue }) => {
        try {
            const querySnapshot = await getDocs(collection(db, 'schedule'));
            const data = querySnapshot.docs.map(doc => doc.data());
            return data
        } catch (error) {
            console.error('Error fetching schedule:', error);
            return rejectWithValue('Error fetching schedule: ' + error.message);
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
export const selectFullSchedule = (state) => state.schedule.scheduleArray;
