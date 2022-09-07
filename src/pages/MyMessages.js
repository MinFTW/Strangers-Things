import React, { useState, useEffect } from 'react';
import { fetchProfile } from '../api';
import { Inbox, Outbox } from '../components';
import '../css/MyMessages.css';

const MyMessages = ({ localStorageToken, localStorageUsername }) => {
  const [inbox, setInbox] = useState([]);
  const [outbox, setOutbox] = useState([]);

  const fetchMessages = async () => {
    const response = await fetchProfile(localStorageToken);
    const messages = response.data.messages;

    const inboxMessages = messages
      .reverse()
      .filter((message) => message.fromUser.username !== localStorageUsername);

    const outboxMessages = messages
      .reverse()
      .filter((message) => message.fromUser.username === localStorageUsername);

    setInbox(inboxMessages);
    setOutbox(outboxMessages);
  };

  useEffect(() => {
    fetchMessages();
  }, [localStorageToken]);

  return (
    <div id='mymessages-page'>
      <h1 id='welcome'>Welcome {`${localStorageUsername}`}</h1>
      <h2 className='mymessages-header'>Inbox</h2>
      {inbox.length === 0 ? (
        <p className='no-messages'>You don't have any messages</p>
      ) : (
        <Inbox inbox={inbox} />
      )}
      <h2 className='mymessages-header'>Outbox</h2>
      {outbox.length === 0 ? (
        <p className='no-messages'>You don't have any messages</p>
      ) : (
        <Outbox outbox={outbox} />
      )}
    </div>
  );
};

export default MyMessages;
