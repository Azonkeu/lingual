import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/logins/signup';
import Signup from './Signup';
import Logout from './Logout';

const Login = () => {
  const user = useSelector(selectUser);
  return (
    <div>
      {user ? <Logout /> : <Signup /> }
    </div>
  );
};

export default Login;
