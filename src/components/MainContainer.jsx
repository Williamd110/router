import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Blue from './blue';
import Red from './red';
import Home from './home';
import Green from './green';  
import Yellow from './yellow';  

function MainContainer() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/green" element={<Green />} /> 
        <Route path="/yellow" element={<Yellow />} /> 
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default MainContainer;