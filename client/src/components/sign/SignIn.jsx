// SignIn.jsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { loginSuccess, setError } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './signIn.scss';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('http://localhost:3001/api/v1/user/login', { email, password });
  //     const { token } = response.data.body;
  //     dispatch(loginSuccess({ token }));
   
  //     localStorage.setItem('token', token);
    
  //     navigate('/profile');
  //   } catch (error) {
  //     dispatch(setError(error.response.data.message));
  //     console.error('Login failed:', error);
  //   }
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/login', { email, password });
      const token = response.data.body.token;
      dispatch(loginSuccess({ token }));
   
      localStorage.setItem('token', token);
    
      navigate('/profile');
    } catch (error) {
      dispatch(setError(error.response.data.message));
      console.error('Login failed:', error);
    }
};

  

  return (
    <div>
      <main className="signInSection">
        <section className="sign-in-content">
          <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon" />
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="sign-in-button" type="submit">Sign In</button>
          </form>
          <div className="register">
            If you do not have an account, click <Link to="/register">here</Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SignIn;





