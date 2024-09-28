import React, { useState } from 'react';
import './Ownership.css';

const Ownership = () => {
  const [activeSection, setActiveSection] = useState('DeviceOwner'); 

  const handleSectionClick = (section) => {
    setActiveSection(activeSection === section ? '' : section);
  };

  return (
    <div className="ownership-container">
      <h2 className="ownership-title">Explore diverse ownership setups for your Android fleet</h2>

      <div className="ownership-content">

        <img
          src={
            activeSection === 'DeviceOwner'
              ? 'https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fandroid-mdm%2Fdevice-owner.jpg&w=640&q=90'
              : activeSection === 'ProfileOwner'
              ? 'https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fandroid-mdm%2Fprofile-owner.jpg&w=640&q=100'
              : 'https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fandroid-mdm%2Fwork-profile.jpg&w=640&q=100'
          }
          alt={activeSection || 'Ownership'}
        />

        <div className="ownership-text-container">

          <div className={`ownership-card ${activeSection === 'DeviceOwner' ? 'active' : ''}`}>
            <h3
              className="ownership-option"
              onClick={() => handleSectionClick('DeviceOwner')}
            >
              Device Owner
            </h3>
            {activeSection === 'DeviceOwner' && (
              <div className="ownership-text-content">
                <p>
                  Device Owner mode in Hexnode refers to an Android Enterprise enrollment configuration designed for
                  Corporate Owned devices, allowing IT admins to exert firm control over the devices. It provides
                  comprehensive device management capabilities, empowering admins to customize lock screens, manage
                  networks, apply app restrictions, and configure kiosk settings.
                </p>
              </div>
            )}
          </div>

          <div className={`ownership-card ${activeSection === 'ProfileOwner' ? 'active' : ''}`}>
            <h3
              className="ownership-option"
              onClick={() => handleSectionClick('ProfileOwner')}
            >
              Profile Owner
            </h3>
            {activeSection === 'ProfileOwner' && (
              <div className="ownership-text-content">
                <p>
                  Profile Owner mode in Android Enterprise facilitates device enrollment in personal devices with
                  limited control for admins. Once enrolled, it establishes a separate work container within the
                  device, ensuring a clear division between personal and corporate data for enhanced security and
                  management.
                </p>
              </div>
            )}
          </div>

          <div className={`ownership-card ${activeSection === 'WorkProfile' ? 'active' : ''}`}>
            <h3
              className="ownership-option"
              onClick={() => handleSectionClick('WorkProfile')}
            >
              Work Profile on Company-Owned devices (WP-C)
            </h3>
            {activeSection === 'WorkProfile' && (
              <div className="ownership-text-content">
                <p>
                  Work Profile on Company-Owned (WP-C) mode leverages containerization, establishing distinct work and
                  personal profiles to ensure privacy and security on corporate-owned devices while enabling personal
                  usage. The employee's personal profile remains private within the containerized environment.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ownership;
