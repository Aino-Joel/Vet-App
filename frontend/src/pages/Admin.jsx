import React from 'react';
import './Admin.css';
import AdminNavbar from '../Components/AdminNavbar';

const Admin = () => {
  
  return (
    <div className="admin-container">
      <AdminNavbar />
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

export default Admin;