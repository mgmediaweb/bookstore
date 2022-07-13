import React, { useEffect } from 'react';
import { useSelector /* , useDispatch */ } from 'react-redux';
import Addbook from '../components/addbook/Addbook';
import Book from '../components/book/Book';
// import { getBooks } from '../redux/books/books';
import './pages.scss';

const BooksScreen = () => {
  // const dispatch = useDispatch();
  const { books, status } = useSelector((state) => state.books);
  // const books = [];

  useEffect(() => {
    // console.log(dispatch(getBooks()));
    console.log(books);
    console.log(status);
  }, []);

  return (
    <div className="screen">
      <div className="container">
        {
          books.length ? books.map((book) => (
            <Book
              author={book.author}
              category={book.category}
              chapter={book.chapter}
              id={book.item_id}
              key={book.item_id}
              title={book.title}
              percentage={book.percentage}
            />
          )) : <div className="fieldEmpty">Books not found</div>
        }
        <Addbook />
      </div>
    </div>
  );
};

export default BooksScreen;
