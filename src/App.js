import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import How from './components/How';
import Enterprise from './components/Enterprise';
import Nav from './components/navbar/index';
import About from './components/About';
import Become from './components/Become';
import './App.css';

const App = () => (
  <div className="home">
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="about-us" element={<About />} />
        <Route exact path="how-it-works" element={<How />} />
        <Route exact path="enterprise" element={<Enterprise />} />
        <Route exact path="become-a-tutor" element={<Become />} />
      </Routes>
    </Router>
  </div>
);

export default App;
