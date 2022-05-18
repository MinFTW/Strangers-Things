import React, { useEffect, useState } from 'react';
import { fetchProfile } from '../api';
import '../css/MyMessages.css';

const MyMessages = ({ localStorageToken }) => {
  const [messages, setMessages] = useState([]);

  const getMessages = async () => {
    const response = await fetchProfile(localStorageToken);
    setMessages(response.data.messages);
  };

  const handleMessages = () => {
    messages.map((message, index) => {
      return (
        <div key={index}>
          <h3>Message #{`${index}`}</h3>
          <h4>{message.content}</h4>
          <p>From: {message.fromUser}</p>
          <p>Sent: {message.createdAt.slice(0, 10)}</p>
          <p></p>
        </div>
      );
    });
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div id='mymessages-page'>
      {
        <div id='user-messages'>
          <h2>Your Messages</h2>
          {messages ? 'You have no messages' : handleMessages()}
        </div>
      }
    </div>
  );
};

export default MyMessages;
