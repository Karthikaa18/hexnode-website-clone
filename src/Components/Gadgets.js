import React from 'react';
import './Gadgets.css'; 

const Gadgets = () => {
  return (
    <div className="gadgets">
      <div className="media-section">
        <img src="https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fandroid-mdm%2Fandroid-devices.jpg&w=640&q=100" alt="Devices" className="devices-image" />
      </div>
      <div className="text-section">
        <h1 className="title">Phones, TVs and Wearables. All from a single point.</h1>
        <p className="subtitle">
          The Unified Endpoint Management (UEM) software from Hexnode simplifies management of all
          sorts of Android endpoints, ranging from mobile phones to XR devices, and unlocks countless
          endpoint management capabilities.
        </p>
      </div>
    </div>
  );
};

export default Gadgets;
