import { useEffect } from 'react';
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
            key={index}
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
      type: 'education',
      title: 'Bachelor of Science in Computer Science',
      organization: 'George Mason University',
      date: '2023 - 2027',
      description: 'Currently a 2nd-year Student with a focus on artificial intelligence, software development, and systems design. Engaged in research, hackathons, and technical projects to enhance practical skills and career readiness.'
    },
    {
      type: 'education',
      title: 'Bachelor of Science in Computer Engineering',
      organization: 'The Bells University Of Technology',
      date: '2022 - 2023',
      description: 'Completed My first year with a 5.0/5.0 CGPA, building a strong foundation in core engineering principles, programming, and problem-solving before transferring to George Mason University.'
    },
    {
      type: 'work',
      title: 'Software Engineer Fellow',
      organization: 'HeadStarter',
      date: '2024',
      description: 'Developed and deployed multiple AI-powered applications, collaborating with a team of talented fellows to design and implement innovative solutions. Gained hands-on experience in software development, project management, and leveraging AI technologies for real-world impact.'
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

        <div className="timeline-section">
          <h3>My Journey</h3>
          <Timeline events={timelineEvents} />
        </div>

        <div className="skills-section">
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <SkillBadge key={index} skill={skill} />
            ))}
          </div>
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