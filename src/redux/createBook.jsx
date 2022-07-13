import { nanoid } from '@reduxjs/toolkit';

const createBook = (title, author) => ({
  item_id: nanoid(),
  title,
  author,
  category: 'Not Specificated',
});

export default createBook;
