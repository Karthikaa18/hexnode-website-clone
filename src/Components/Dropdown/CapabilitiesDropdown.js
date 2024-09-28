import React, { useState } from 'react';
import './CapabilitiesDropdown.css'; 

const CapabilitiesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li
      className="nav-item dropdown"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      Capabilities
      {isOpen && (
        <div className="capabilities-dropdown-menu">
          <div className="dropdown-content">
            <h3 className="capabilities-heading">Capabilities</h3>
            <div className="capabilities-columns">
              <div className="capabilities-column">
                <strong>Device Management</strong>
                <hr />
                <span>Unified Endpoint Management</span>
                <span>Multi-platform</span>
                <span>Rugged Devices</span>
                <span>Desktop Management</span>
                <span>IoT Management</span>
                <span>Security Management</span>
                <span>App Management</span>
                <span>Content Management</span>
                <span>Bring Your Own Device</span>
                <span>Identity & Access Management</span>
              </div>
              <div className="capabilities-column">
                <strong>Kiosk Lockdown</strong>
                <hr />
                <span>All-in-one Kiosk</span>
                <span>iOS Kiosk</span>
                <span>Android Kiosk</span>
                <span>Windows Kiosk</span>
                <span>Apple TV Kiosk</span>
                <span>Android Kiosk Browser</span>
                <span>iOS Kiosk Browser</span>
                <span>Hexnode Digital Signage</span>
              </div>
              <div className="capabilities-column">
                <strong>Compliance & Security</strong>
                <hr />
                <span>Compliance Checklists</span>
                <span>GDPR</span>
                <span>SOC 2</span>
                <span>PCI DSS</span>
                <span>HIPAA</span>
              </div>
              <div className="capabilities-column">
                <strong>Platforms Supported</strong>
                <hr />
                <span>Apple</span>
                <span>Android</span>
                <span>Mac</span>
                <span>Windows</span>
                <span>Apple TV</span>
                <span>Android TV</span>
                <span>Fire OS</span>
              </div>
              <div className="capabilities-column">
                <strong>Enterprise Integrations</strong>
                <hr />
                <span>Android Enterprise</span>
                <span>Apple School Manager</span>
                <span>Apple Business Manager</span>
                <span>Samsung Knox</span>
                <span>LG GATE</span>
                <span>Kyocera</span>
                <span>Google Workspace</span>
                <span>Microsoft AD</span>
                <span>Okta</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default CapabilitiesDropdown;
