import { createAction, createReducer } from '@reduxjs/toolkit';
import { connectAPI } from '../connectionApi';

const initialState = {
  books: [],
  status: null,
};

export const addBook = createAction('books/add');
export const deleteBook = createAction('books/delete');

export const books = createReducer(initialState, (builder) => {
  builder
    .addCase(addBook, (state, action) => {
      connectAPI('add', action.payload);
    })
    .addCase(deleteBook, (state, action) => {
      connectAPI('delete', action.payload);
    });
});
