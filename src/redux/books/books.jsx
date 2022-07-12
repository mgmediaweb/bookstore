import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      id: 'br6bnAI4ueuoOcRkmd1cP',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      category: 'Tragedy',
      chapter: 'Chapter 5',
      percentage: 37,
    },
    {
      id: 'dVxxLqeVbc0lA4ULXhkOn',
      title: 'Moby Dick',
      author: 'Herman Melville',
      category: 'Adventure fiction',
      chapter: 'Chapter 3',
      percentage: 24,
    },
  ],
};

const books = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.id !== action.payload),
    }),
  },
  extraReducers: (builder) => {
    builder.addDefaultCase((state) => state);
  },
});

export const { addBook, deleteBook } = books.actions;
export default books;
