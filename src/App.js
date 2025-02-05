import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AboutMe from './pages/AboutMe/AboutMe';
import Lab1 from './pages/Lab1/Lab1';
import Lab2 from './pages/Lab2/Lab2';
import Lab3 from './pages/Lab3/Lab3';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="content">
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/lab1" element={<Lab1 />} />
            <Route path="/lab2" element={<Lab2 />} />
            <Route path="/lab3" element={<Lab3 />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
