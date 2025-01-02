import { useEffect } from 'react';
import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';
import './Contact.css';
import { use } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;


  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  useEffect(() => {
    emailjs.init({
        publicKey: PUBLIC_KEY,
        // Do not allow headless browsers
        blockHeadless: true,
        blockList: {
          // Block the suspended emails
          list: ['foo@emailjs.com', 'bar@emailjs.com'],
          // The variable contains the email address
          watchVariable: 'userEmail',
        },
        limitRate: {
          // Set the limit rate for the application
          id: 'app',
          // Allow 1 request per 10s
          throttle: 10000,
        },
      });
  }, []);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitStatus('sending');

    

    try {
        // Using EmailJS
        await emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          });
    
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 3000);
      } catch (error) {
        console.error('Error sending email:', error);
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 3000);
      }
    };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };


  return (
    <motion.form
      onSubmit={handleSubmit}
      className="contact-form"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="form-group">
        <motion.input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className={errors.name ? 'error' : ''}
          whileFocus={{ scale: 1.02 }}
        />
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>

      <div className="form-group">
        <motion.input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className={errors.email ? 'error' : ''}
          whileFocus={{ scale: 1.02 }}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>

      <div className="form-group">
        <motion.textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className={errors.message ? 'error' : ''}
          whileFocus={{ scale: 1.02 }}
        />
        {errors.message && <span className="error-message">{errors.message}</span>}
      </div>

      <motion.button
        type="submit"
        className="submit-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={submitStatus === 'sending'}
      >
        {submitStatus === 'sending' ? 'Sending...' : 'Send Message'}
      </motion.button>

      {submitStatus === 'success' && (
        <motion.div
          className="status-message success"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Message sent successfully!
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          className="status-message error"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Failed to send message. Please try again.
        </motion.div>
      )}
    </motion.form>
  );
};

const SocialIcon = ({ href, icon: Icon, label }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon"
      whileHover={{ y: -5, scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon />
      <span>{label}</span>
    </motion.a>
  );
};

const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="container"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Get In Touch</h2>
      
        <div className="contact-content">
          <div className="contact-info">
            <div className="social-links">
              <SocialIcon
                href="https://github.com/tomisin05"
                icon={FaGithub}
                label="GitHub"
              />
              <SocialIcon
                href="https://www.linkedin.com/in/badmus-oluwatomisin-"
                icon={FaLinkedin}
                label="LinkedIn"
              />
              <SocialIcon
                href="https://www.instagram.com/to.mi.si.n/profilecard/?igsh=MXVyZmlyeHFxbDNqeQ=="
                icon={FaInstagram}
                label="Instagram"
              />
            </div>

            <div className="contact-details">
              <motion.a
                href="tomisinbadmus@gmail.com"
                className="contact-item"
                whileHover={{ scale: 1.05 }}
              >
                <FaEnvelope className="contact-icon" />
                <span>tomisinbadmus@gmail.com</span>
              </motion.a>
              <motion.div
                className="contact-item"
                whileHover={{ scale: 1.05 }}
              >
                <FaMapMarkerAlt className="contact-icon" />
                <span>Fairfax, Virginia</span>
              </motion.div>
            </div>

            <div className="map-container">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99375.50195465335!2d-77.37246876073!3d38.85816852850844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64e96394b91cd%3A0x72326e785448640!2sFairfax%2C%20VA!5e0!3m2!1sen!2sus!4v1701893997149!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Fairfax, Virginia Map"
            />
            </div>
          </div>

          <ContactForm />
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;