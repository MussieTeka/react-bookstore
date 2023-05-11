import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  'Fiction',
  'Nonfiction',
  'Mystery',
  'Fantasy',
];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
});

export default categoriesSlice.reducer;
