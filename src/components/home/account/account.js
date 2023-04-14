import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AccountListPage from './account-list';
import EditAccountPage from './account-edit';
import ViewAccountPage from './account-view';

const AccountPage = () => {
  return (
    <Routes>
      <Route index element={<AccountListPage />} />
      <Route path=":id" element={<ViewAccountPage />} />
      <Route path="edit/:id" element={<EditAccountPage />} />
    </Routes>
  );
};

export default AccountPage;
