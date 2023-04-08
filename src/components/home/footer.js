import React from 'react';

import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <p className={styles.footer_text}>Copyright &copy; 2023 ClinicApp.online All rights reserved.</p>
    </footer>
  );
};

export default Footer;
