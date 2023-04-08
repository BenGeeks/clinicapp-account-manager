import React from 'react';

import styles from './nav-bar.module.css';

const NavBar = ({ navPage, setNavPage }) => {
  return (
    <nav className={styles.nav_container}>
      <div className={`${navPage === 'summary' ? styles.nav_active : styles.nav}`} onClick={() => setNavPage('summary')}>
        Summary
      </div>
      <div className={`${navPage === 'clinic' ? styles.nav_active : styles.nav}`} onClick={() => setNavPage('clinic')}>
        Clinic List
      </div>
      <div className={`${navPage === 'invoice' ? styles.nav_active : styles.nav}`} onClick={() => setNavPage('invoice')}>
        Invoices
      </div>
    </nav>
  );
};

export default NavBar;
