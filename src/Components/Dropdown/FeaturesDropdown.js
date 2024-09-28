import React, { useState } from 'react';
import './FeaturesDropdown.css';

const FeaturesDropdown = () => {
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
      Features
      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-content">
            <strong>Features</strong>
            <div className="dropdown-items">
              <ul>
                <li>Enrollment</li>
                <li>Kiosk Mode</li>
                <li>Web Filtering</li>
                <li>Expense Management</li>
                <li>Hexnode Access</li>
                <li>API</li>
              </ul>
              <ul>
                <li>Security Management</li>
                <li>App Management</li>
                <li>Tracking</li>
                <li>Dashboard</li>
                <li>Integrations</li>
                <li>All Features</li>
              </ul>
              <ul>
                <li>Groups</li>
                <li>Remote Control</li>
                <li>Geofencing</li>
                <li>OS Update Management</li>
                <li>Advanced Scripting</li>
              </ul>
              <ul>
                <li>Policy</li>
                <li>User Provisioning</li>
                <li>Messenger</li>
                <li>Hexnode Gateway</li>
                <li>Reports</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default FeaturesDropdown;