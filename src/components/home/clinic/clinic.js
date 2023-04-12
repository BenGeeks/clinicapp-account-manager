import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ClinicListPage from './clinic-list';
import NewClinicPage from './clinic-new';
import EditClinicPage from './clinic-edit';

const ClinicPage = () => {
  return (
    <Routes>
      <Route index element={<ClinicListPage />} />
      <Route path="new" element={<NewClinicPage />} />
      <Route path="edit/:id" element={<EditClinicPage />} />
    </Routes>
  );
};

export default ClinicPage;
