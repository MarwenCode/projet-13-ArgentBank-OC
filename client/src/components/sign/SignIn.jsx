import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { loginSuccess, setError } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './signIn.scss';

const SignIn = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const rememberMeRef = useRef(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
   
    const token = localStorage.getItem('token') 
    if (token) {
    
      dispatch(loginSuccess({ token }));
      navigate('/profile');
    }
  }, [dispatch, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const rememberMe = rememberMeRef.current.checked;

    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/login', { email, password });
      const token = response.data.body.token;
      dispatch(loginSuccess({ token }));

      if (rememberMe) {
      
        localStorage.setItem('token', token);
       
      } else {
    
        localStorage.removeItem('token'); 
      }

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
                ref={emailRef}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                ref={passwordRef}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" ref={rememberMeRef} />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button" type="submit">Sign In</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default SignIn;


