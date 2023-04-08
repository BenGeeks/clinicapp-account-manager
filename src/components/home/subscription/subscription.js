import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSubscriptionList } from '../../../store/slices/subscription';

import ReactTable from '../../../assets/react-table';
import ColumnFilter from '../../../assets/column-filter';

import styles from './subscription.module.css';

const SubscriptionPage = () => {
  const dispatch = useDispatch();
  const subscriptionList = useSelector((state) => state.subscription.subscriptionList);
  const access = useSelector((state) => state.user.userData.access);

  useEffect(() => {
    dispatch(getSubscriptionList({ method: 'get', url: 'accounts/subscriptions' }));
  }, [dispatch]);

  const COLUMNS = [
    { Header: 'Name', accessor: 'subscriptionName', Filter: ColumnFilter },
    { Header: 'Clinic Limit', accessor: 'clinicSiteLimit', Filter: ColumnFilter },
    { Header: 'User Limit', accessor: 'userLimit', Filter: ColumnFilter },
    { Header: 'Chart Limit', accessor: 'chartLimit', Filter: ColumnFilter },
  ];

  return (
    <div className={styles.main_page}>
      <div className={styles.header_bar}>
        <h2 className={styles.page_header}>Subscriptions</h2>
        <div className={styles.buttons_container}>{access !== 'owner' && <button className={styles.button1}>Create New Subscription</button>}</div>
      </div>
      <ReactTable COLUMNS={COLUMNS} DATA={subscriptionList} enableFilter={false} />
    </div>
  );
};

export default SubscriptionPage;
