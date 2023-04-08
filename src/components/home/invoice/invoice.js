import React from 'react';

import styles from './invoice.module.css';

import Table from '../../../assets/table';

const InvoicePage = () => {
  const tableHeader = [
    { label: 'Reference Number', name: 'reference', type: 'text' },
    { label: 'Description', name: 'description', type: 'text' },
    { label: 'Due Date', name: 'dueData', type: 'text' },
    { label: 'Date Paid', name: 'dataPaid', type: 'text' },
    { label: 'Status', name: 'status', type: 'text' },
    { label: 'Sub Total', name: 'Tax', type: 'text' },
    { label: 'Total', name: 'total', type: 'text' },
  ];

  return (
    <div className={styles.main_page}>
      <div className={styles.header_bar}>
        <h2 className={styles.page_header}>Invoice</h2>
        <div className={styles.buttons_container}>
          <button className={styles.button1}>Create New Invoice</button>
        </div>
      </div>
      <Table header={tableHeader} data={[]} />
    </div>
  );
};

export default InvoicePage;
