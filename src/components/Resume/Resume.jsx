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
import resumePdf from '/src/resume/Oluwatomisin_Badmus_Resume.pdf'
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

  const experience = [
    {
      title: 'Outreach Intern',
      organization: 'Mason Experimental Geometry Lab (MEGL)',
      date: 'January 2024 – Present',
      description: [
        'Spearhead educational initiatives for 300+ K-8 students, developing 5 new STEM activities and refining 10 existing ones, resulting in a 25% increase in student engagement and comprehension of geometric concepts.',
        'Developed and implemented “Bubbles” activity, effectively explaining complex volume and surface area concepts to 100+ students, resulting in a 30% increase in quiz scores and 90% positive feedback from participants.'
      ]
    },
    {
      title: 'Software Engineering Fellow',
      organization: 'Headstarter',
      date: 'July 2024 – August 2024',
      description: [
        'Engineered 5 AI-powered applications and APIs using Next.js, React, OpenAI, Pinecone, and Stripe API, achieving 98% user satisfaction rate and 50+ active users within the first month of deployment.',
        'Led a team of 3 engineering fellows in developing and deploying 5 projects using MVC design patterns, leading to a 30% reduction in development time and improved code maintainability.',
        'Coached by Amazon, Bloomberg, and Capital One engineers on Agile, CI/CD, Git, and microservice patterns.'
      ]
    },
    {
      title: 'Undergraduate Teaching Assistant',
      organization: 'Computer Science Department, George Mason University',
      date: 'January 2024 – Present',
      description: [
        'Enhanced learning experience for 100+ students by developing supplementary materials, leading review sessions, and offering personalized support, resulting in a 15% improvement in average class performance.',
        'Resolved 50+ student queries weekly via Piazza and email with an average response time of 2 hours, maintaining a 95% satisfaction rate and contributing to a 20% reduction in office hour wait times.'
      ]
    }
  ];

  const education = [
    {
      title: 'Bachelor of Science in Computer Science',
      organization: 'George Mason University',
      date: 'Expected Graduation: May 2027',
      description: [
        'GPA: 3.94/4.0',
        'Relevant Coursework: Data Structures and Algorithms, Object Oriented Programming, Deep Learning, Artificial Intelligence, Linear Algebra, Discrete Mathematics, Calculus I, II, III.'
      ]
    }
  ];

  const projects = [
    {
      title: 'AI Chatbot',
      organization: 'Independent Project',
      date: 'August 2024',
      description: [
        'Developed an AI-powered customer support chatbot using Next.js and the Anthropic Claude 3 Haiku API, implementing dynamic, intelligent responses with advanced Generative AI models.',
        'Deployed the chatbot to AWS EC2 servers, ensuring scalability and reliability in a cloud environment.',
        'Leveraged AWS Bedrock API for LLM responses, enhancing the chatbot’s ability to handle complex queries.'
      ]
    },
    {
      title: 'AI Flashcards',
      organization: 'Independent Project',
      date: 'August 2024',
      description: [
        'Developed a SaaS platform using Next.js and React that integrates with OpenAI to generate AI-powered flashcards, enhancing users’ study routines through dynamically created content.',
        'Implemented secure user authentication and management with Clerk and leveraged Firebase Firestore for real-time data storage, ensuring seamless access to personalized flashcard collections.',
        'Integrated Stripe for robust payment processing, enabling subscription management and monetization options.'
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
