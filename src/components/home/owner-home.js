import React from 'react';
import { Routes, Route } from 'react-router-dom';

import styles from './home.module.css';

import Header from './header';
import Footer from './footer';
import SideBar from './side-bar';
import OwnerAccountPage from './owner-account/account';
import SubscriptionList from './subscription/subscription';

const OwnerHomePage = () => {
  return (
    <div className={styles.home_main}>
      <Header />
      <div className={styles.inner_container}>
        <SideBar />
        <Routes>
          <Route index element={<OwnerAccountPage />} />
          <Route path="/account" element={<OwnerAccountPage />} />
          <Route path="/subscription" element={<SubscriptionList />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default OwnerHomePage;
