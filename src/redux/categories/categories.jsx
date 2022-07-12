import { createSlice } from '@reduxjs/toolkit';

/* eslint no-param-reassign: ["error", { "props": false }] */

const initialState = {
  categories: '',
};

const categories = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checking: (state, action) => {
      state.categories = action.payload;
      console.log('state: ', state.categories);
    },
  },
  extraReducers: (builder) => {
    builder.addDefaultCase((state) => state);
  },
});

export const { checking } = categories.actions;
export default categories;
