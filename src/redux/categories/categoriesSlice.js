import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Under construction',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    // No action required for categories
  },
});

export const { actions } = categoriesSlice;

export default categoriesSlice.reducer;
