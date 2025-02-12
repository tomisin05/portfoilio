// import { useEffect } from 'react';
// import { useState } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { FaDownload, FaBriefcase, FaGraduationCap, FaCertificate } from 'react-icons/fa';
// import './Resume.css';
// import { use } from 'react';

// const ResumeSection = ({ title, items, icon }) => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     threshold: 0.1,
//     triggerOnce: true,
//   });

//   const Icon = icon;

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 20 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.5 }}
//       className="resume-section"
//     >
//       <div className="section-header">
//         <Icon className="section-icon" />
//         <h3>{title}</h3>
//       </div>
//       <div className="section-content">
//         {items.map((item, index) => (
//           <motion.div
//             key={index}
//             className="resume-item"
//             initial={{ opacity: 0, x: -20 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//           >
//             <h4>{item.title}</h4>
//             <h5>{item.organization}</h5>
//             <p className="date">{item.date}</p>
//             <ul>
//               {item.description.map((point, idx) => (
//                 <li key={idx}>{point}</li>
//               ))}
//             </ul>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// const Resume = () => {
//   const [activeTab, setActiveTab] = useState('experience');
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     threshold: 0.1,
//     triggerOnce: true,
//   });

//   useEffect(() => {
//     if (inView) {
//       controls.start({ opacity: 1, y: 0 });
//     }
//   }, [controls, inView]);

//   const experience = [
//     {
//       title: 'Senior Software Engineer',
//       organization: 'Tech Company ABC',
//       date: '2022 - Present',
//       description: [
//         'Led development of microservices architecture',
//         'Implemented CI/CD pipelines',
//         'Mentored junior developers'
//       ]
//     },
//     {
//       title: 'Software Developer',
//       organization: 'StartUp XYZ',
//       date: '2020 - 2022',
//       description: [
//         'Developed full-stack web applications',
//         'Optimized database performance',
//         'Collaborated with cross-functional teams'
//       ]
//     }
//   ];

//   const education = [
//     {
//       title: 'Master of Science in Software Engineering',
//       organization: 'University ABC',
//       date: '2018 - 2020',
//       description: [
//         'Specialized in Cloud Computing',
//         'Published research paper on AI applications',
//         'GPA: 3.9/4.0'
//       ]
//     },
//     {
//       title: 'Bachelor of Science in Computer Science',
//       organization: 'University XYZ',
//       date: '2014 - 2018',
//       description: [
//         'First Class Honours',
//         'President of Computer Science Society',
//         'Won Best Final Year Project Award'
//       ]
//     }
//   ];

//   const certifications = [
//     {
//       title: 'AWS Solutions Architect',
//       organization: 'Amazon Web Services',
//       date: '2023',
//       description: [
//         'Expertise in cloud architecture',
//         'Developed scalable solutions',
//         'Implemented security best practices'
//       ]
//     },
//     {
//       title: 'Google Cloud Professional',
//       organization: 'Google',
//       date: '2022',
//       description: [
//         'Cloud infrastructure management',
//         'Data engineering expertise',
//         'DevOps practices'
//       ]
//     }
//   ];

//   return (
//     <section id="resume" className="resume-section-container">
//       <motion.div
//         className="container"
//         ref={ref}
//         initial={{ opacity: 0, y: 50 }}
//         animate={controls}
//         transition={{ duration: 0.5 }}
//       >
//         <h2 className="section-title">Resume</h2>

//         <motion.div
//           className="download-cv"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <a href="/resume.pdf" download className="download-button">
//             <FaDownload className="download-icon" />
//             Download CV
//           </a>
//         </motion.div>

//         <div className="resume-tabs">
//           <motion.button
//             className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`}
//             onClick={() => setActiveTab('experience')}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Experience
//           </motion.button>
//           <motion.button
//             className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
//             onClick={() => setActiveTab('education')}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Education
//           </motion.button>
//           <motion.button
//             className={`tab-button ${activeTab === 'certifications' ? 'active' : ''}`}
//             onClick={() => setActiveTab('certifications')}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Certifications
//           </motion.button>
//         </div>

//         <div className="resume-content">
//           {activeTab === 'experience' && (
//             <ResumeSection
//               title="Professional Experience"
//               items={experience}
//               icon={FaBriefcase}
//             />
//           )}
//           {activeTab === 'education' && (
//             <ResumeSection
//               title="Education"
//               items={education}
//               icon={FaGraduationCap}
//             />
//           )}
//           {activeTab === 'certifications' && (
//             <ResumeSection
//               title="Certifications"
//               items={certifications}
//               icon={FaCertificate}
//             />
//           )}
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Resume;

import { useEffect } from 'react';
import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import resumePdf from '/src/resume/Oluwatomisin_Badmus_Resume_26.pdf'
import { FaDownload, FaBriefcase, FaGraduationCap, FaCertificate } from 'react-icons/fa';
import './Resume.css';

