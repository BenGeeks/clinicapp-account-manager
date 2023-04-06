import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { userLogIn } from '../../store/slices/user';

import mainLogo from '../../assets/images/mainLogo.png';
import styles from './login.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.user.status);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let payload = {};
    const data = new FormData(event.target);
    [...data.entries()].forEach((input) => {
      payload[input[0]] = input[1];
    });
    dispatch(userLogIn({ method: 'post', url: 'account/login', data: payload }));
  };

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.logo_container}>
          <img className={styles.logo} src={mainLogo} alt="logo" />
          <h1 className={styles.company_name}>The Clinic App</h1>
        </div>
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
              {status === 'loading' ? 'Signing in...' : 'Sign In'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
