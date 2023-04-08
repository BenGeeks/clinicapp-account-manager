import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getSubscriptionList } from '../../../store/slices/subscription';

import styles from './subscription-list.module.css';
import Table from '../../../assets/table';

const SubscriptionList = () => {
  const dispatch = useDispatch();
  const subscriptionList = useSelector((state) => state.subscription.subscriptionList);

  useEffect(() => {
    dispatch(getSubscriptionList({ method: 'get', url: 'accounts/subscriptions' }));
  }, [dispatch]);

  const tableHeader = [
    { label: 'Name', name: 'subscriptionName', type: 'text' },
    { label: 'Clinic Limit', name: 'clinicSiteLimit', type: 'text' },
    { label: 'User Limit', name: 'userLimit', type: 'text' },
    { label: 'Chart Limit', name: 'chartLimit', type: 'text' },
  ];

  return (
    <div className={styles.main_page}>
      <div className={styles.header_bar}>
        <h2 className={styles.page_header}>Subscriptions</h2>
        <div className={styles.buttons_container}>
          <button className={styles.button1}>Create New Subscription</button>
        </div>
      </div>
      <Table header={tableHeader} data={subscriptionList} />
    </div>
  );
};

export default SubscriptionList;
