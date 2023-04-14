import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getCompleteAccountData } from '../../../store/slices/account';

import AccountBar from '../owner-account/account-bar';
import AccountInfo from '../owner-account/account-info';

import styles from './account-view.module.css';

const ViewAccountPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const token = useSelector((state) => state.user.userData.token);
  const { accountInfo, userInfo, subscriptionInfo } = useSelector((state) => state.account.completeAccountData);

  useEffect(() => {
    dispatch(getCompleteAccountData({ method: 'get', url: `account/complete/${id}`, token }));
  }, [dispatch, token, id]);

  console.log(subscriptionInfo);
  return (
    <div className={styles.account_container}>
      <AccountBar accountInfo={accountInfo} />
      <AccountInfo userInfo={userInfo} subscriptionInfo={subscriptionInfo} accountInfo={accountInfo} />
    </div>
  );
};

export default ViewAccountPage;
