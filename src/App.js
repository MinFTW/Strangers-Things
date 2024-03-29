import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/App.css';
import { Navbar, Footer } from './components';
import {
  Home,
  PostList,
  Register,
  Login,
  CreatePost,
  MyPosts,
  MyMessages,
} from './pages';

const App = () => {
  const [token, setToken] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [posts, setPosts] = useState([]);
  const localStorageToken = localStorage.getItem('token');
  const localStorageUsername = localStorage.getItem('username');

  useEffect(() => {
    localStorageToken && setToken(localStorageToken);
    localStorageUsername && setUsername(localStorageUsername);
  }, [token]);

  return (
    <div id='app'>
      <Router>
        <Navbar
          token={token}
          setToken={setToken}
          setUsername={setUsername}
          setPassword={setPassword}
        />
        <Switch>
          <Route exact path='/posts'>
            <PostList
              token={token}
              username={username}
              posts={posts}
              setPosts={setPosts}
            />
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
            <MyPosts localStorageToken={localStorageToken} />
          </Route>

          <Route exact path='/createpost'>
            <CreatePost token={token} />
          </Route>

          <Route exact path='/mymessages'>
            <MyMessages
              localStorageToken={localStorageToken}
              localStorageUsername={localStorageUsername}
            />
          </Route>

          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
