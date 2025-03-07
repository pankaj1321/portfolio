import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });
    
    // EmailJS service, template and user IDs
    // You'll need to replace these with your actual IDs from EmailJS dashboard
    const serviceId = 'service_318uffl'; // Replace with your service ID
    const templateId = 'template_iepnvmm'; // Replace with your template ID
    const publicKey = 'NUNBSN2_sHg-QitBw'; // Replace with your public key
    
    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setIsSubmitting(false);
        setSubmitStatus({ 
          success: true, 
          message: 'Your message has been sent successfully! I will get back to you soon.' 
        });
        
        // Reset form after delay
        setTimeout(() => {
          setFormData({
            user_name: '',
            user_email: '',
            message: ''
          });
          setSubmitStatus({ success: true, message: '' });
        }, 5000);
      })
      .catch((error) => {
        console.error('Failed to send email:', error.text);
        setIsSubmitting(false);
        setSubmitStatus({ 
          success: false, 
          message: 'Failed to send message. Please try again or contact me directly via email.' 
        });
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.h2>
          
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
          </motion.p>
          
          <div className="contact-grid">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="section-title"><span className="gradient-text">Let's Connect</span></h3>
              <p className="section-subtitle">
                I'm always open to new opportunities, interesting projects, and creative collaborations.
                Feel free to reach out through any of the channels below.
              </p>
              
              <div className="contact-simple">
                <p>
                  <a href="mailto:pankaj1321kumar@gmail.com" className="social-link">
                    <img 
                      src="https://cdn-icons-png.flaticon.com/512/281/281769.png" 
                      alt="Email" 
                      className="social-image" 
                    />
                    <span className="contact-label">pankaj1321kumar@gmail.com</span>
                  </a>
                </p>
                <p>
                  <a href="https://www.linkedin.com/in/pankaj-kumar-7b1079248/" target="_blank" rel="noopener noreferrer" className="social-link">
                    <img 
                      src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
                      alt="LinkedIn" 
                      className="social-image" 
                    />
                    <span className="contact-label">LinkedIn</span>
                  </a>
                </p>
                <p>
                  <a href="https://github.com/pankaj1321" target="_blank" rel="noopener noreferrer" className="social-link">
                    <img 
                      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
                      alt="GitHub" 
                      className="social-image" 
                    />
                    <span className="contact-label">GitHub</span>
                  </a>
                </p>
              </div>
            </motion.div>

            <motion.form
              ref={form}
              className="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="form-group">
                <label htmlFor="user_name">Your Name</label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="user_email">Email Address</label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                ></textarea>
              </div>
              
              {submitStatus.message && (
                <div className={`form-message ${submitStatus.success ? 'success' : 'error'}`}>
                  <p>{submitStatus.message}</p>
                </div>
              )}
              
              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Sending...
                  </>
                ) : submitStatus.success ? (
                  <>
                    <i className="fas fa-check"></i> Message Sent!
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i> Send Message
                  </>
                )}
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
