import { Link } from 'react-router-dom';
import '../styles/components/Navigation.css';

function Navigation() {
  return (
    <header>
      <div className="left">
        <div className="logo">
          <Link to="/">Bookstore CMS</Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">BOOKS</Link>
            </li>
            <li>
              <Link to="/categories">CATEGORIES</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="right">
        <div className="profile">
          <img src="https://img.icons8.com/metro/26/null/guest-male.png" alt="Profile" />
        </div>
      </div>
    </header>
  );
}

export default Navigation;
