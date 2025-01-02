import { motion } from 'framer-motion';
import './Loading.css';

const Loading = () => {
  return (
    <div className="loading-screen">
      <motion.div
        className="loading-logo"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <span>OB</span>
      </motion.div>
      <motion.div
        className="loading-text"
        animate={{
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        Loading...
      </motion.div>
    </div>
  );
};

export default Loading;