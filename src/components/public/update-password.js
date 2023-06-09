import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as yup from 'yup';
import { useParams, useNavigate } from 'react-router-dom';

import { updatePassword } from '../../store/slices/user';
import ReactForm from './react-form';

import styles from './login.module.css';
import loaderGif from '../../assets/images/loader.gif';

const UpdatePassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useParams();
  const status = useSelector((state) => state.user.status);

  const INPUT = [
    { type: 'password', name: 'password', label: 'Password' },
    { type: 'password', name: 'confirmPassword', label: 'Confirm Password' },
  ];

  const SCHEMA = yup.object().shape({
    password: yup
      .string()
      .required('Please provide a valid password.')
      .min(8, 'Must be more that 8 characters.')
      .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,30}$/, 'Should contain 1 number and 1 special character.')
      .max(30, 'Should not exceed 30 characters'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords did not match.'),
  });

  useEffect(() => {
    if (status === 'success') navigate('/');
    if (status === 'expired') navigate('/reset-password');
  }, [navigate, status]);

  const onSubmitHandler = (data) => {
    dispatch(updatePassword({ method: 'patch', url: 'user/update-password', token, data }));
  };

  const secondaryButtonHandler = () => navigate('/');

  return (
    <ReactForm
      title={'Update Password'}
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
            Updating...
          </span>
        ) : (
          'Update'
        )
      }
    />
  );
};

export default UpdatePassword;
