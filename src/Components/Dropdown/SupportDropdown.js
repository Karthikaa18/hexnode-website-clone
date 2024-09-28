import React, { useState } from 'react';
import './SupportDropdown.css'; 

const SupportDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(true);
  const closeDropdown = () => setIsOpen(false);

  return (
    <li
      className="nav-item dropdown"
      onMouseEnter={toggleDropdown}
      onMouseLeave={closeDropdown}
      aria-haspopup="true"
      aria-expanded={isOpen}
    >
      Support
      {isOpen && (
        <div className="support-dropdown-menu">
          <div className="support-cards">
            <div className="support-column">
              <div className="support-card">
                <strong>Talk to Sales/Support</strong>
                <p>Request a call back from the sales/tech team</p>
              </div>
              <div className="support-card">
                <strong>Schedule a Demo</strong>
                <p>Request a detailed product walkthrough</p>
              </div>
              <div className="support-card">
                <strong>Get a Quote</strong>
                <p>Request the pricing details of plans</p>
              </div>
            </div>
            <div className="support-column">
              <div className="support-card">
                <strong>Contact Support</strong>
                <p>Raise a ticket for inquiries</p>
              </div>
              <div className="support-card">
                <strong>Help Documentation</strong>
                <p>Access help articles and FAQs</p>
              </div>
              <div className="support-card">
                <strong>Videos</strong>
                <p>Navigate through Hexnode visually</p>
              </div>
            </div>
            <div className="support-column">
              <div className="support-card">
                <strong>Hexnode Academy</strong>
                <p>Product training and documents</p>
              </div>
              <div className="support-card">
                <strong>Webinars</strong>
                <p>Feature introduction and tutorials</p>
              </div>
              <div className="support-card">
                <strong>Resources</strong>
                <p>Datasheets, whitepapers, and more</p>
              </div>
              <div className="support-card">
                <strong>Developers</strong>
                <p>API guides for developers</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default SupportDropdown;
