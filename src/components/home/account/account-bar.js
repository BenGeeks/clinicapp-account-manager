import React from 'react';
import styles from './account-bar.module.css';
import { useSelector } from 'react-redux';

const AccountBar = () => {
  const accountInfo = useSelector((state) => state.user.accountInfo);

  return (
    <div className={styles.button_bar_container}>
      <h2 className={styles.account_name}>{(accountInfo && accountInfo.businessName) || ''}</h2>
      <div className={styles.buttons_container}>
        <button className={styles.button1}>Create Invoice</button>
        <button className={styles.button2}>Delete Account</button>
        <button className={styles.button1}>Change Subscription</button>
        <button className={styles.button2}>Cancel Subscription</button>
      </div>
    </div>
  );
};

export default AccountBar;