const ResumeSection = ({ title, items, icon }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const Icon = icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="resume-section"
    >
      <div className="section-header">
        <Icon className="section-icon" />
        <h3>{title}</h3>
      </div>
      <div className="section-content">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="resume-item"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h4>{item.title}</h4>
            <h5>{item.organization}</h5>
            <p className="date">{item.date}</p>
            <ul>
              {item.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Resume = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  // Update the experience array
const experience = [
    {
      title: 'Mason Experimental Geometry Lab (MEGL) Outreach Intern',
      organization: 'Mathematics Department',
      date: 'January 2024 – Present',
      description: [
        'Orchestrate educational initiatives for 700+ K-8 students, developing 5 new STEM activities and refining 10 existing ones, resulting in a 25% increase in student engagement and comprehension of geometric concepts',
        'Developed and implemented "Bubbles" activity, effectively explaining complex volume and surface area concepts to 100+ students, resulting in a 30% increase in quiz scores and 90% positive feedback from participants'
      ]
    },
    {
      title: 'Software Engineering Fellow',
      organization: 'Headstarter',
      date: 'July 2024 – Aug 2024',
      description: [
        'Engineered 5 AI-powered applications and APIs using Nextjs, React, OpenAI, Pinecone, and Stripe API, achieving 98% user satisfaction rate and 50+ active users within the first month of deployment',
        'Led a team of 3 engineering fellows in developing and deploying 5 projects using MVC design patterns, leading to a 30% reduction in development time and a 40% decrease in bug reports due to improved code maintainability'
      ]
    },
    {
      title: 'Undergraduate Teaching Assistant',
      organization: 'Computer Science Department',
      date: 'January 2024 – Present',
      description: [
        'Elevated learning experience for 100+ students by developing supplementary materials, leading review sessions, and offering personalized support, resulting in a 15% improvement in average class performance',
        'Resolve 50+ student queries weekly via Piazza and email with an average response time of 2 hours, maintaining a 95% satisfaction rate and contributing to a 20% reduction in office hour wait times'
      ]
    }
  ];
  
  // Update the education array
  const education = [
    {
      title: 'Bachelor of Science in Computer Science',
      organization: 'George Mason University',
      date: 'Expected Graduation: December 2026',
      description: [
        'GPA: 3.94/4.0',
        'Relevant Coursework: Data Structures and Algorithms, Object Oriented Programming, Systems Programming,  Deep Learning, Artificial Intelligence, Linear Algebra, Discrete Mathematics, Calculus I, II, III',
      ]
    }
  ];
  
  // Update the projects array
  const projects = [
    {
      title: 'Portraitify',
      organization: 'React, Firebase, Tailwind CSS, Vite, Stripe, Fal AI, JZIP',
      date: 'Jan. 2025 – Feb. 2025',
      description: [
        'Architected and deployed a full-stack AI portrait generation platform using React, Firebase, and Stripe, implementing a credit-based system with real-time transaction processing and secure user authentication',
        'Engineered a portrait generation pipeline with custom styling options, integrating AI APIs and cloud storage for seamless delivery of high-quality professional portraits while maintaining responsive performance across devices'
      ]
    },
    {
      title: 'EcoFlow',
      organization: 'React, Firebase, Tailwind CSS, Google Text-to-Speech, Gemini AI, Git',
      date: 'Jan. 2025 – Feb. 2025',
      description: [
        'Implemented a secure cloud infrastructure with Firebase Storage and Firestore for real-time data sync, featuring role-based access, automated speech-to-text, and efficient tournament flow management with instant updates',
        'Engineered a debate management platform with flow collaboration, voice-based RFD processing, and AI-powered feedback via Gemini API, reducing tournament preparation time by 50% and increasing user engagement by 30%'
      ]
    },
    {
      title: 'StockSmart AI',
      organization: 'React, Firebase, Google Gemini AI, Tailwind CSS',
      date: 'Jan. 2025 – Jan. 2025',
      description: [
        'Developed an inventory and recipe management system using React and Firebase, with real-time stock monitoring and AI recipe recommendations, reducing food waste by 20% and increasing user recipe engagement by 60%',
        'Built a scalable, secure, and user-friendly platform with advanced filtering, nutritional analysis, and seamless integration with smart kitchen appliances, ensuring optimized inventory control'
      ]
    }
  ];
  

  return (
    <section id="resume" className="resume-section-container">
      <motion.div
        className="container"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Resume</h2>

        <motion.div
          className="download-cv"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href= {resumePdf} download className="download-button">
            <FaDownload className="download-icon" />
            Download Resume
          </a>
        </motion.div>

        <div className="resume-tabs">
          <motion.button
            className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Experience
          </motion.button>
          <motion.button
            className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Education
          </motion.button>
          <motion.button
            className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Projects
          </motion.button>
        </div>

        <div className="resume-content">
          {activeTab === 'experience' && (
            <ResumeSection
              title="Professional Experience"
              items={experience}
              icon={FaBriefcase}
            />
          )}
          {activeTab === 'education' && (
            <ResumeSection
              title="Education"
              items={education}
              icon={FaGraduationCap}
            />
          )}
          {activeTab === 'projects' && (
            <ResumeSection
              title="Projects"
              items={projects}
              icon={FaCertificate}
            />
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
