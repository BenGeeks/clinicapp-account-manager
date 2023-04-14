import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { userLogIn } from '../../store/slices/user';

import Header from '../home/header';
import loaderGif from '../../assets/images/loader.gif';
import styles from './login.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const status = useSelector((state) => state.user.status);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let payload = {};
    const data = new FormData(event.target);
    [...data.entries()].forEach((input) => {
      payload[input[0]] = input[1];
    });
    dispatch(userLogIn({ method: 'post', url: 'account/login', data: payload }));
    navigate('/');
  };

  return (
    <div className={styles.background}>
      <Header />
      <div className={styles.container}>
        {isForgotPassword ? (
          <>
            <form className={styles.form_container} onSubmit={onSubmitHandler}>
              <div className={styles.input_container}>
                <label htmlFor="emailAddress">Email Address:</label>
                <input type="email" name="emailAddress" placeholder="Email Address" />
              </div>
              <div className={styles.button_container}>
                <button className={styles.btn} type="submit" disabled={status === 'loading'}>
                  {status === 'loading' ? (
                    <span>
                      <img src={loaderGif} className={styles.loader_gif} alt="loader" />
                      Generating email...
                    </span>
                  ) : (
                    'Reset Password'
                  )}
                </button>
                <div className={styles.forgot_password} onClick={() => setIsForgotPassword(false)}>
                  Cancel
                </div>
              </div>
            </form>
          </>
        ) : (
          <form className={styles.form_container} onSubmit={onSubmitHandler}>
            <div className={styles.input_container}>
              <label htmlFor="emailAddress">Email Address:</label>
              <input type="email" name="emailAddress" placeholder="Email Address" />
            </div>
            <div className={styles.input_container}>
              <label htmlFor="password">Password:</label>
              <input type="password" name="password" placeholder="Password" />
            </div>
            <div className={styles.button_container}>
              <button className={styles.btn} type="submit" disabled={status === 'loading'}>
                {status === 'loading' ? (
                  <span>
                    <img src={loaderGif} className={styles.loader_gif} alt="loader" />
                    Logging in...
                  </span>
                ) : (
                  'Log In'
                )}
              </button>
              <div className={styles.forgot_password} onClick={() => setIsForgotPassword(true)}>
                Forgot Password
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
