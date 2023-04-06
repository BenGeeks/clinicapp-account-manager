import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { getSubscriptionList } from '../../store/slices/subscription';
import { createNewAccount } from '../../store/slices/account';

import mainLogo from '../../assets/images/mainLogo.png';

import styles from './register.module.css';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const { token } = useParams();
  const subscriptionList = useSelector((state) => (state.subscription && state.subscription.subscriptionList ? state.subscription.subscriptionList : []));

  let status = true;

  let form = [
    { type: 'text', name: 'businessName', label: 'Business Name', required: true },
    { type: 'text', name: 'firstName', label: 'First Name', required: true },
    { type: 'text', name: 'lastName', label: 'Last Name', required: true },
    { type: 'select', name: 'subscription', label: 'Subscription Plan', options: subscriptionList, required: true },
    { type: 'text', name: 'clinicName', label: 'Clinic Name', required: true },
    { type: 'text', name: 'houseNumberAndStreet', label: 'Address', required: true },
    { type: 'text', name: 'barangay', label: 'Barangay', required: true },
    { type: 'text', name: 'cityOrMunicipality', label: 'City or Municipality', required: true },
    { type: 'text', name: 'province', label: 'Province', required: true },
    { type: 'text', name: 'zip', label: 'Zip Code', required: true },
    { type: 'text', name: 'telephone', label: 'Telephone Number', required: true },
  ];

  console.log(token);
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
    console.log(payload);
    dispatch(createNewAccount({ method: 'post', url: 'account', token, data: payload }));
  };

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.logo_container}>
          <img className={styles.logo} src={mainLogo} alt="logo" />
          <h1 className={styles.company_name}>The Clinic App</h1>
        </div>
        <form className={styles.form_container} onSubmit={onSubmitHandler}>
          {form.map((input) => {
            return (
              <div key={input.name}>
                {input.type === 'text' && (
                  <div className={styles.input_container}>
                    <label htmlFor={input.name}>{input.label}:</label>
                    <input type="text" name={input.name} required={input.required} />
                  </div>
                )}
                {input.type === 'select' && (
                  <div className={styles.input_container}>
                    <label htmlFor={input.name}>{input.label}:</label>
                    <select name={input.name} required={input.required}>
                      <option value="" disabled>
                        -- Select Subscription --
                      </option>
                      {input.options.map((option) => {
                        return (
                          <option key={option._id} value={option.value}>
                            {option.subscriptionName}{' '}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                )}
              </div>
            );
          })}

          <div className={styles.button_container}>
            <button className={styles.btn} type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Processing...' : 'Register'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
