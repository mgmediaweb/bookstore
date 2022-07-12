import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: '',
};

const categories = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checking: (state, action) => ({
      ...state,
      categories: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addDefaultCase((state) => state);
  },
});

export const { checking } = categories.actions;
export default categories;
