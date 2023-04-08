import React from 'react';

import styles from './invoice.module.css';

import Table from '../../../../assets/table';

const Invoice = ({ invoiceList }) => {
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
    <div className={styles.container}>
      <div className={styles.header_bar}>
        <h1>Invoices</h1>
        <div className={styles.btn_container}>
          <button className={`${styles.btn} ${styles.btn_success}`}>Add New</button>
        </div>
      </div>

      <Table header={tableHeader} data={invoiceList} />
    </div>
  );
};

export default Invoice;
