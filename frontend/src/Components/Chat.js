import React, { useState } from 'react';
import './Chat.css';

const ChatArea = ({ selectedUser }) => {
  const [messages, setMessages] = useState({});
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages({
        ...messages,
        [selectedUser]: [...(messages[selectedUser] || []), input],
      });
      setInput('');
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-display">
        {(messages[selectedUser] || []).map((msg, index) => (
          <div key={index} className="chat-message">
            {msg}
          </div>
        ))}
      </div>
      <div className="chat-input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="chat-input"
        />
        <button onClick={handleSend} className="chat-send-button">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatArea;
