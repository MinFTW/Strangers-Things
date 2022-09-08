import React, { useEffect, useState } from 'react';
import { fetchProfile } from '../api';
import { ActivePosts, DeletedPosts } from '../components';
import { Alert } from '@mui/material';
import '../css/MyPosts.css';

const MyPosts = ({ localStorageToken }) => {
  const [activePosts, setActivePosts] = useState([]);
  const [deletedPosts, setDeletedPosts] = useState([]);
  const [toast, setToast] = useState(false);

  const fetchPosts = async () => {
    const response = await fetchProfile(localStorageToken);
    const posts = response.data.posts;

    const activePosts = posts.filter((post) => post.active === true);
    const deletedPosts = posts.filter((post) => post.active === false);

    setActivePosts(activePosts);
    setDeletedPosts(deletedPosts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div id='mymessages-page'>
      <h2>Active Posts</h2>
      {activePosts.length === 0 ? (
        <p className='no-posts'>You have no posts</p>
      ) : (
        <ActivePosts
          localStorageToken={localStorageToken}
          activePosts={activePosts}
          fetchPosts={fetchPosts}
          setToast={setToast}
        />
      )}
      <div id='toast-update'>
        {toast && (
          <Alert
            severity='success'
            variant='filled'
            onClose={() => {
              setToast(false);
            }}
          >
            Update successful
          </Alert>
        )}
      </div>
      <br />
      <h2>Deleted Posts</h2>
      {deletedPosts.length === 0 ? (
        <p className='no-posts'>You have no posts</p>
      ) : (
        <DeletedPosts deletedPosts={deletedPosts} />
      )}
    </div>
  );
};

export default MyPosts;
