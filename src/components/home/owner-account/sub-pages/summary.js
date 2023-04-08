import React from 'react';

import styles from './summary.module.css';

const Summary = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header_bar}>
        <h1>Summary</h1>
        <div className={styles.btn_container}></div>
      </div>
    </div>
  );
};

export default Summary;
