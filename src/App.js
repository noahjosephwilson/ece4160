// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Labs from './components/Labs';

function App() {
  return (
    <Router>
      {/* Simple navigation bar */}
      <nav style={styles.navBar}>
        <ul style={styles.navList}>
          <li><Link to="/about" style={styles.navItem}>About Me</Link></li>
          <li><Link to="/labs" style={styles.navItem}>Labs</Link></li>
        </ul>
      </nav>

      {/* Routes for different pages */}
      <Routes>
        {/* Default route can be About or whichever you prefer */}
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/labs" element={<Labs />} />
      </Routes>
    </Router>
  );
}

// Optional inline styles (replace with CSS if you want)
const styles = {
  navBar: {
    background: '#f0f0f0',
    padding: '10px'
  },
  navList: {
    listStyleType: 'none',
    display: 'flex',
    gap: '15px',
    margin: 0,
    padding: 0
  },
  navItem: {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold'
  }
};

export default App;
