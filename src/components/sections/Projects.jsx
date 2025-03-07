import { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'MERN E-Commerce Platform',
      description: 'A full-featured online store with shopping cart, user authentication, payment processing, and admin dashboard',
      category: 'fullstack',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com'
    },
    {
      id: 2,
      title: 'Real-time Chat Application',
      description: 'Instant messaging platform with real-time notifications, user presence, and multimedia sharing capabilities',
      category: 'backend',
      image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200',
      technologies: ['React', 'Socket.io', 'MongoDB', 'Express', 'JWT'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com'
    },
    {
      id: 3,
      title: 'Task Management System',
      description: 'A productivity app for managing tasks with drag-and-drop functionality, team collaboration, and progress tracking',
      category: 'frontend',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200',
      technologies: ['React', 'MongoDB', 'Express', 'Node.js', 'Tailwind CSS'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com'
    },
    {
      id: 4,
      title: 'Blog & Content Platform',
      description: 'Full-featured blogging platform with rich text editing, image uploads, comments, and user authentication',
      category: 'fullstack',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200',
      technologies: ['React', 'MongoDB', 'Express', 'Node.js', 'Cloudinary'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com'
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with real-time data visualization and engagement metrics',
      category: 'frontend',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200',
      technologies: ['React', 'D3.js', 'MongoDB', 'Express', 'Node.js'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com'
    },
    {
      id: 6,
      title: 'MERN Portfolio Website',
      description: 'Interactive portfolio website built with the MERN stack featuring animations, contact form, and admin panel',
      category: 'fullstack',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200',
      technologies: ['React', 'MongoDB', 'Express', 'Node.js', 'Framer Motion'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com'
    },
  ];
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'fullstack', name: 'Full Stack' }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="projects-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My <span className="gradient-text">Projects</span>
          </motion.h2>
          
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Check out some of my recent work
          </motion.p>
          
          <motion.div
            className="project-filters"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {categories.map(category => (
              <motion.button
                key={category.id}
                className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                onClick={() => setFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>
          
          <motion.div
            className="project-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index + 0.4, duration: 0.5 }}
                whileHover={{
                  y: -15,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-links">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-globe"></i>
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative circles */}
      <div className="circle-decoration circle-projects-1"></div>
      <div className="circle-decoration circle-projects-2"></div>
    </section>
  );
};

export default Projects;
