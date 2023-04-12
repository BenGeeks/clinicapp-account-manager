import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './home.module.css';

import Header from './header';
import Footer from './footer';
import SideBar from './side-bar';

import OwnerAccountPage from './owner-account/account';

import SubscriptionPage from './subscription/subscription';
import ClinicPage from './clinic/clinic';
import UsersPage from './user/user';
import InvoicePage from './invoice/invoice';
import AccountPage from './account/account';
import DashboardPage from './dashboard/dashboard';

import EditAccountPage from './account/account-edit';
import EditClinicPage from './clinic/clinic-edit';

const OWNER = 'owner';
const SUPPORT = 'support';
const SUPERUSER = 'superuser';

const HomePage = () => {
  const access = useSelector((state) => state.user.userData.access);

  return (
    <div className={styles.home_main}>
      <Header />
      <div className={styles.inner_container}>
        <SideBar />
        <Routes>
          {access === OWNER && (
            <>
              <Route index element={<OwnerAccountPage />} />
              <Route path="/account" element={<OwnerAccountPage />} />
            </>
          )}
          {(access === SUPPORT || access === SUPERUSER) && (
            <>
              <Route index element={<DashboardPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/account" element={<AccountPage />} />
            </>
          )}
          <Route path="/clinic/*" element={<ClinicPage />} />
          <Route path="/user" element={<UsersPage />} />
          <Route path="/invoice" element={<InvoicePage />} />
          <Route path="/subscription" element={<SubscriptionPage />} />

          <Route path="/account/edit/:id" element={<EditAccountPage />} />
          <Route path="/clinic/edit/:id" element={<EditClinicPage />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
