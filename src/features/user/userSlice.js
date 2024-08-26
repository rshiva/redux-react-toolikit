
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios  from 'axios';


// Create an async thunk for fetching users
//this automatically create lifecycle action types,they are pending, fulfilled, rejected
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data.map((user) => user);
});

// Create a slice for users
export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        loading: false,
        users: [],
        error: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
                state.error = '';
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.users = [];
                state.error = action.error.message;
            });
    },
});

export default  usersSlice.reducer