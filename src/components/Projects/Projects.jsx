import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const ProjectCard = ({ project }) => {
    const truncateDescription = (text, maxLength = 150) => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + '...';
      };

  return (
    <motion.div
      className="project-card"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="project-image">
        <img    
            src={project.image} 
            alt={project.title} 
            onError={(e) => {
                e.target.onerror = null; 
                e.target.src = '/projects/fallback.png'; 
              }}
            
            />
        <div className="project-overlay">
          <motion.div
            className="project-links"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt />
            </a>
          </motion.div>
        </div>
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{truncateDescription(project.description)}</p>
        <div className="project-actions">
          <a 
            href={project.siteUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="visit-site-btn"
          >
            Visit Site
          </a>
        </div>


        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('all');
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

  const projects = [
    {
      title: 'M.A.R.C.(LE) - AI Word Game',
      description: 'A sophisticated Wordle-inspired game featuring information theory-based word guessing, real-time feedback, and multiple difficulty levels. Built with modern web technologies and advanced game mechanics.',
      image: '/projects/Marcle.png',
      github: 'https://github.com/tomisin05/MARCLE',
      demo: '/projects/demo.mp4', 
      siteUrl: 'https://marcle-7vjaa2srz-oluwatomisin-badmus-projects.vercel.app/',
      technologies: [ 'Next.js', 'TypeScript', 'MobX', 'Tailwind CSS', 'Supabase', 'Java', 'Arduino'],
      category: 'game'
    },
    {
      title: 'AI Image Generator',
      description: 'An AI-powered image generation tool using deep learning models.',
      image: '/projects/ai-image.png',
      github: 'https://github.com/username/ai-image',
      demo: 'https://ai-image-gen.com',
      siteUrl: 'https://ai-image-gen.com',
      technologies: ['Python', 'TensorFlow', 'Flask', 'React'],
      category: 'ai'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates.',
      image: '/projects/task-app.png',
      github: 'https://github.com/username/task-app',
      demo: 'https://task-app-demo.com',
      siteUrl: 'https:/task-app.com',
      technologies: ['React', 'Firebase', 'Material-UI'],
      category: 'web'
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects-section">
      <motion.div
        className="container"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">My Projects</h2>
        <div className="filters">
          <motion.button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All
          </motion.button>
          <motion.button
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Web Development
          </motion.button>
          <motion.button
            className={`filter-btn ${filter === 'ai' ? 'active' : ''}`}
            onClick={() => setFilter('ai')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            AI Projects
          </motion.button>
          <motion.button
            className={`filter-btn ${filter === 'game' ? 'active' : ''}`}
            onClick={() => setFilter('game')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Game Development
          </motion.button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;