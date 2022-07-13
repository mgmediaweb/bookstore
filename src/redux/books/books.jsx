import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import config from '../../config';

/*
const fetchUserById = createAsyncThunk(
  'books/fetchByIdStatus',
  async () => {
    const res = await fetch(`${config.apiUrl}apps/${config.apiId}/books`).then(
      (data) => data.json(),
    );
    console.log('res: ', res);
    return res;
  },
);
*/

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async () => ( // dispatch, getState
    fetch(`${config.apiUrl}/books`).then((data) => data.json())
  ),
);

// console.log('getBooks: ', getBooks);
/*
const initialState = {
  books: [],
  status: null,
};
*/

const initialState = {
  books: [
    {
      // id: 'br6bnAI4ueuoOcRkmd1cP',
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      category: 'Tragedy',
      chapter: 'Chapter 5',
      percentage: 37,
    },
    {
      // id: 'dVxxLqeVbc0lA4ULXhkOn',
      item_id: 'xFvQJna2iXrPEKEyyXZHj',
      title: 'Moby Dick',
      author: 'Herman Melville',
      category: 'Adventure fiction',
      chapter: 'Chapter 3',
      percentage: 24,
    },
  ],
  status: null,
};

const books = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      fetch(`${config.apiUrl}/books`, {
        method: 'POST',
        body: JSON.stringify(action.payload),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.text())
        .then((result) => {
          console.log('result', result);
          // Call to refresh the page
        });
    },
    deleteBook: (state, action) => {
      console.log(`${config.apiUrl}/books/${action.payload}`);

      fetch(`${config.apiUrl}apps/${config.apiId}/books/${action.payload}`, {
        method: 'POST',
        body: JSON.stringify({ item_id: action.payload }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.text())
        .then((result) => {
          console.log('result', result);
          // Call to refresh the page
        });
    },
  },
  extraReducers: {
    [getBooks.pending]: (state) => ({
      ...state,
      status: 'loading',
    }),
    [getBooks.fulfilled]: (state, action) => ({
      ...state,
      status: 'success',
      books: action.payload,
    }),
    [getBooks.rejected]: (state) => ({
      ...state,
      status: 'failed',
    }),
  },
});

/*

  extraReducers: (builder) => {
    builder.addDefaultCase((state) => state);
  },

*/

export const { addBook, deleteBook } = books.actions;
export default books;
