import React from 'react';
import './Integration.css';

const Integration = () => {
  return (
    <div className="integration-container">

      <div className="integration-left">
        <h2 className="integration-heading">Easy Integration</h2>
        <p className="integration-description">
          Hexnode provides support for an ever-growing list of integrations to help you leverage the features of your pre-existing resources.
        </p>
      </div>

      
      <div class="integration-content">
        <div class="logo-row">
          <div class="logo logo1">
            <img src="https://static.hexnode.com/v2/assets/img/integration-partners/samsung-knox.svg" alt="Samsung Knox" />
          </div>
          <div class="logo logo2">
            <img src="https://static.hexnode.com/v2/assets/img/integration-partners/kyocera.png" alt="Kyocera" />
          </div>
        </div>
        
        <div class="logo-group">
          <div class="logo-row">
            <div class="logo logo3">
              <img src="https://static.hexnode.com/v2/assets/img/integration-partners/lg-gate.png" alt="LG Gate" />
            </div>
            <div class="logo logo4">
              <img src="https://static.hexnode.com/v2/assets/img/integration-partners/google-workspace.svg" alt="Google Workspace" />
            </div>
          </div>
          <div class="logo-center">
            <img src="https://static.hexnode.com/v2/assets/img/integration-partners/logo.svg" alt="Hexnode Logo" />
          </div>
          <div class="logo-row">
            <div class="logo logo5">
              <img src="https://static.hexnode.com/v2/assets/img/integration-partners/zendesk.svg" alt="Zendesk" />
            </div>
            <div class="logo logo6">
              <img src="https://static.hexnode.com/v2/assets/img/integration-partners/microsoft-entra-id.svg" alt="Microsoft Entra ID" />
            </div>
          </div>
        </div>

        <div class="logo-row">
          <div class="logo logo7">
            <img src="https://static.hexnode.com/v2/assets/img/integration-partners/windows-active-directory.svg" alt="Windows Active Directory" />
          </div>
          <div class="logo logo8">
            <img src="https://static.hexnode.com/v2/assets/img/integration-partners/android.svg" alt="Android" />
          </div>
        </div>
      </div>
    </div>

  );
};

export default Integration;
