import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Button from '../button/Button';
import './book.scss';

const Book = (props) => {
  const {
    author, category, chapter, title, percentage,
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
          <li><a href="/home" className="link">Remove</a></li>
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

Book.propTypes = {
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Book;