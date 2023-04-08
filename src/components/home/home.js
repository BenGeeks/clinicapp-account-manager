import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './home.module.css';

import Header from './header';
import Footer from './footer';
import SideBar from './side-bar';
import AccountPage from './account/account';
import AccountListPage from './accounts';
import Redirect from './redirect';
import SubscriptionList from './subscription/subscription-list';
import ClinicList from './clinic/clinic-list';

const HomePage = () => {
  const access = useSelector((state) => state.user.userData.access);

  return (
    <div className={styles.home_main}>
      <Header />
      <div className={styles.inner_container}>
        <SideBar />
        <Routes>
          {access === 'owner' && <Route index element={<AccountPage />} />}
          {(access === 'superuser' || access === 'support') && <Route index element={<AccountListPage />} />}
          <Route path="/subscription" element={<SubscriptionList />} />
          <Route path="/clinic" element={<ClinicList />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/account/:id" element={<AccountPage />} />
          <Route path="*" element={<Redirect />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
