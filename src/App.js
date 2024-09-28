import React from 'react';
import Header from './Components/Header/Header'; 
import Gadgets from './Components/Gadgets';
import Features from './Components/Features';
import Ownership from './Components/Ownership';
import Management from './Components/Management';
import Feedback from './Components/Feedback';
import Integration from './Components/Integration';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Gadgets />
      <Features />
      <Ownership />
      <Management textProp='Start Managing your Android Devices'/>
      <Feedback />
      <Integration />
      <Management textProp='Android Management made easy!'/>
      <Footer />
    </div>
  );
}

export default App;
