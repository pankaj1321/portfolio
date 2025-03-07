import { motion } from 'framer-motion';
import { aboutData } from '../data/aboutData';
import useAnimatedCounter from '../hooks/useAnimatedCounter';

const About = () => {
  const skills = [
    { 
      name: 'MongoDB', 
      icon: 'fas fa-database', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      description: 'NoSQL database for building scalable and flexible applications'
    },
    { 
      name: 'Express.js', 
      icon: 'fas fa-server', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      description: 'Backend web application framework for Node.js'
    },
    { 
      name: 'React', 
      icon: 'fab fa-react', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      description: 'Front-end library for building interactive user interfaces'
    },
    { 
      name: 'Node.js', 
      icon: 'fab fa-node-js', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      description: 'JavaScript runtime for building server-side applications'
    },
    { 
      name: 'JavaScript', 
      icon: 'fab fa-js', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      description: 'Core programming language for web development'
    },
    { 
      name: 'HTML/CSS', 
      icon: 'fab fa-html5', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      description: 'Foundation technologies for web development'
    },
    { 
      name: 'Redux', 
      icon: 'fas fa-code-branch', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
      description: 'State management for React applications'
    },
    { 
      name: 'Tailwind CSS', 
      icon: 'fab fa-css3', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
      description: 'Utility-first CSS framework for rapid UI development'
    },
    { 
      name: 'Git', 
      icon: 'fab fa-git-alt', 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      description: 'Version control for tracking code changes'
    },
  ];

  const StatItem = ({ label, target }) => {
    const count = useAnimatedCounter(target);

    return (
      <motion.div
        className="stat-item"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ 
          y: -10, 
          scale: 1.05,
          boxShadow: "0 15px 30px rgba(180, 4, 158, 0.3)",
          transition: { type: "spring", stiffness: 400, damping: 10 } 
        }}
      >
        <h3 className="gradient-text">{count}+</h3>
        <p>{label}</p>
      </motion.div>
    );
  };

  const stats = [
    { label: 'Years Experience', target: aboutData.experience },
    { label: 'Projects Completed', target: aboutData.projectsCompleted },
    { label: 'Happy Clients', target: aboutData.happyClients },
    { label: 'Technologies', target: aboutData.technologies }
  ];

  const backgroundParagraphs = aboutData.background;

  return (
    <div className="about-skills-container">
      <section id="about" className="about">
        <div className="container">
          <motion.div
            className="about-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-title"
            >
              About <span className="gradient-text">Me</span>
            </motion.h2>
            
            <motion.p 
              className="section-subtitle highlight-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="passion-text">I'm a <span className="highlight-word">passionate</span> MERN stack developer</span> with expertise in creating beautiful, functional web applications
            </motion.p>
            
            <motion.div
              className="about-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h3>My Background</h3>
              {backgroundParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </motion.div>
          
            <motion.div
              className="stats-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <StatItem key={stat.label} label={stat.label} target={stat.target} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Decorative circles */}
        <div className="circle-decoration circle-about-1"></div>
        <div className="circle-decoration circle-about-2"></div>
      </section>

      <section id="skills" className="skills">
        <div className="container">
          <motion.div
            className="skills-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-title"
            >
              My <span className="gradient-text">Skills</span>
            </motion.h2>

            <motion.div
              className="skills-container"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    whileHover={{ 
                      y: -10, 
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 400, damping: 10 } 
                    }}
                  >
                    <div className="skill-image-container">
                      {skill.image ? (
                        <img src={skill.image} alt={skill.name} className="skill-image" />
                      ) : (
                        <i className={skill.icon}></i>
                      )}
                    </div>
                    <h4>{skill.name}</h4>
                    <p className="skill-description">{skill.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Decorative circles */}
        <div className="circle-decoration circle-skills-1"></div>
        <div className="circle-decoration circle-skills-2"></div>
      </section>
    </div>
  );
};

export default About;
