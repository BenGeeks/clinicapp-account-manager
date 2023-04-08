import React from 'react';

import styles from './user.module.css';

import Table from '../../../assets/table';

const UsersPage = () => {
  const tableHeader = [
    { label: 'Name', name: 'name', type: 'text' },
    { label: 'Business Name', name: 'businessName', type: 'text' },
    { label: 'UserAccess', name: 'access', type: 'text' },
    { label: 'Email Address', name: 'emailAddress', type: 'text' },
    { label: 'Phone Number', name: 'mobile', type: 'text' },
    { label: 'Is Active', name: 'isActive', type: 'text' },
  ];

  return (
    <div className={styles.main_page}>
      <div className={styles.header_bar}>
        <h2 className={styles.page_header}>Users</h2>
        <div className={styles.buttons_container}>
          <button className={styles.button1}>Add New User</button>
        </div>
      </div>
      <Table header={tableHeader} data={[]} />
    </div>
  );
};

export default UsersPage;
