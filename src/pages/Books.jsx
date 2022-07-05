import Card from '../components/card/Card';
import './pages.scss';

const BooksScreen = () => {
  const books = [
    {
      author: 'Suzaine Collins',
      category: 'Action',
      chapter: 'Chapter 17',
      id: 1,
      percentage: 56,
      title: 'The Hunger Games',
    },
    {
      author: 'Frank Herbert',
      category: 'Science Fiction',
      chapter: 'Chapter 3: "A Lesson Learned"',
      id: 2,
      percentage: 32,
      title: 'Dune',
    },
  ];

  return (
    <div className="screen">
      <div className="container">
        {
          books.map((book) => (
            <Card
              author={book.author}
              category={book.category}
              chapter={book.chapter}
              key={book.id}
              title={book.title}
              percentage={book.percentage}
            />
          ))
        }
      </div>
    </div>
  );
};

export default BooksScreen;
