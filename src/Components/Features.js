import React, { useState } from 'react';
import './Features.css';

const Features = () => {
  const [activeTab, setActiveTab] = useState('Android Enterprise');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabChange = (tab) => {
    if (tab !== activeTab) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveTab(tab);
        setIsTransitioning(false);
      }, 500);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Android Enterprise':
        return (
          <div className={`content-box ${isTransitioning ? 'inactive' : 'active'}`}>
            <div className="text-section">
              <h2>Simplify enterprise management</h2>
              <p>Android Enterprise (AE) along with Hexnode enables the enterprise to exercise an extended level of control over every manageable aspect of a device.</p>
              <p>Support containerization, which creates a virtual container effectively separating work-related data from everything else. Apart from securing and enhancing control over corporate data, containerization helps incorporate a sense of user privacy.</p>
              <p>Android Enterprise provisions for a managed Google Play Store. Housed within the managed Google Play store are applications that are pre-approved by the enterprise.</p>
            </div>
            <div className="image-section">
              <img src="https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fandroid-mdm%2Fandroid-enterprise.jpg&w=640&q=100" alt="Android Enterprise" />
            </div>
          </div>
        );
      case 'Samsung Knox':
        return (
          <div className={`content-box ${isTransitioning ? 'inactive' : 'active'}`}>
            <div className="text-section">
              <h2>Build your own metaphoric fort</h2>
              <p>The Knox platform is built into most Samsung phones, tablets and wearables. Hexnode along with Samsung Knox extends the granular management capabilities of the enterprise by ensuring that the device is protected throughout its lifecycle.</p>
              <p>Samsung with Knox allows its users to enroll with Hexnode UEM through Knox Mobile Enrollment (KME). KME lets the enterprise enroll, configure and manage devices on the very first power on.</p>
              <p>Hexnode and Knox help the enterprise unlock some device management features that are beyond the capabilities of generic devices.</p>
            </div>
            <div className="image-section">
              <img src="https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fandroid-mdm%2Fsamsung-knox-kme.jpg&w=640&q=100" alt="Samsung Knox" />
            </div>
          </div>
        );
      case 'No-touch onboarding':
        return (
          <div className={`content-box ${isTransitioning ? 'inactive' : 'active'}`}>
            <div className="text-section">
              <h2>Get started with no hiccups</h2>
              <p>Android Zero Touch Enrollment provisions for simplified large-scale enterprise device deployment.</p>
              <p>Samsung Knox Enrollment is one among the most convenient options for the enterprise to enroll devices in bulk. Integration with Hexnode ensures deployment and configuration of Samsung devices that are completely secure from the hardware up.</p>
              <p>Hexnode helps your organization remain as flexible as possible with a plethora of enrollment options ranging from no-touch to QR code enrollments to ensure that the users can get to work with zero time delay.</p>
            </div>
            <div className="image-section">
              <img src="https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fandroid-mdm%2Fzero-touch-onboarding.jpg&w=640&q=100" alt="No-touch onboarding" />
            </div>
          </div>
        );
      case 'Completely remote':
        return (
          <div className={`content-box ${isTransitioning ? 'inactive' : 'active'}`}>
            <div className="text-section">
              <h2>Manage devices handsfree</h2>
              <p>Support a wide range of management capabilities that can be configured on-to target devices without having to ever touch the device. Pre-configure device with corporate Wi-Fi, VPN and applications from the very first boot.</p>
              <p>With Hexnode remote view and remote control capabilities, the admin can remotely view and troubleshoot supported devices.</p>
              <p>Hexnode supports a completely cloud-based management console that can be accessed from any internet-enabled device, making remote management of the device simpler.</p>
            </div>
            <div className="image-section">
              <img src="https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fandroid-mdm%2Fcompletely-remote.jpg&w=640&q=100" alt="Completely remote" />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="features-container">
      <div className="tabs">
        <button onClick={() => handleTabChange('Android Enterprise')}
          className={activeTab === 'Android Enterprise' ? 'active' : ''}>
          Android Enterprise
        </button>
        <button onClick={() => handleTabChange('Samsung Knox')}
          className={activeTab === 'Samsung Knox' ? 'active' : ''}>
          Samsung Knox
        </button>
        <button onClick={() => handleTabChange('No-touch onboarding')}
          className={activeTab === 'No-touch onboarding' ? 'active' : ''}>
          No-touch onboarding
        </button>
        <button onClick={() => handleTabChange('Completely remote')}
          className={activeTab === 'Completely remote' ? 'active' : ''}>
          Completely remote
        </button>
      </div>
      <div className="content-display">
        {renderContent()}
      </div>
    </div>
  );
};

export default Features;
