import React from 'react';
import Navbar from './components/Navbar';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer'; 
import './index.css';

function App() {
  return (
    <div id="main-container">
      <Navbar />
      <MainContainer />
      <Footer /> 
    </div>
  );
}

export default App;
