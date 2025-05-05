import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-button">Home</Link>
        <Link to="/details" className="nav-button">Details</Link>
        <Link to="/about" className="nav-button">About</Link>
      </div>
    </nav>
  );
}
