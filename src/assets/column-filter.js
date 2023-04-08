import React from 'react';

import styles from './column-filter.module.css';

const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <div className={styles.input_container}>
      <input value={filterValue || ''} onChange={(e) => setFilter(e.target.value)} className={styles.input} />
    </div>
  );
};

export default ColumnFilter;
