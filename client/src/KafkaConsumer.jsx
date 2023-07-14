import React, { useState, useEffect } from 'react';

const MessageTable = () => {
  const [messages, setMessages] = useState([]);
  const [selectedKey, setSelectedKey] = useState('');

  useEffect(() => {
    if (selectedKey) {
      fetchMessages(selectedKey);
    }
  });

  const fetchMessages = async (key) => {
    try {
      const response = await fetch(`http://localhost:3000/?key=${key}`);
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const handleKeyChange = (event) => {
    setSelectedKey(event.target.value);
  };

  return (
    <div>
      <label htmlFor="key">Key:</label>
      <select id="key" value={selectedKey} onChange={handleKeyChange}>
        <option value="">Select a key</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>

      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message, index) => (
            <tr key={index}>
              <td>{message.key}</td>
              <td>{message.value}</td>
              <td>{message.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MessageTable;
