import React from 'react';

import AccountBar from './account-bar';
import AccountInfo from './account-info';

import styles from './account.module.css';

const OwnerAccountPage = () => {
  return (
    <div className={styles.account_container}>
      <AccountBar />
      <AccountInfo />
    </div>
  );
};

export default OwnerAccountPage;
