import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';

export const fetchTeams = createAsyncThunk(
    'teams/fetchTeams',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(baseUrl + 'teams');
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

export const selectAllTeams = (state) => {
    return state.teams.teamsArray;
}

export const selectTeamById = (id) => (state) => {
    return state.teams.teamsArray.find(
        (team) => team.id === parseInt(id)
    );
};