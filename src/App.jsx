import { useState, useEffect } from 'react';
import Loading from './components/Loading/Loading';
import Navbar from './components/Navigation/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import ContactBanner from './components/ContactBanner/ContactBanner';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    // Check if user prefers dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    if (prefersDark) {
      document.body.classList.add('dark');
    }

    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : '');
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', !isDarkMode ? 'dark' : '');
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={`app ${isDarkMode ? 'dark' : ''}`}>
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Home />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <ContactBanner/>
    </div>
  );
}

export default App;
