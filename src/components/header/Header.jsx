import {
  NavLink,
} from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

import './header.scss';

const Header = () => (
  <div className="header">
    <div className="container d-flex">
      <nav>
        <h1><a href="/" className="logoLink">Bookstore CMS</a></h1>
        <ul>
          <li>
            <NavLink to="/books">
              BOOKS
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories">
              CATEGORIES
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="profile"><FaUser /></div>
    </div>
  </div>
);

export default Header;
