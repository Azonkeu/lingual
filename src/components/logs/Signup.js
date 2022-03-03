import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/logins/signup';
import './signup.css';

const Signup = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({
      firstname,
      lastname,
      email,
      password,
      phone,
      loggedIn: true,
    }));
  };

  return (
    <div className="signup">
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <h2>Sign up</h2>
        <input
          type="text"
          className="first-name focus"
          value={firstname}
          id="first"
          onChange={(e) => setFirstname(e.target.value)}
          name="firstName"
          placeholder="First name"
          required
        />
        <input
          type="text"
          name="lastName"
          id="last"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          className="last-name focus"
          placeholder="Last name"
          required
        />
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="email focus"
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="password focus"
          placeholder="Password"
          required
        />
        <input
          type="tel"
          name="phoneNumber"
          id="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="phone focus"
          placeholder="Phone number"
          required
        />
        <button type="submit" className="signup-btn" id="sign">Sign up</button>
        <span>
          Already have an account?
        </span>
      </form>
    </div>
  );
};

export default Signup;
