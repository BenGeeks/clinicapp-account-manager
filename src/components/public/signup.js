import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { userLogIn } from '../../store/slices/user';

import mainLogo from '../../assets/images/mainLogo.png';

import styles from './signup.module.css';

const SignupPage = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.user.status);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let payload = {};
    const data = new FormData(event.target);
    [...data.entries()].forEach((input) => {
      payload[input[0]] = input[1];
    });
    dispatch(userLogIn({ method: 'post', url: 'account/signup', data: payload }));
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
            <input type="password" name="password" placeholder="Password" minlength="8" maxlength="30" required />
          </div>
          <div className={styles.button_container}>
            <button className={styles.btn} type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending Email Link...' : 'Sign Up'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
