import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    try {
        const res = await axios.get('http://localhost:3001/products');
        return res.data;
    } catch (error) {
        throw error; // Throw an error to be caught in the rejectWithValue callback
    }
});

const initialState = {
    loading: false,
    data: [],
    error: ''
}
const productSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // Corrected from state.data
            });
    },
});


export default productSlice.reducer;