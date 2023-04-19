import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { userLogIn, resetPassword } from '../../store/slices/user';

import Header from '../home/header';
import loaderGif from '../../assets/images/loader.gif';
import styles from './login.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [requestSent, setRequestSent] = useState(false);
  const status = useSelector((state) => state.user.status);
  const emailSent = useSelector((state) => state.user.emailSent);

  const onSubmitHandler = (data) => {
    dispatch(userLogIn({ method: 'post', url: 'account/login', data }));
    navigate('/');
  };

  const onResetPasswordHandler = (data) => {
    dispatch(resetPassword({ method: 'post', url: 'user/reset-password', data }));
    setRequestSent(true);
  };

  const SCHEMA = yup.object().shape({
    emailAddress: yup.string().email('Please enter a valid email').required('Email Address is required'),
    password: yup.string().required('Please provide a valid password'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SCHEMA),
  });
  return (
    <div className={styles.background}>
      <Header />
      <div className={styles.container}>
        {requestSent && emailSent && <div>Please check your email to proceed in resetting your password</div>}
        {isForgotPassword ? (
          <>
            <form className={styles.form_container} onSubmit={handleSubmit(onResetPasswordHandler)}>
              <div className={styles.input_container}>
                <div className={styles.label_container}>
                  <label htmlFor="emailAddress">Email Address:</label>
                  <div className={styles.error_message}>{errors.emailAddress?.message}</div>
                </div>
                <input type="email" name="emailAddress" placeholder="Email Address" {...register('emailAddress')} />
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
          <form className={styles.form_container} onSubmit={handleSubmit(onSubmitHandler)}>
            <div className={styles.input_container}>
              <div className={styles.label_container}>
                <label htmlFor="emailAddress">Email Address:</label>
                <div className={styles.error_message}>{errors.emailAddress?.message}</div>
              </div>
              <input type="email" name="emailAddress" placeholder="Email Address" {...register('emailAddress')} />
            </div>
            <div className={styles.input_container}>
              <div className={styles.label_container}>
                <label htmlFor="password">Password:</label>
                <div className={styles.error_message}>{errors.password?.message}</div>
              </div>
              <input type="password" name="password" placeholder="Password" {...register('password')} />
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
