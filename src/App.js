import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/header/Header';
import BooksScreen from './pages/Books';
import CategoriesScreen from './pages/Categories';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/books" element={<BooksScreen />} />
          <Route exact path="/categories" element={<CategoriesScreen />} />
          <Route index element={<BooksScreen />} />
          <Route
            path="*"
            element={
              <div><h2>404 Page not found</h2></div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
