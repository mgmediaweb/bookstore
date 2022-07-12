import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';
import createBook from '../../redux/createBook';
import Button from '../button/Button';
import './addbook.scss';

const Addbook = () => {
  const dispatch = useDispatch();

  const newBook = (e) => {
    e.preventDefault();
    const { target } = e;
    const title = target.title.value;
    const author = target.author.value;
    dispatch(addBook(createBook(title, author)));
    /* Cleaning the form */
    target.title.value = '';
    target.author.value = '';
  };

  return (
    <div className="addbook">
      <hr />
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={newBook}>
        <div className="formGrid">
          <input
            name="title"
            placeholder="Book Title"
            className="inputForm"
            autoComplete="off"
            required
          />
          <input
            name="author"
            placeholder="Author"
            className="inputForm"
            autoComplete="off"
            required
          />
          <Button label="ADD BOOK" size="big" submit="true" />
        </div>
      </form>
    </div>
  );
};

export default Addbook;
