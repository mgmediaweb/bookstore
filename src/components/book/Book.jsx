import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { deleteBook } from '../../redux/books/books';
import 'react-circular-progressbar/dist/styles.css';
import Button from '../button/Button';
import './book.scss';

const Book = (props) => {
  const dispatch = useDispatch();

  const {
    id, author, category, chapter, title, percentage,
  } = props;

  return (
    <div className="card">
      <div className="sec-info">
        <h3>{category}</h3>
        <h2>{title}</h2>
        <p><a href="/home" className="link">{author}</a></p>
        <ul className="editBar">
          <li><a href="/home" className="link">Comments</a></li>
          <li><span className="separator">|</span></li>
          <li>
            <div
              role="button"
              className="link"
              onClick={() => dispatch(deleteBook(id))}
              onKeyUp={() => dispatch(deleteBook(id))}
              tabIndex={id}
            >
              Remove
            </div>
          </li>
          <li><span className="separator">|</span></li>
          <li><a href="/home" className="link">Edit</a></li>
        </ul>
      </div>
      <div className="sec-graph">
        <CircularProgressbar
          value={percentage}
          className="graphBox"
          strokeWidth={6}
          styles={buildStyles({
            pathColor: '#0290ff',
            trailColor: 'rgba(0,0,0,0.1)',
          })}
        />
        <div>
          <h4>{`${percentage}%`}</h4>
          <p>Completed</p>
        </div>
      </div>
      <div className="sec-update">
        <h4>CURRENT CHAPTER</h4>
        <p>{chapter}</p>
        <Button label="UPDATE PROGRESS" axn={() => console.log(`${title} btn pressed`)} />
      </div>
    </div>
  );
};

Book.defaultProps = {
  chapter: 'Not Specificated',
  percentage: 0,
};

Book.propTypes = {
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  chapter: PropTypes.string,
  id: PropTypes.string.isRequired,
  percentage: PropTypes.number,
  title: PropTypes.string.isRequired,
};

export default Book;
