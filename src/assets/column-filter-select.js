import React from 'react';

import styles from './column-filter.module.css';

const ColumnFilterSelect = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <div className={styles.input_container}>
      <select value={filterValue || ''} onChange={(e) => setFilter(e.target.value)} className={styles.input}>
        <option value="true">🟢</option>
        <option value="false">🔴</option>
      </select>
    </div>
  );
};

export default ColumnFilterSelect;
