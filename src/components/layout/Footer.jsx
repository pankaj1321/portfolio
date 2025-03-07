import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/Footer.css'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png', 
      url: 'https://github.com/pankaj1321',
    },
    { 
      name: 'LinkedIn', 
      icon: 'https://cdn-icons-png.flaticon.com/512/174/174857.png', 
      url: 'https://www.linkedin.com/in/pankaj-kumar-7b1079248/',
    },
    { 
      name: 'Twitter', 
      icon: 'https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png', 
      url: 'https://twitter.com',
    },
    { 
      name: 'Instagram', 
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png', 
      url: 'https://instagram.com',
    }
  ];
  
  const quickLinks = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '#contact' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-logo"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="logo">
              <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="footer-tagline">Building the web, one line at a time.</p>
          </motion.div>
          
          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="footer-section-title">Quick Links</h3>
            <ul className="quick-links-list flex flex-wrap justify-around quick-links-responsive">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  className="quick-link-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index + 0.2, duration: 0.4 }}
                >
                  <a href={link.path} className="footer-link">
                    <i className="fas fa-chevron-right"></i>
                    <span className="link-text">{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            className="footer-social"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h3 className="footer-section-title connect-title">Stay <span className="gradient-text">Connected</span></h3>
            <p className="connect-subtitle">Let's create something amazing together!</p>
            <div className="social-links-wrapper">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  className="social-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index + 0.4, duration: 0.3 }}
                >
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-link"
                    title={link.name}
                    aria-label={`Visit ${link.name}`}
                  >
                    <img 
                      src={link.icon}
                      alt={link.name}
                      className="social-image"
                      width="28"
                      height="28"
                    />
                    <span className="social-name">{link.name}</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p className="footer-copyright">&copy; {currentYear} - All Rights Reserved</p>
          <p className="footer-design">Designed with <i className="fas fa-heart"></i> and React</p>
        </motion.div>
      </div>
      
      {/* Decorative circles */}
      <div className="circle-decoration circle-footer-1"></div>
      <div className="circle-decoration circle-footer-2"></div>
    </footer>
  );
};

export default Footer;

// Add the following CSS to your stylesheet to make the footer responsive

/* filepath: /e:/web development/portfolio/src/styles/Footer.css */
