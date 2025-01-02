import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaSun, FaMoon } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">
        <span>OB</span>
      </div>
      <div className="nav-links">
        <Link to="home" spy={true} smooth={true} duration={500} className="nav-item">
          Home
        </Link>
        <Link to="about" spy={true} smooth={true} duration={500} className="nav-item">
          About
        </Link>
        <Link to="projects" spy={true} smooth={true} duration={500} className="nav-item">
          Projects
        </Link>
        <Link to="resume" spy={true} smooth={true} duration={500} className="nav-item">
          Resume
        </Link>
        <Link to="contact" spy={true} smooth={true} duration={500} className="nav-item">
          Contact
        </Link>
        <button onClick={toggleTheme} className="theme-toggle">
          {isDarkMode ? <FaSun className="theme-icon" /> : <FaMoon className="theme-icon" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;