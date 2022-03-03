import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from './redux/logins/signup';
import Homepage from './components/Homepage';
import How from './components/How';
import Login from './components/logs/Login';
import Enterprise from './components/Enterprise';
import Nav from './components/navbar/index';
import UserNav from './components/user/index';
import About from './components/About';
import Become from './components/Become';
import Profile from './components/interface/Profile';
import Schedule from './components/interface/Schedule';
import Questions from './components/interface/Questions';
import Logout from './components/logs/Logout';
import Classes from './components/interface/Classes';
import Blog from './components/interface/Blog';
import './App.css';

const App = () => {
  const user = useSelector(selectUser);
  return (
    <div className="home">
      <Router>
        {user ? <UserNav /> : <Nav /> }
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="about-us" element={<About />} />
          <Route exact path="how-it-works" element={<How />} />
          <Route exact path="enterprise" element={<Enterprise />} />
          <Route exact path="become-a-tutor" element={<Become />} />
          <Route exact path="login" element={<Login />} />
          <Route exact path="my-profile" element={<Profile />} />
          <Route exact path="schedule" element={<Schedule />} />
          <Route exact path="classes" element={<Classes />} />
          <Route exact path="faq" element={<Questions />} />
          <Route exact path="blog" element={<Blog />} />
          <Route exact path="logout" element={<Logout />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
