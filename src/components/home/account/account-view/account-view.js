import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getAccountSummary } from '../../../../store/slices/account';

import LoaderGif from '../../../../assets/loader-gif';
import AccountBar from './account-bar';
import AccountInfo from './account-info';

import styles from './account-view.module.css';

const ViewAccountPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const token = useSelector((state) => state.user.userData.token);
  const { accountInfo, userInfo, subscriptionInfo } = useSelector((state) => state.account.accountSummary);
  const status = useSelector((state) => state.account.status);

  useEffect(() => {
    dispatch(getAccountSummary({ method: 'get', url: `accountsummary/${id}`, token }));
  }, [dispatch, token, id]);

  return (
    <div className={styles.account_container}>
      {status === 'loading' ? (
        <LoaderGif />
      ) : (
        <>
          <AccountBar accountInfo={accountInfo} />
          <AccountInfo userInfo={userInfo} subscriptionInfo={subscriptionInfo} accountInfo={accountInfo} />
        </>
      )}
    </div>
  );
};

export default ViewAccountPage;
