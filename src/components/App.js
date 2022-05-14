import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { fetchPosts } from '../api';
import { Title, PostList, Register, Login, Profile } from './index';

const App = () => {
  const [posts, setPosts] = useState([]);

  const [token, setToken] = useState('');
  const localToken = localStorage.getItem('token');

  useEffect(() => {
    fetchPosts()
      .then((result) => {
        setPosts(result);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div id='container'>
      <Router>
        <Title token={token} localToken={localToken} />
        <Switch>
          <Route exact path='/register'>
            <Register setToken={setToken} />
          </Route>

          <Route exact path='/profile'>
            <Profile localToken={localToken}/>
          </Route>

          <Route path='/'>
            <PostList posts={posts} />
            {!localToken && (
              <Login
                setToken={setToken}
                token={token}
                localToken={localToken}
              />
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
