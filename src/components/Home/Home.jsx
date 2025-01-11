import { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import Particles from 'react-tsparticles';
// import Particles from 'tsparticles';
import { Link } from 'react-scroll';
import { loadFull } from "tsparticles";
import './Home.css';
import resumePdf from '/src/resume/Oluwatomisin_Badmus_Resume_26.pdf'

const Home = () => {
  const typedRef = useRef(null);
  const [isChanging, setIsChanging] = useState(false);
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const avatarImages = [
    '/Profile_Picture/Oluwatomisin_(1).png',
    '/Profile_Picture/Oluwatomisin_(2).png',
    '/Profile_Picture/Oluwatomisin_(3).png',
    '/Profile_Picture/Oluwatomisin_(4).png',
    '/Profile_Picture/Oluwatomisin_(5).png',
    '/Profile_Picture/Oluwatomisin_(6).png',
  ];

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Click handler to cycle through photos
  const handleAvatarClick = () => {
    setIsChanging(true);
    setTimeout(() => {
      setCurrentPhotoIndex((prevIndex) => 
        (prevIndex + 1) % avatarImages.length
      );
      setIsChanging(false);
    }, 150);
  };

  useEffect(() => {
    // avatarImages.forEach((imagePath) => {
    //     const img = new Image();
    //     img.src = imagePath;
    //   });
    
    const typed = new Typed(typedRef.current, {
      strings: [
        "Hi, I'm Oluwatomisin Badmus",
        "I'm a Full Stack Developer",
        "I Build Amazing Web Applications"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true

      
    });

    

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="home-section">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#007bff" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            links: { enable: true, distance: 150, color: "#007bff", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: "none", random: false, straight: false }
          },
          interactivity: {
            detectsOn: "window",
            events: {
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: true, mode: "push" },
              resize: true
            }
          }
        }}
      />
      
      <div className="hero-content">
        <motion.div
          className="avatar-container"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <img 
        src={avatarImages[currentPhotoIndex]}
        alt="Profile Photo"
        className="avatar"
        onClick={handleAvatarClick}
        style={{ cursor: 'pointer' }} // Makes it clear the image is clickable
      />
        </motion.div>

        <div className="text-content">
          <span ref={typedRef}></span>
          <p className="subtitle">Turning ideas into reality through code</p>
          
          <div className="cta-buttons">
            <Link to="projects" spy={true} smooth={true} duration={500}>
              <motion.button
                className="cta-button primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Projects
              </motion.button>
            </Link>
            
            <motion.a
              href= {resumePdf}
              download
              className="cta-button secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
            
            <Link to="contact" spy={true} smooth={true} duration={500}>
              <motion.button
                className="cta-button tertiary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;