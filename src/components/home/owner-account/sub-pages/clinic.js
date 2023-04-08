import React from 'react';

import styles from './/clinic.module.css';

import Table from '../../../../assets/table';

const Clinic = ({ clinicList }) => {
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
    <div className={styles.container}>
      <div className={styles.header_bar}>
        <h1>Clinics</h1>
        <div className={styles.btn_container}>
          <button className={`${styles.btn} ${styles.btn_success}`}>Add New</button>
        </div>
      </div>

      <Table header={tableHeader} data={clinicList} />
    </div>
  );
};

export default Clinic;
