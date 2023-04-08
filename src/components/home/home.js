import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './home.module.css';

import Header from './header';
import Footer from './footer';
import SideBar from './side-bar';
import OwnerAccountPage from './owner-account/account';
import Redirect from './redirect';

import SubscriptionPage from './subscription/subscription';
import ClinicPage from './clinic/clinic';
import UsersPage from './user/user';
import InvoicePage from './invoice/invoice';
import AccountPage from './account/account';
import DashboardPage from './dashboard/dashboard';

const HomePage = () => {
  const access = useSelector((state) => state.user.userData.access);

  return (
    <div className={styles.home_main}>
      <Header />
      <div className={styles.inner_container}>
        <SideBar />

        <Routes>
          {access === 'owner' && <Route index element={<OwnerAccountPage />} />}
          {(access === 'superuser' || access === 'support') && (
            <>
              <Route index element={<DashboardPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path="/clinic" element={<ClinicPage />} />
              <Route path="/user" element={<UsersPage />} />
              <Route path="/invoice" element={<InvoicePage />} />
            </>
          )}
          <Route path="/subscription" element={<SubscriptionPage />} />
          <Route path="*" element={<Redirect />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
