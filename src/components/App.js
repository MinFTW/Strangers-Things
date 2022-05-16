import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Title, PostList, Register, Login, Profile, NewPost } from './index';
import { fetchPosts } from '../api';
import '../css/App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState('');
  const localStorageToken = localStorage.getItem('token');

  useEffect(() => {
    const renderPosts = async () => {
      const result = await fetchPosts();
      setPosts(result);
    };
    renderPosts();

    localStorageToken && setToken(localStorageToken);
  }, [token]);

  return (
    <div id='app'>
      <Router>
        <Title token={token} setToken={setToken} />
        <Switch>
          <Route exact path='/login'>
            <Login token={token} setToken={setToken} />
          </Route>

          <Route exact path='/register'>
            <Register setToken={setToken} />
          </Route>

          <Route exact path='/newpost'>
            <NewPost token={token} />
          </Route>

          <Route exact path='/profile'>
            <Profile token={token} localStorageToken={localStorageToken} />
          </Route>

          <Route path='/'>
            <PostList posts={posts} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
