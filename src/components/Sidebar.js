import React from 'react';
import { NavLink } from 'react-router-dom';
import photo from '../assets/myphoto.jpg';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={photo} alt="My Profile" className="profile-image" />
      <nav>
        <ul>
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/lab1" className={({ isActive }) => (isActive ? 'active' : '')}>
              Lab 1
            </NavLink>
          </li>
          <li>
            <NavLink to="/lab2" className={({ isActive }) => (isActive ? 'active' : '')}>
              Lab 2
            </NavLink>
          </li>
          <li>
            <NavLink to="/lab3" className={({ isActive }) => (isActive ? 'active' : '')}>
              Lab 3
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
