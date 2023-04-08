import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import AccountBar from './account-bar';
import AccountInfo from './account-info';
import NavBar from './nav-bar';

import Summary from './sub-pages/summary';
import Clinic from './sub-pages/clinic';
import Invoice from './sub-pages/invoice';

import styles from './account.module.css';

const OwnerAccountPage = () => {
  const clinicList = useSelector((state) => state.user.clinicList);
  const [navPage, setNavPage] = useState('summary');

  return (
    <div className={styles.account_container}>
      <AccountBar />
      <AccountInfo />
      <NavBar navPage={navPage} setNavPage={setNavPage} />
      {navPage === 'summary' && <Summary />}
      {navPage === 'clinic' && <Clinic clinicList={clinicList} />}
      {navPage === 'invoice' && <Invoice />}
    </div>
  );
};

export default OwnerAccountPage;
