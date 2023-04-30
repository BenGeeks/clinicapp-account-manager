import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as yup from 'yup';

import { signup } from '../../store/slices/account';
import { getSubscriptionList } from '../../store/slices/subscription';

import ReactForm from './react-form';

import loaderGif from '../../assets/images/loader.gif';
import styles from './signup.module.css';

const SignupPage = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.account.status);
  const subscriptionList = useSelector((state) => (state.subscription && state.subscription.subscriptionList ? state.subscription.subscriptionList : []));

  const SCHEMA = yup.object().shape({
    accountName: yup.string().required('Account or Business name is required'),
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    emailAddress: yup.string().required('Email Address is required').email('Please enter a valid email'),
    password: yup
      .string()
      .required('Please provide a valid password.')
      .min(8, 'Must be more that 8 characters.')
      .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,30}$/, 'Should contain 1 number and 1 special character.')
      .max(30, 'Should not exceed 30 characters'),
    mobileNumber: yup.string().required('Phone or mobile number is required'),
    subscription: yup.string().required('Please select a subscription'),
  });

  const INPUT = [
    { type: 'text', name: 'accountName', label: 'Account or Business Name' },
    { type: 'text', name: 'firstName', label: 'First Name' },
    { type: 'text', name: 'lastName', label: 'Last Name' },
    { type: 'email', name: 'emailAddress', label: 'Email Address' },
    { type: 'password', name: 'password', label: 'Password' },
    { type: 'text', name: 'mobileNumber', label: 'Mobile Number' },
    { type: 'select', name: 'subscription', label: 'Subscription', options: subscriptionList },
  ];

  const INFORMATION = `
    You have successfully completed the first part of the registration.
    To proceed, please check your email and click the link that was provided.
    IMPORTANT: The link will expire in one hour.
    `;

  useEffect(() => {
    dispatch(getSubscriptionList({ method: 'get', url: 'subscriptions' }));
  }, [dispatch]);

  const onSubmitHandler = (data) => {
    dispatch(signup({ method: 'post', url: 'account/signup', data }));
  };

  return (
    <>
      {status !== 'success' ? (
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
                Generating email link...
              </span>
            ) : (
              'Sign Up'
            )
          }
        />
      ) : (
        <ReactForm title={'Register'} isInformation={true} information={INFORMATION} />
      )}
    </>
  );
};

export default SignupPage;
