import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Title, PostList, Register, Login, MyPosts, NewPost, MyMessages } from './index';
import '../css/App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState('');
  const localStorageToken = localStorage.getItem('token');

  useEffect(() => {
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

          <Route exact path='/myposts'>
            <MyPosts token={token} localStorageToken={localStorageToken} />
          </Route>

          <Route exact path='/newpost'>
            <NewPost token={token} />
          </Route>

          <Route exact path='/mymessages'>
            <MyMessages token={token} localStorageToken={localStorageToken} />
          </Route>

          <Route path='/'>
            <PostList posts={posts} setPosts={setPosts} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
