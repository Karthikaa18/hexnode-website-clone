import React from 'react';
import './Management.css'; 

const Management = ({ textProp }) => {
  return (
    <div className="management-container">
      <div className="management-content">
        <strong>{textProp}</strong>
        <input 
          type="email" 
          placeholder="Your work email" 
          className="email-input" 
        />
        <button className="get-started-button">GET STARTED</button>
        <div className="demo-section">
          <span className="no-credit">No credit cards required.</span>
          <span className="request-demo">Request a demo</span>
        </div>
      </div>
    </div>
  );
};

export default Management;
