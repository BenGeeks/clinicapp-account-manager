import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NewUserPage from './user-new';
import UserListPage from './user-list';
import EditUserPage from './user-edit';
import ViewUserPage from './user-view';

const UsersPage = () => {
  return (
    <Routes>
      <Route index element={<UserListPage />} />
      <Route path=":id" element={<ViewUserPage />} />
      <Route path="new" element={<NewUserPage />} />
      <Route path="edit/:id" element={<EditUserPage />} />
    </Routes>
  );
};

export default UsersPage;
