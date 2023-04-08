import React from 'react';
import { useSelector } from 'react-redux';

import AccountBar from './account-bar';
import AccountInfo from './account-info';
import Table from '../../../assets/table';

import styles from './account.module.css';

const AccountPage = () => {
  const clinicList = useSelector((state) => state.user.clinicList);
  const tableHeader = [
    { label: 'Clinic Name', name: 'clinicName', type: 'text' },
    { label: 'Name', name: 'houseNumberAndStreet', type: 'text' },
    { label: 'Barangay', name: 'barangay', type: 'text' },
    { label: 'City', name: 'cityOrMunicipality', type: 'text' },
    { label: 'Province', name: 'province', type: 'text' },
    { label: 'Zip', name: 'zip', type: 'text' },
    { label: 'Phone', name: 'telephone', type: 'text' },
  ];

  return (
    <div className={styles.account_container}>
      <AccountBar />
      <AccountInfo />
      <Table header={tableHeader} data={clinicList} />
    </div>
  );
};

export default AccountPage;
