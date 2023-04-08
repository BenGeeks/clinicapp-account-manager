import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getClinicList } from '../../../store/slices/clinic';

import styles from './clinic-list.module.css';
import Table from '../../../assets/table';

const ClinicList = () => {
  const dispatch = useDispatch();
  const clinicList = useSelector((state) => state.clinic.clinicList);
  const token = useSelector((state) => state.user.userData.token);

  useEffect(() => {
    dispatch(getClinicList({ method: 'get', url: 'accounts/clinic', token }));
  }, [dispatch, token]);

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
    <div className={styles.main_page}>
      <div className={styles.header_bar}>
        <h2 className={styles.page_header}>Subscriptions</h2>
        <div className={styles.buttons_container}>
          <button className={styles.button1}>Create New Subscription</button>
        </div>
      </div>
      <Table header={tableHeader} data={clinicList} />
    </div>
  );
};

export default ClinicList;
