import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

import { resetPassword } from '../../store/slices/user';
import ReactForm from './react-form';

import styles from './login.module.css';
import loaderGif from '../../assets/images/loader.gif';

const ResetPasswordPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector((state) => state.user.status);

  const INPUT = [{ type: 'email', name: 'emailAddress', label: 'Email Address' }];

  const SCHEMA = yup.object().shape({
    emailAddress: yup.string().required('Email address is required.').email('Please enter a valid email address'),
  });

  useEffect(() => {
    if (status === 'success') navigate('/');
    if (status === 'expired') navigate('/reset-password');
  }, [navigate, status]);

  const onSubmitHandler = (data) => {
    console.log('this has been triggered: ', data);
    dispatch(resetPassword({ method: 'post', url: 'user/reset-password', data }));
  };
  const secondaryButtonHandler = () => navigate('/');

  return (
    <ReactForm
      title={'Reset Password'}
      layout={INPUT}
      schema={SCHEMA}
      secondaryButtonText={'Cancel'}
      onSecondaryClick={secondaryButtonHandler}
      onSubmit={onSubmitHandler}
      buttonIsDisabled={status === 'loading'}
      buttonText={
        status === 'loading' ? (
          <span>
            <img src={loaderGif} className={styles.loader_gif} alt="loader" />
            Generating email...
          </span>
        ) : (
          'Reset Password'
        )
      }
    />
  );
};

export default ResetPasswordPage;
