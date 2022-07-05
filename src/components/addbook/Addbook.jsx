import Button from '../button/Button';
import './addbook.scss';

const Addbook = () => (
  <div className="addbook">
    <hr />
    <h2>ADD NEW BOOK</h2>
    <form id="addBookForm">
      <div className="formGrid">
        <input id="title" placeholder="Book Title" className="inputForm" required />
        <input id="author" placeholder="Author" className="inputForm" required />
        <Button label="ADD BOOK" size="big" submit="true" />
      </div>
    </form>
  </div>
);

export default Addbook;
