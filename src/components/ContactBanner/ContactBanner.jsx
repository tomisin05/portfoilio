// src/components/ContactBanner/ContactBanner.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import './ContactBanner.css';

const ContactBanner = () => {
  return (
    <div className="contact-banner">
      <Link to="contact" spy={true} smooth={true} duration={500} className="banner-link">
        <motion.div
          className="banner-content"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <p className="contact-banner-text">Want to work together?</p>
          <span className="contact-banner-cta">Let's Connect</span>
        </motion.div>
      </Link>
    </div>
  );
};

export default ContactBanner;
