import React from 'react';
import { useSelector } from 'react-redux';

import AccountBar from './account-bar';
import AccountInfo from './account-info';

import styles from './account.module.css';

const OwnerAccountPage = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const subscriptionInfo = useSelector((state) => state.user.subscriptionInfo);
  const accountInfo = useSelector((state) => state.user.accountInfo);

  return (
    <div className={styles.account_container}>
      <AccountBar accountInfo={accountInfo} />
      <AccountInfo userInfo={userInfo} subscriptionInfo={subscriptionInfo} accountInfo={accountInfo} />
    </div>
  );
};

export default OwnerAccountPage;
