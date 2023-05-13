import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/8PuwwOI4MOXSktHbc5Ye/books');
  const books = Object.values(response.data).flat();
  return books;
});

export const addBook = createAsyncThunk('books/addBook', async (book, { getState }) => {
  const state = getState();
  const response = await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/8PuwwOI4MOXSktHbc5Ye/books', { ...book, app_id: state.appId });
  return response.data;
});

export const removeBook = createAsyncThunk('books/removeBook', async (book) => {
  await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/8PuwwOI4MOXSktHbc5Ye/books/${book.title}`);
  return book.item_id;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => action.payload)
      .addCase(addBook.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        const index = state.findIndex((book) => book.item_id === action.payload);
        if (index !== -1) {
          state.splice(index, 1);
        }
      });
  },
});

export default booksSlice.reducer;
