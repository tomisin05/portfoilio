import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';
import './About.css';

const Timeline = ({ events }) => {
  return (
    <div className="timeline">
      {events.map((event, index) => {
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
          <motion.div
            key={event.title}
            ref={ref}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="timeline-content">
              <div className="timeline-icon">
                {event.type === 'education' ? <FaGraduationCap /> : <FaBriefcase />}
              </div>
              <h3>{event.title}</h3>
              <h4>{event.organization}</h4>
              <p className="date">{event.date}</p>
              <p>{event.description}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

const SkillBadge = ({ skill }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start({ width: `${skill.level}%` });
    }
  }, [controls, inView, skill.level]);

  return (
    <div className="skill-badge">
      <div className="skill-header">
        <FaCode className="skill-icon" />
        <h4>{skill.name}</h4>
      </div>
      <div className="progress-bar" ref={ref}>
        <motion.div
          className="progress"
          initial={{ width: 0 }}
          animate={controls}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const About = () => {
    const timelineEvents = [
        {
          type: "education",
          title: "Started Computer Science Program",
          organization: "George Mason University",
          date: "Fall 2023",
          description: "Began my journey as a Computer Science major, focusing on foundational programming and algorithms."
        },
        {
          type: "hackathon",
          title: "Hackathon Winner",
          organization: "Patriot Hacks",
          date: "Fall 2023",
          description: "Won my first hackathon by designing an innovative drone prototype."
        },
        {
          type: "education",
          title: "Tutors to Teachers initiative",
          organization: "GMU College of Education and Human Development",
          date: "Fall 2023",
          description: "Engaged in research on Self-Regulated Learning, working with 3rd to 8th graders."
        },
        {
          type: "work",
          title: "Teaching Assistant",
          organization: "George Mason University CS Department",
          date: "Spring 2024",
          description: "Assisted students in CS 100, guiding them through assignments and key concepts."
        },
        {
          type: "work",
          title: "MEGL Outreach Intern",
          organization: "George Mason University Math Department",
          date: "Spring 2024",
          description: "Engaged elementary and middle school students in fun, math-centric activities to spark their interest in learning."
        },
        {
          type: "education",
          title: "Completed CodePath Intermediate Cybersecurity",
          organization: "CodePath",
          date: "Spring 2024",
          description: "Completed a 10-week program exploring digital security fundamentals and blue team techniques for threat response."
        },
        {
          type: "work",
          title: "Software Engineer Fellow",
          organization: "HeadStarter",
          date: "Summer 2024",
          description: "Developed and deployed multiple AI-powered applications, collaborating with a team of talented fellows to design and implement innovative solutions. Gained hands-on experience in software development, project management, and leveraging AI technologies for real-world impact."
        },
        {
          type: "education",
          title: "Completed CodePath Intermediate Technical Interview Prep",
          organization: "CodePath",
          date: "Summer 2024",
          description: "Enhanced my data structures and algorithms knowledge through an intensive prep class."
        },
        {
          type: "work",
          title: "Mason Math Odyssey",
          organization: "George Mason University",
          date: "Summer 2024",
          description: "Engaged 6th to 9th-grade students in an enrichment camp focused on advanced mathematical concepts."
        },
        {
          type: "work",
          title: "GMDI Debate Bootcamp",
          organization: "George Mason University",
          date: "Summer 2024",
          description: "Worked with middle school students to enhance debate skills in a competitive debate focused environment."
        },
        {
          type: "work",
          title: "Math Placement Bootcamp",
          organization: "George Mason University",
          date: "Summer 2024",
          description: "Helped incoming students prepare for placement exams with focused training on key math concepts."
        },
        {
          type: "education",
          title: "Joined CodePath x AmazonNext Program",
          organization: "CodePath x AmazonNext",
          date: "Summer 2024",
          description: "Participated in networking and professional development opportunities with Amazon."
        },
        {
          type: "Project",
          title: "AI CardCut Project",
          organization: "Me",
          date: "Summer 2024",
          description: "Built a tool for automating evidence collection and formatting for easier debate tournaments preparation."
        },
        {
          type: "education",
          title: "Completed CodePath Intermediate Web Development",
          organization: "CodePath",
          date: "Fall 2024",
          description: "Completed a 10-week program focusing on full-stack development, building responsive and interactive websites."
        },
        {
          type: "education",
          title: "Joined Honors College",
          organization: "George Mason University",
          date: "Fall 2024",
          description: "Became a member of the GMU Honors College, focusing on interdisciplinary and advanced coursework."
        },
        {
          type: "projects",
          title: "Created Wordle Clone for MARC",
          organization: "Mason Autonomy and Robotics Center",
          date: "Fall 2024",
          description: "Developed a Wordle-inspired game featuring robotics concepts, including drones, blimps, and game theory."
        },
        {
          type: "education",
          title: "AI Accessibility Research Proposal",
          organization: "George Mason University",
          date: "Fall 2024",
          description: "Submitted a research proposal on improving AI scalability and accessibility in developing countries."
        },
        {
          type: "Hackathon",
          title: "Participated in HopHacks",
          organization: "Johns Hopkins University",
          date: "Fall 2024",
          description: "Built a GDP prediction model through lstm machine learning process and implemented an ai chat bot that describes the data to you."
        },
        {
          type: "Hackathon",
          title: "Participated in Patriot Hacks",
          organization: "George Mason University",
          date: "Fall 2024",
          description: "Developed NoteStreams, a platform to streamline academic note organization."
        },
        {
          type: "hackathon",
          title: "Spoke on CodePath Panel",
          organization: "Patriot Hacks",
          date: "Fall 2024",
          description: "Shared insights on technical interview preparation and my experience as a CodePath student."
        },
        {
          type: "education",
          title: "AI Programming with Python Nanodegree Program",
          organization: "Udacity",
          date: "Fall 2024",
          description: "Developed a strong foundation in Python programming for AI, mastering libraries like NumPy, pandas, and Matplotlib for data analysis. Gained hands-on experience building and training machine learning models, including neural networks with PyTorch, and explored generative AI using Transformer networks for NLP tasks."
        },
        {
          type: "education",
          title: "Joined NSBE and ColorStack",
          organization: "George Mason University",
          date: "Fall 2024",
          description: "Joined organizations aimed at empowering Black students in STEM and tech."
        },
        {
          type: "event",
          title: "2024 Learning Multiverse Conference: AI-Enabled Immersive Technologies",
          organization: "TechConnect DC",
          date: "Fall 2024",
          description: "Attended the 2024 Learning Multiverse Conference, exploring the impact of AI and immersive technologies like AR, VR, and MR in workforce training and education. Engaged with industry leaders, researchers, and practitioners discussing the future of AI-IMTECH integration."
        }
      ];
      
      
  
  const skills = [
    { name: 'JavaScript/React', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 90 },
    { name: 'Java', level: 90 },
    { name: 'C', level: 60 },
    { name: 'SQL', level: 60 },
    { name: 'Database Management', level: 75 }
  ];


//   const [showAll, setShowAll] = useState(false);
//   const eventsToShow = 5; // Number of events to show initially

//   // Filter events based on showAll state
//   const displayedEvents = showAll 
//     ? timelineEvents 
//     : timelineEvents.slice(0, eventsToShow);

//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     threshold: 0.1,
//     triggerOnce: true
//   });

//   useEffect(() => {
//     if (inView) {
//       controls.start({ opacity: 1, y: 0 });
//     }
//   }, [controls, inView]);


  const [showMore, setShowMore] = useState(false);
  const timelineSectionRef = useRef(null); 
  const initialDisplay = 5;

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Function to handle view more/less click
  const handleViewToggle = () => {
    setShowMore(!showMore);
    
    // If we're showing less (closing), scroll to the timeline section
    if (showMore && timelineSectionRef.current) {
      timelineSectionRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);
  

  // Animation variants for timeline items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };


  return (
    <section id="about" className="about-section">
      <motion.div
        className="container"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">About Me</h2>
        <p className="intro-text">
          I'm a computer science enthusiast passionate about leveraging AI to create 
          innovative solutions and make a positive impact on the world. My journey 
          in tech has been marked by continuous learning and hands-on experience with 
          cutting-edge technologies.
        </p>

        <div className="timeline-section" ref={timelineSectionRef}>
          <h3>My Journey</h3>
          <motion.div 
            className="timeline"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {(showMore ? timelineEvents : timelineEvents.slice(0, initialDisplay))
              .map((event, index) => (
                <motion.div 
                  key={index} 
                  className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.5 }}
                >
                  <div className="timeline-content">
                    <h3>{event.title}</h3>
                    <h4>{event.organization}</h4>
                    <p className="date">{event.date}</p>
                    <p>{event.description}</p>
                  </div>
                </motion.div>
            ))}
          </motion.div>
          
          {timelineEvents.length > initialDisplay && (
            <motion.button 
              className="view-more-btn"
              onClick={handleViewToggle}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {showMore ? 'View Less' : 'View More'}
            </motion.button>
          )}
        </div>



        <motion.div
          className="fun-facts"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3>Fun Facts</h3>
          <ul>
            <li>🏆 Hackathon Champion: Won a hackathon on my birthday </li> 
            <li>🎤 Debate Enthusiast: A proud member of the GMU Debate Team.</li> <li>🤖 AI Advocate: Passionate about making AI more accessible and cost-efficient for developing countries.</li> 
            <li>🎓 Creative Educator: Engaged young minds through interactive math and debate bootcamps and outreach programs.</li> 
            <li>🌍 Global Citizen: An international student from Nigeria, embracing new cultures while staying connected to my roots.</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;



