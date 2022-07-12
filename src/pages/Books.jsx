import { useSelector } from 'react-redux';
import Addbook from '../components/addbook/Addbook';
import Book from '../components/book/Book';
import './pages.scss';

const BooksScreen = () => {
  const books = useSelector((state) => state.books.books);

  return (
    <div className="screen">
      <div className="container">
        {
          books.length ? books.map((book) => (
            <Book
              author={book.author}
              category={book.category}
              chapter={book.chapter}
              id={book.id}
              key={book.id}
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
