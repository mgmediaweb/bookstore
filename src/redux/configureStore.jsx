import { configureStore } from '@reduxjs/toolkit';
import books from './books/books';
import categories from './categories/categories';

const reducer = {
  books: books.reducer,
  categories: categories.reducer,
};

const store = configureStore({
  reducer,
});

export default store;
