import React from 'react';
import { Routes, Route } from 'react-router-dom';

import SubscriptionListPage from './subscription-list';
import NewSubscriptionPage from './subscription-new';
import EditSubscriptionPage from './subscription-edit';

const SubscriptionPage = () => {
  return (
    <Routes>
      <Route index element={<SubscriptionListPage />} />
      <Route path="new" element={<NewSubscriptionPage />} />
      <Route path="edit/:id" element={<EditSubscriptionPage />} />
    </Routes>
  );
};

export default SubscriptionPage;
