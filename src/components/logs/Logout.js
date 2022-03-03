import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../redux/logins/signup';

const Logout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { firstname, lastname } = user;
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout({
      user: null,
    }));
  };
  return (
    <div className="user">
      <h1>
        Welcome
        <span>
          {firstname}
          {lastname}
        </span>
      </h1>
      <button type="button" className="logout-btn" onClick={(e) => handleLogout(e)}>Log out</button>
    </div>
  );
};

export default Logout;
