import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.jpg';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggle = () => setIsOpen(prev => !prev);
  const close = () => setIsOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/" onClick={close}>
          <img src={logo} alt="Provictoire Research Hub" height="40" className="me-2" />
          Provictoire Research Hub
        </Link>
        <button
          className={`navbar-toggler ms-auto${isOpen ? '' : ' collapsed'}`}
          type="button"
          onClick={toggle}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse${isOpen ? ' show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className={`nav-link${location.pathname === '/' ? ' active' : ''}`} to="/" onClick={close}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link${location.pathname === '/about' ? ' active' : ''}`} to="/about" onClick={close}>About</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link${location.pathname === '/people' ? ' active' : ''}`} to="/people" onClick={close}>People</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link${location.pathname === '/news' ? ' active' : ''}`} to="/news" onClick={close}>News & Programs</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link${location.pathname === '/resources' ? ' active' : ''}`} to="/resources" onClick={close}>Research</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link${location.pathname === '/contact' ? ' active' : ''}`} to="/contact" onClick={close}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
