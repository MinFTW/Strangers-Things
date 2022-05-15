import React, { useState } from 'react';
import { fetchPosts, fetchProfile } from '../api';

const Profile = ({ localToken }) => {
  const [messages, setMessages] = useState([]);

  const data = fetchProfile(localToken);

  return (
    <div id='profile'>
      <h2>Messages</h2>
    </div>
  );
};

export default Profile;
