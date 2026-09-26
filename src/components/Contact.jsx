import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { useToast } from '../context/ToastContext';
import confetti from 'canvas-confetti';

const Contact = () => {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`${label} copied to clipboard!`, 'fa-solid fa-circle-check');
    }).catch(() => {
      showToast(`Failed to copy ${label}`, 'fa-solid fa-triangle-exclamation');
    });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      showToast('Please fill out all required fields!', 'fa-solid fa-circle-exclamation');
      return;
    }

    setIsSubmitting(true);

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (err) {
      // ignore confetti failure if canvas not supported
    }

    const emailSubject = encodeURIComponent(subject || `Portfolio Inquiry from ${name}`);
    const emailBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:${personalInfo.email}?subject=${emailSubject}&body=${emailBody}`;

    showToast('Opening your email client to send message...', 'fa-solid fa-paper-plane');

    setTimeout(() => {
      window.location.href = mailtoLink;
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 400);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag"><i className="fa-regular fa-paper-plane"></i> Get in Touch</span>
          <h2 className="section-title">Let's Build Something <span className="gradient-text">Extraordinary</span></h2>
          <p className="section-subtitle">
            Have an opportunity, project in mind, or just want to connect? Reach out anytime!
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Info Cards */}
          <div className="contact-info-cards">
            <div className="glass-card info-card">
              <div className="info-icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="info-text">
                <h4>Email Me</h4>
                <p><a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></p>
              </div>
              <button
                type="button"
                className="copy-btn"
                onClick={() => handleCopy(personalInfo.email, 'Email')}
                title="Copy Email"
                aria-label="Copy Email"
              >
                <i className="fa-regular fa-copy"></i>
              </button>
            </div>

            <div className="glass-card info-card">
              <div className="info-icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="info-text">
                <h4>Phone / Call</h4>
                <p><a href={`tel:${personalInfo.rawPhone}`}>{personalInfo.phone}</a></p>
              </div>
              <button
                type="button"
                className="copy-btn"
                onClick={() => handleCopy(personalInfo.phone, 'Phone')}
                title="Copy Phone"
                aria-label="Copy Phone"
              >
                <i className="fa-regular fa-copy"></i>
              </button>
            </div>

            <div className="glass-card info-card">
              <div className="info-icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
              <div className="info-text">
                <h4>LinkedIn</h4>
                <p>
                  <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/anand-goswami
                  </a>
                </p>
              </div>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="copy-btn"
                title="Open LinkedIn"
                aria-label="Open LinkedIn"
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>

            <div className="glass-card info-card">
              <div className="info-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="info-text">
                <h4>Location</h4>
                <p>{personalInfo.location}</p>
              </div>
            </div>

            {/* Quick WhatsApp Direct Link */}
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ marginTop: '0.5rem', justifyContent: 'center' }}
            >
              <i className="fa-brands fa-whatsapp" style={{ color: '#25d366', fontSize: '1.2rem' }}></i> Chat Directly on WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div className="glass-card contact-form-card">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="user_name" className="form-label">Your Full Name *</label>
                <input
                  type="text"
                  id="user_name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="e.g. Rahul Sharma"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="user_email" className="form-label">Email Address *</label>
                <input
                  type="email"
                  id="user_email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="e.g. rahul@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="user_subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="user_subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Project discussion / Job opportunity"
                />
              </div>

              <div className="form-group">
                <label htmlFor="user_message" className="form-label">Message *</label>
                <textarea
                  id="user_message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Write your message or inquiry here..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '0.5rem' }}
              >
                <i className="fa-solid fa-paper-plane"></i> {isSubmitting ? 'Preparing Email...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
