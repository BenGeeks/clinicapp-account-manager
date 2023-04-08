import React from 'react';

import styles from './account.module.css';
import Table from '../../../assets/table';

const AccountPage = () => {
  const tableHeader = [
    { label: 'Date Created', name: 'accountCreated', type: 'text' },
    { label: 'Account ID', name: 'accountId', type: 'text' },
    { label: 'Name', name: 'accountName', type: 'text' },
    { label: 'Status', name: 'accountStatus', type: 'text' },
    { label: 'Owner', name: 'accountOwner', type: 'text' },
    { label: 'Email Address', name: 'emailAddress', type: 'text' },
    { label: 'Phone', name: 'telephone', type: 'text' },
  ];

  return (
    <div className={styles.main_page}>
      <div className={styles.header_bar}>
        <h2 className={styles.page_header}>Accounts List</h2>
        <div className={styles.buttons_container}>
          <button className={styles.button1}>Create New Account</button>
        </div>
      </div>
      <Table header={tableHeader} data={[]} />
    </div>
  );
};

export default AccountPage;
