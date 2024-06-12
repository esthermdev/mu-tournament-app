import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export const fetchTeams = createAsyncThunk(
    'teams/fetchTeams',
    async (_, { rejectWithValue }) => {
        try {
            const querySnapshot = await getDocs(collection(db, 'teams'));
            const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            return data;
        } catch (error) {
            console.error('Error fetching teams:', error);
            return rejectWithValue('Error fetching teams: ' + error.message);
        }
    }
);

const initialState = {
    teamsArray: [],
    isLoading: true, 
    errMsg: null
};

const teamsSlice = createSlice({
    name: 'teams',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTeams.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchTeams.fulfilled, (state, action) => {
                state.isLoading = false;
                state.errMsg = '';
                state.teamsArray = action.payload;
            })
            .addCase(fetchTeams.rejected, (state, action) => {
                state.isLoading = false;
                state.errMsg = action.error ? action.error.message : 'Fetch failed';
            })
    }
});

export const teamsReducer = teamsSlice.reducer;
export const selectAllTeams = (state) => state.teams.teamsArray;
export const selectTeamById = (id) => (state) => state.teams.teamsArray.find(team => team.id === id);