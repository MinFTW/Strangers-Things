import React, { useEffect, useState } from 'react';
import { fetchProfile } from '../api';
import '../css/MyMessages.css';

const MyMessages = ({ token, localStorageToken }) => {
  const [messages, setMessages] = useState([]);

  const getMessages = async () => {
    const response = await fetchProfile(localStorageToken);
    response.data && setMessages(response.data.messages);
    return messages;
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div id='mymessages-page'>
      {
        <div id='user-messages'>
          <h2>Your Messages</h2>
          {messages.length === 0 ? 'You have no messages' : messages}
        </div>
      }
    </div>
  );
};

export default MyMessages;
