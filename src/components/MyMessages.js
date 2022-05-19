import React, { useEffect, useState } from 'react';
import { fetchProfile } from '../api';
import '../css/MyMessages.css';

const MyMessages = ({ localStorageToken, username }) => {
  const [messages, setMessages] = useState([]);

  const getMessages = async () => {
    const response = await fetchProfile(localStorageToken);
    setMessages(response.data.messages);
  };

  const handleInbox = () => {
    return messages.reverse().map((message, index) => {
      if (username !== message.fromUser.username) {
        return (
          <div key={index} className='messages'>
            <p>For Item: {message.post.title}</p>
            <p>Message: {message.content}</p>
            <p>From: {message.fromUser.username}</p>
          </div>
        );
      }
    });
  };

  const handleSentMessages = () => {
    return messages.map((message, index) => {
      if (username === message.fromUser.username) {
        return (
          <div key={index} className='messages'>
            <p>For Item: {message.post.title}</p>
            <p>Message: {message.content}</p>
          </div>
        );
      }
    });
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div id='message-list'>
      <h2>Inbox</h2>
      {messages.length === 0 ? 'You have no messages' : handleInbox()}
      <h2>Sent Messages</h2>
      {handleSentMessages()}
    </div>
  );
};

export default MyMessages;
