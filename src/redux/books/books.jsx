import { createSlice } from '@reduxjs/toolkit';

/* eslint no-param-reassign: ["error", { "props": false }] */

const initialState = {
  books: [],
};

const books = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addDefaultCase((state) => state);
  },
});

export const { addBook, deleteBook } = books.actions;
export default books;
