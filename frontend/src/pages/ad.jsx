import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBell, FaHome, FaUsers, FaStethoscope, FaLink, FaBars, FaChevronLeft } from 'react-icons/fa';
import './ad.css';

const ad = () => {
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
          <Link to="/" className="link">
            <FaHome className="icon" /> <span className={isCollapsed ? 'hidden' : ''}>Home</span>
          </Link><br/>
          <Link to="/Notification" className="link">
            <FaBell className="icon" /> <span className={isCollapsed ? 'hidden' : ''}>Notification</span>
          </Link><br/>
          <Link to="/Users" className="link">
            <FaUsers className="icon" /> <span className={isCollapsed ? 'hidden' : ''}>Users</span>
          </Link><br/>
          <Link to="/Doctorlist" className="link">
            <FaStethoscope className="icon" /> <span className={isCollapsed ? 'hidden' : ''}>Doctor</span>
          </Link><br/>
          <Link to="/location" className="link additional-link">
            <FaLink className="icon" /> <span className={isCollapsed ? 'hidden' : ''}>Location</span>
          </Link>
        </nav>
      </div>
      <div className="admin-content-container">
        {/* <div className="admin-content">
          <h2>Admin Page Content</h2>
          <div className="notification-icon">
            <FaBell size={24} />
          </div>
        </div><br/> */}
        <div className="c1">
          <div className="horizontal-div">Div 1</div><br/>
          <div className="horizontal-div">Div 2</div><br/>
          <div className="horizontal-div">Div 3</div>
        </div>
      </div>
    </div>
  );
};

export default ad;