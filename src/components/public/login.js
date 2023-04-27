import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import { userLogIn } from '../../store/slices/user';
import ReactForm from './react-form';

import loaderGif from '../../assets/images/loader.gif';
import styles from './login.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector((state) => state.user.status);

  const SCHEMA = yup.object().shape({
    emailAddress: yup.string().required('Email Address is required').email('Please enter a valid email'),
    password: yup.string().required('Password is required'),
  });

  const INPUT = [
    { type: 'email', name: 'emailAddress', label: 'Email Address' },
    { type: 'password', name: 'password', label: 'Password' },
  ];

  const onSubmitHandler = (data) => {
    dispatch(userLogIn({ method: 'post', url: 'account/login', data }));
    navigate('/');
  };

  const secondaryButtonHandler = () => navigate('/reset-password');

  return (
    <ReactForm
      title={'Login'}
      layout={INPUT}
      schema={SCHEMA}
      onSecondaryClick={secondaryButtonHandler}
      secondaryButtonText={'Forgot Password'}
      onSubmit={onSubmitHandler}
      buttonIsDisabled={status === 'loading'}
      buttonText={
        status === 'loading' ? (
          <span>
            <img src={loaderGif} className={styles.loader_gif} alt="loader" />
            Login in...
          </span>
        ) : (
          'Login'
        )
      }
    />
  );
};

export default LoginPage;
