import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createNewAccount } from '../../store/slices/account';

import mainLogo from '../../assets/images/mainLogo.png';
import loaderGif from '../../assets/images/loader.gif';
import styles from './register.module.css';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const { token } = useParams();
  const status = useSelector((state) => state.account.status);

  useEffect(() => {
    if (status === 'success') {
      setTimeout(() => window.location.replace('https://account.clinicapp.online/'), 500);
    }
  }, [dispatch, status]);

  let form = [
    { type: 'password', name: 'password', label: 'Verify Password', required: true },
    { type: 'text', name: 'clinicName', label: 'Clinic Name', required: true },
    { type: 'text', name: 'houseNumberAndStreet', label: 'Address', required: true },
    { type: 'text', name: 'barangay', label: 'Barangay', required: true },
    { type: 'text', name: 'cityOrMunicipality', label: 'City or Municipality', required: true },
    { type: 'text', name: 'province', label: 'Province', required: true },
    { type: 'text', name: 'zip', label: 'Zip Code', required: true },
    { type: 'text', name: 'telephone', label: 'Telephone Number', required: true },
  ];

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let payload = {};
    const data = new FormData(event.target);
    [...data.entries()].forEach((input) => {
      payload[input[0]] = input[1];
    });
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
              <div key={input.name} className={styles.input_container}>
                <label htmlFor={input.name}>{input.label}:</label>
                <input type={input.type} name={input.name} required={input.required} placeholder={input.label} />
              </div>
            );
          })}

          <div className={styles.button_container}>
            <button className={styles.btn} type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? (
                <span>
                  <img src={loaderGif} className={styles.loader_gif} alt="loader" />
                  Processing...
                </span>
              ) : (
                'Register'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
