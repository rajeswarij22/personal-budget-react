import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Modified import

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';

function App() {
  return (
    <Router>
      <Menu/>
      <Hero/>
      <div className="mainContainer">
        <Routes> {/* Modified: Use Routes instead of Switch */}
          <Route path="/about" element={<AboutPage />} /> {/* Modified: Use 'element' prop */}
          <Route path="/login" element={<LoginPage />} /> {/* Modified: Use 'element' prop */}
          <Route path="/" element={<HomePage />} /> {/* Modified: Use 'element' prop */}
        </Routes>
      </div>
      <Footer/> 
    </Router>
  );
}

export default App;
