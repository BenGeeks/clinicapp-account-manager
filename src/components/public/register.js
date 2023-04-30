import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import { createNewAccount } from '../../store/slices/account';

import ReactForm from './react-form';

import loaderGif from '../../assets/images/loader.gif';
import styles from './register.module.css';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useParams();
  const status = useSelector((state) => state.account.status);

  const SCHEMA = yup.object().shape({
    password: yup
      .string()
      .required('Please provide a valid password')
      .min(8, 'Must be more that 8 characters.')
      .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,30}$/, 'Should contain 1 number and 1 special character.')
      .max(30, 'Should not exceed 30 characters'),
    clinicName: yup.string().required('Clinic name is required'),
    address: yup.string().required('Address is required'),
    barangay: yup.string().required('Barangay is required'),
    city: yup.string().required('City is required'),
    province: yup.string().required('Province is required'),
    zip: yup.string().required('Zip code is required'),
    telephone: yup.string().required('Clinic phone number is required'),
  });

  let INPUT = [
    { type: 'password', name: 'password', label: 'Verify Password' },
    { type: 'text', name: 'clinicName', label: 'Clinic Name' },
    { type: 'text', name: 'address', label: 'Address' },
    { type: 'text', name: 'barangay', label: 'Barangay' },
    { type: 'text', name: 'city', label: 'City or Municipality' },
    { type: 'text', name: 'province', label: 'Province' },
    { type: 'text', name: 'zip', label: 'Zip Code' },
    { type: 'text', name: 'telephone', label: 'Telephone Number' },
  ];

  useEffect(() => {
    if (status === 'success') {
      setTimeout(() => window.location.replace('https://account.clinicapp.online/'), 500);
    }
    if (status === 'expired') {
      navigate('/signup');
    }
  }, [dispatch, status, navigate]);

  const onSubmitHandler = (data) => {
    dispatch(createNewAccount({ method: 'post', url: 'account/new', token, data }));
  };

  return (
    <ReactForm
      title={'Register'}
      layout={INPUT}
      schema={SCHEMA}
      secondaryButtonText={''}
      onSubmit={onSubmitHandler}
      buttonIsDisabled={status === 'loading'}
      buttonText={
        status === 'loading' ? (
          <span>
            <img src={loaderGif} className={styles.loader_gif} alt="loader" />
            Processing...
          </span>
        ) : (
          'Register'
        )
      }
    />
  );
};

export default RegistrationPage;
