import { nanoid } from '@reduxjs/toolkit';

const createBook = (title, author) => ({
  id: nanoid(),
  title,
  author,
  category: 'Not Specificated',
  chapter: 'Not Specificated',
  percentage: 0,
});

export default createBook;
