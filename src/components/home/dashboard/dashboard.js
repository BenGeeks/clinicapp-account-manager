import React from 'react';

import styles from './dashboard.module.css';

const DashboardPage = () => {
  return (
    <div className={styles.main_page}>
      <div className={styles.header_bar}>
        <h2 className={styles.page_header}>Dashboard</h2>
      </div>
    </div>
  );
};

export default DashboardPage;
