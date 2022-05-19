import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../css/App.css';
import {
  Title,
  PostList,
  Register,
  Login,
  MyPosts,
  NewPost,
  MyMessages,
  Footer,
  FrontPage,
} from './index';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const localStorageToken = localStorage.getItem('token');
  const localStorageUserName = localStorage.getItem('username');

  useEffect(() => {
    localStorageToken && setToken(localStorageToken);
    localStorageToken && setUsername(localStorageUserName);
  }, [token]);

  return (
    <div id='app'>
      <Router>
        <Title
          token={token}
          setToken={setToken}
          setUsername={setUsername}
          setPassword={setPassword}
        />
        <Switch>
          <Route exact path='/posts'>
            <PostList token={token} posts={posts} setPosts={setPosts} />
          </Route>

          <Route exact path='/login'>
            <Login
              token={token}
              setToken={setToken}
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
            />
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
            <MyMessages
              localStorageToken={localStorageToken}
              username={username}
            />
          </Route>

          <Route path='/'>
            <FrontPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
