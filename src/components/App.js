import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Title, PostList, Register, Login, Profile, NewPost } from './index';
import { fetchPosts, authenticateUser } from '../api';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [isLoggedin, setIsLoggedin] = useState(false);

  const handlePostList = async () => {
    await fetchPosts()
      .then((result) => {
        setPosts(result);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    handlePostList();
  }, [isLoggedin]);

  return (
    <div id='container'>
      <Router>
        <Title isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />
        <Switch>
          <Route exact path='/login'>
            <Login setIsLoggedin={setIsLoggedin} />
          </Route>

          <Route exact path='/register'>
            <Register />
          </Route>

          <Route exact path='/newpost'>
            <NewPost />
          </Route>

          <Route exact path='/profile'>
            <Profile />
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
