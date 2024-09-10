// src/features/employersSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import {server_url} from "../../config";


// Define the async thunk for fetching employers
export const fetchEmployers = createAsyncThunk(
  'employers/fetchEmployers',
  async () => {
    const response = await axios.get(`${server_url}/rt_employers`);
    return response.data; // Assuming response.data is the array of employer names
  }
);

const employersSlice = createSlice({
  name: 'employers',
  initialState: {
    employers: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEmployers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.employers = action.payload;
      })
      .addCase(fetchEmployers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default employersSlice.reducer;