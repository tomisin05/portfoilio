import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [ isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
      <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Add isOpen class to nav-links */}
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <Link 
          to="home" 
          spy={true} 
          smooth={true} 
          duration={500} 
          className="nav-item"
          onClick={() => setIsOpen(false)} // Close menu when clicking a link
        >
          Home
        </Link>
        <Link 
          to="about" 
          spy={true} 
          smooth={true} 
          duration={500} 
          className="nav-item"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link 
          to="projects" 
          spy={true} 
          smooth={true} 
          duration={500} 
          className="nav-item"
          onClick={() => setIsOpen(false)}
        >
          Projects
        </Link>
        <Link 
          to="resume" 
          spy={true} 
          smooth={true} 
          duration={500} 
          className="nav-item"
          onClick={() => setIsOpen(false)}
        >
          Resume
        </Link>
        <Link 
          to="contact" 
          spy={true} 
          smooth={true} 
          duration={500} 
          className="nav-item"
          onClick={() => setIsOpen(false)}
        >
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