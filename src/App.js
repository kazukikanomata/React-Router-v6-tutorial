import React from 'react';
import { Routes, Route, NavLink, Link } from 'react-router-dom';
import './App.css';
import About from './routes/about';
import Contact from './routes/contact';
import Home from './routes/home';
import NoMatch from './pages/nomatch';
import Posts from './pages/posts';
import Post from './pages/post';

function App({ count, increase, decrease }) {
  return (
    <>
      <h1>Hello React Router v6</h1>
      <ul>
        <li>
          <NavLink style={({ isActive }) => (isActive ? {color: 'blue' } : undefined)} to='/'>Home</NavLink>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <NavLink className={ ({ isActive }) => (isActive ? 'active' : undefined)} 
          to={{
            pathname: '/contact',
            search: '?api_key=eimaieU9',
            state: 'test',
          }}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            className={ ({ isActive }) => (isActive ? 'active' : undefined)}
          to="/posts">
            Posts
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>

        <Route path='/posts' element={<Posts />}>
          <Route path=':postId' element={<Post />}/>
        </Route>
        
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </>
  );
}
export default App;