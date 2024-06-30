import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBell, FaHome, FaUsers, FaStethoscope, FaLink, FaBars, FaChevronLeft } from 'react-icons/fa';
import '../pages/Admin.css';

const AdminNavbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="admin-container">
      <div className={`admin-dashboard ${isCollapsed ? 'collapsed' : ''}`}>
        <div className="collapse-icon" onClick={toggleCollapse}>
          {isCollapsed ? <FaBars /> : <FaChevronLeft />}
        </div>
        <div>
          <h1 className={`dashboard-title ${isCollapsed ? 'hidden' : ''}`}>Admin Dashboard</h1>
        </div><br/>
        <nav>
          <Link to="/home" className="link">
            <FaHome className="icon" /> <span className={isCollapsed ? 'hidden' : ''}>Home</span>
          </Link><br/>
          <Link to="/Notification" className="link">
            <FaBell className="icon" /> <span className={isCollapsed ? 'hidden' : ''}>Notification</span>
          </Link><br/>
          <Link to="/users" className="link">
            <FaUsers className="icon" /> <span className={isCollapsed ? 'hidden' : ''}>Users</span>
          </Link><br/>
          <Link to="/doctors" className="link">
            <FaStethoscope className="icon" /> <span className={isCollapsed ? 'hidden' : ''}>Doctor</span>
          </Link><br/>
          <Link to="/location" className="link additional-link">
            <FaLink className="icon" /> <span className={isCollapsed ? 'hidden' : ''}>Location</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default AdminNavbar;