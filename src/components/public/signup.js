import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signup } from '../../store/slices/account';
import { getSubscriptionList } from '../../store/slices/subscription';

import mainLogo from '../../assets/images/mainLogo.png';
import loaderGif from '../../assets/images/loader.gif';
import styles from './signup.module.css';

const SignupPage = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.account.status);
  const subscriptionList = useSelector((state) => (state.subscription && state.subscription.subscriptionList ? state.subscription.subscriptionList : []));

  useEffect(() => {
    dispatch(getSubscriptionList({ method: 'get', url: 'accounts/subscriptions' }));
  }, [dispatch]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let payload = {};
    const data = new FormData(event.target);
    [...data.entries()].forEach((input) => {
      payload[input[0]] = input[1];
    });
    dispatch(signup({ method: 'post', url: 'account/signup', data: payload }));
  };

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.logo_container}>
          <img className={styles.logo} src={mainLogo} alt="logo" />
          <h1 className={styles.company_name}>The Clinic App</h1>
        </div>
        {status !== 'success' ? (
          <form className={styles.form_container} onSubmit={onSubmitHandler}>
            <div className={styles.input_container}>
              <label htmlFor="businessName">Business Name:</label>
              <input type="text" name="businessName" placeholder="Business Name" />
            </div>
            <div className={styles.input_container}>
              <label htmlFor="firstName">First Name:</label>
              <input type="text" name="firstName" placeholder="First Name" />
            </div>
            <div className={styles.input_container}>
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" name="lastName" placeholder="Last Name" />
            </div>
            <div className={styles.input_container}>
              <label htmlFor="emailAddress">Email Address:</label>
              <input type="email" name="emailAddress" placeholder="Email Address" />
            </div>
            <div className={styles.input_container}>
              <label htmlFor="password">Password:</label>
              <input type="password" name="password" placeholder="Password" minLength="8" maxLength="30" required />
            </div>
            <div className={styles.input_container}>
              <label htmlFor="subscription">Subscription:</label>
              <select name="subscription" required>
                <option value="" disabled>
                  -- Select Subscription --
                </option>
                {subscriptionList.map((option) => {
                  return (
                    <option key={option._id} value={option._id}>
                      {option.subscriptionName}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className={styles.button_container}>
              <button className={styles.btn} type="submit" disabled={status === 'loading'}>
                {status === 'loading' ? (
                  <span>
                    <img src={loaderGif} className={styles.loader_gif} alt="loader" />
                    Generating email link...
                  </span>
                ) : (
                  'Sign Up'
                )}
              </button>
            </div>
          </form>
        ) : (
          <div className={styles.success_message_container}>
            <p className={styles.success_message}>
              You have successfully completed the first part of the registration. <br />
              To proceed, please check your email and click the link that was provided.
              <br />
              <br /> <strong>IMPORTANT: </strong> The link will expire in one hour.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupPage;
