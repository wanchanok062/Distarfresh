// Navbar.js
import React from 'react';
import '../css/sidebar.css';

const Navbar = ({ onToggleSidebar }) => {
  return (
    <div className="navbar">
      <button onClick={onToggleSidebar} className="toggle-btn">☰</button>
      <div className='card-navbar ms-auto'>Admin</div>
    </div>
  );
};

export default Navbar;