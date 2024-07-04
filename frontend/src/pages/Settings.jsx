import React from 'react';
import { FaPersonBooth, FaKey, FaLock, FaBell, FaEnvelope, FaPills, FaCalendarAlt, FaQuestionCircle, FaPhone, FaFileAlt, FaShieldAlt, FaInfoCircle, FaCode } from 'react-icons/fa';
import './Settings.css';

const Settings = () => {
  return (
    <div className="container">
      <div className="scrollViewContent">
        {/* Account Management */}
        <div className="section">
          <h2 className="sectionTitle">Account Management</h2>
          <div className="option">
            <FaPersonBooth size={24} color="#e53935" />
            <span className="optionText">Profile Editing</span>
          </div>
          <div className="option">
            <FaKey size={24} color="#e53935" />
            <span className="optionText">Password Change</span>
          </div>
          <div className="option">
            <FaLock size={24} color="#e53935" />
            <span className="optionText">Privacy Settings</span>
          </div>
        </div>

        {/* Notifications */}
        <div className="section">
          <h2 className="sectionTitle">Notifications</h2>
          <div className="option">
            <FaBell size={24} color="#e53935" />
            <span className="optionText">Push Notifications</span>
          </div>
          <div className="option">
            <FaEnvelope size={24} color="#e53935" />
            <span className="optionText">Email Notifications</span>
          </div>
        </div>

        {/* Health Management */}
        <div className="section">
          <h2 className="sectionTitle">Health Management</h2>
          <div className="option">
            <FaPills size={24} color="#e53935" />
            <span className="optionText">Medication Reminders</span>
          </div>
          <div className="option">
            <FaCalendarAlt size={24} color="#e53935" />
            <span className="optionText">Appointment Reminders</span>
          </div>
        </div>

        {/* Help & Support */}
        <div className="section">
          <h2 className="sectionTitle">Help & Support</h2>
          <div className="option">
            <FaQuestionCircle size={24} color="#e53935" />
            <span className="optionText">FAQs</span>
          </div>
          <div className="option">
            <FaPhone size={24} color="#e53935" />
            <span className="optionText">Contact Support</span>
          </div>
        </div>

        {/* Legal */}
        <div className="section">
          <h2 className="sectionTitle">Legal</h2>
          <div className="option">
            <FaFileAlt size={24} color="#e53935" />
            <span className="optionText">Terms of Service</span>
          </div>
          <div className="option">
            <FaShieldAlt size={24} color="#e53935" />
            <span className="optionText">Privacy Policy</span>
          </div>
        </div>

        {/* App Information */}
        <div className="section">
          <h2 className="sectionTitle">App Information</h2>
          <div className="option">
            <FaInfoCircle size={24} color="#e53935" />
            <span className="optionText">About</span>
          </div>
          <div className="option">
            <FaCode size={24} color="#e53935" />
            <span className="optionText">Version</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;