import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useParams, useNavigate } from 'react-router-dom';

import { updatePassword } from '../../store/slices/user';

import Header from '../home/header';
import loaderGif from '../../assets/images/loader.gif';
import styles from './login.module.css';

const UpdatePassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useParams();
  const status = useSelector((state) => state.user.status);

  const SCHEMA = yup.object().shape({
    password: yup
      .string()
      .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,30}$/, 'Requirements: 8 to 30 characters long; 1 number, 1 special chararter')
      .required('Please provide a valid password'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
  });

  useEffect(() => {
    console.log('triggered', status);
    if (status === 'success') {
      navigate('/');
    }
  }, [navigate, status]);

  const onSubmitHandler = (data) => {
    dispatch(updatePassword({ method: 'patch', url: 'user/update-password', token, data }));
  };

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
        <form className={styles.form_container} onSubmit={handleSubmit(onSubmitHandler)}>
          <div className={styles.input_container}>
            <div className={styles.label_container}>
              <label htmlFor="password">Password:</label>
              <div className={styles.error_message}>{errors.password?.message}</div>
            </div>
            <input type="password" placeholder="Password" {...register('password')} />
          </div>
          <div className={styles.input_container}>
            <div className={styles.label_container}>
              <label htmlFor="password">Password:</label>
              <div className={styles.error_message}>{errors.password?.message}</div>
            </div>
            <input type="password" placeholder="Confirm Password" {...register('confirmPassword')} />
          </div>
          <div className={styles.button_container}>
            <button className={styles.btn} type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? (
                <span>
                  <img src={loaderGif} className={styles.loader_gif} alt="loader" />
                  Updating...
                </span>
              ) : (
                'Update Password'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePassword;
