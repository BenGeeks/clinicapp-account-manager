import React from 'react';
import { Routes, Route } from 'react-router-dom';

import styles from './home.module.css';

import Header from './header';
import Footer from './footer';
import SideBar from './side-bar';
import Redirect from './redirect';
import OwnerAccountPage from './owner-account/account';
import SubscriptionPage from './subscription/subscription';
import ClinicPage from './clinic/clinic';
import UsersPage from './user/user';
import InvoicePage from './invoice/invoice';

const OwnerHomePage = () => {
  return (
    <div className={styles.home_main}>
      <Header />
      <div className={styles.inner_container}>
        <SideBar />
        <Routes>
          <Route index element={<OwnerAccountPage />} />
          <Route path="/account" element={<OwnerAccountPage />} />
          <Route path="/clinic" element={<ClinicPage />} />
          <Route path="/user" element={<UsersPage />} />
          <Route path="/invoice" element={<InvoicePage />} />
          <Route path="/subscription" element={<SubscriptionPage />} />
          <Route path="*" element={<Redirect />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default OwnerHomePage;
