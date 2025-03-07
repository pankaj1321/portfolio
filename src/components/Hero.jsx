import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-grid">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              I am a <span className="gradient-text">Professional</span><br />
              <span className="gradient-text">Full Stack</span> Developer
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              I create modern, responsive websites and web applications 
              with cutting-edge technologies and beautiful user interfaces.
              Let's work together to bring your vision to life.
            </motion.p>
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <a href="#contact" className="primary-btn">
                <i className="fas fa-paper-plane"></i> Contact Me
              </a>
              <a href="#projects" className="secondary-btn">
                <i className="fas fa-eye"></i> View My Work
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="image-wrapper">
              <div className="circle-bg"></div>
              <img src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Code on Screen" />
            </div>
            
            <div className="decorative-circles">
              <div className="circle circle-1"></div>
              <div className="circle circle-2"></div>
              <div className="circle circle-3"></div>
              <div className="circle circle-4"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
