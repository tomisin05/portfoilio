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
            <a href={project.siteUrl} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt />
            </a>
          </motion.div>
        </div>
      </div>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        {project.demo && project.demo.trim() !== '' && (
        <div className="project-actions">
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="visit-site-btn"
          >
            View Demo
          </a>
        </div>
        )}

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
  const [visibleProjects, setVisibleProjects] = useState(5);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });


  const projects = [
    {
      title: 'M.A.R.C.(LE)',
      description: 'A sophisticated Wordle-inspired game featuring information theory-based word guessing, real-time feedback, and multiple difficulty levels. Built with modern web technologies and advanced game mechanics.',
      image: '/projects/marcle/Marcle.png',
      github: 'https://github.com/tomisin05/MARCLE',
      demo: '/projects/marcle/demo.mp4', 
      siteUrl: 'https://marcle-7vjaa2srz-oluwatomisin-badmus-projects.vercel.app/',
      technologies: [ 'Next.js', 'TypeScript', 'MobX', 'Tailwind CSS', 'Supabase', 'Java', 'Arduino'],
      category: 'game'
    },
    {
        "title": "Multipurpose Research Drone (MPRD)",
        "description": "A versatile drone built for collecting environmental data such as air quality, temperature, and humidity. It features replaceable nose sensors for various data collection types and is designed with 3D printed parts for durability and cost-effectiveness. The project was created during the GMU 36-hour hackathon, winning the Best Startup Track award at Patriot Hacks.",
        "image": "/projects/PatriotHacks23/MPRD.jpg", 
        "github": "https://github.com/Blender-guy/Multipurpose-Research-Drone-Hackathon",
        "demo": "",
        "siteUrl": "https://devpost.com/software/multipurpose-research-drone",
        "technologies": ["3D Printing", "Arduino", "NRF24L01", "FreeCAD", "C", "KiCad"],
        "category": "hackathon"
    },      
    // {
    //   title: 'AI Image Generator',
    //   description: 'An AI-powered image generation tool using deep learning models.',
    //   image: '/projects/ai-image.png',
    //   github: 'https://github.com/username/ai-image',
    //   demo: 'https://ai-image-gen.com',
    //   siteUrl: 'https://ai-image-gen.com',
    //   technologies: ['Python', 'TensorFlow', 'Flask', 'React'],
    //   category: 'ai'
    // },
    {
        title: 'AI Image Generator',
        description: 'An AI-powered image generation tool using deep learning models.',
        image: '/projects/ai-image.png',
        github: 'https://github.com/username/ai-image',
        demo: '',
        siteUrl: 'https://ai-image-gen.com',
        technologies: ['Python', 'TensorFlow', 'Flask', 'React'],
        category: 'ai'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates.',
      image: '/projects/task-app.png',
      github: 'https://github.com/username/task-app',
      demo: '',
      siteUrl: 'https:/task-app.com',
      technologies: ['React', 'Firebase', 'Material-UI'],
      category: 'web'
    }
  ];

  const filteredProjects = filter === 'all'
  ? projects
  : projects.filter(project => project.category === filter);
 
  const displayedProjects = filteredProjects.slice(0, visibleProjects)

  const loadMore = () => { 
    setVisibleProjects(prev => prev + 5);
  };

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  // Reset visible projects when filter changes
  useEffect(() => {
    setVisibleProjects(5);
  }, [filter]);



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
          <motion.button
            className={`filter-btn ${filter === 'hackathon' ? 'active' : ''}`}
            onClick={() => setFilter('hackathon')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hackathon
          </motion.button>
        </div>

        <div className="projects-list">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {filteredProjects.length > visibleProjects && (
          <motion.button
            className="view-more-btn"
            onClick={loadMore}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View More Projects
          </motion.button>
        )}

      </motion.div>
    </section>
  );
};

export default Projects;