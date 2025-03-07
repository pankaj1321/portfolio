import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ResponsiveProvider, useResponsive } from './components/ResponsiveProvider';

// Separate NavigationBar component for better organization
const NavigationBar = ({ activeSection, handleNavLinkClick, isMenuOpen, toggleMenu, closeMenu }) => {
  const { isMobile } = useResponsive();
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <motion.div 
          className="logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#home" onClick={() => handleNavLinkClick('home')}>
            <span className="gradient-text">JD</span>
            <span className="logo-text">DevPortfolio</span>
          </a>
        </motion.div>

        <nav className="desktop-nav">
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1, delayChildren: 0.3 }}
          >
            {['home', 'about', 'projects', 'contact'].map((item, index) => (
              <motion.li 
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
              >
                <a 
                  href={`#${item}`} 
                  className={activeSection === item ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick(item);
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </nav>

        <div className="mobile-nav-toggle">
          <button 
            className={`menu-button ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <ul>
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <a 
                    href={`#${item}`} 
                    className={activeSection === item ? 'active' : ''}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavLinkClick(item);
                    }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mobile-menu-footer">
              <div className="mobile-social-links">
                <a href="https://github.com/pankaj1321" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/pankaj-kumar-7b1079248/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
              <p className="mobile-menu-email">
                <a href="mailto:your.email@example.com">your.email@example.com</a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  const handleNavLinkClick = (sectionId) => {
    closeMenu();
    setActiveSection(sectionId);
    
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ResponsiveProvider>
      <div className="app">
        <NavigationBar 
          activeSection={activeSection}
          handleNavLinkClick={handleNavLinkClick}
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          closeMenu={closeMenu}
        />

        <main>
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <Footer />
        </main>
      </div>
    </ResponsiveProvider>
  );
}

export default App;