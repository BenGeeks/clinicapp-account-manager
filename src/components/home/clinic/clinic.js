import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getClinicList } from '../../../store/slices/clinic';

import styles from './clinic.module.css';
import ReactTable from '../../../assets/react-table';
import ColumnFilter from '../../../assets/column-filter';

const ClinicPage = () => {
  const dispatch = useDispatch();
  const clinicList = useSelector((state) => state.clinic.clinicList);
  const token = useSelector((state) => state.user.userData.token);

  useEffect(() => {
    dispatch(getClinicList({ method: 'get', url: 'accounts/clinic', token }));
  }, [dispatch, token]);

  const COLUMNS = [
    { Header: 'Clinic Name', accessor: 'clinicName', Filter: ColumnFilter },
    { Header: 'Address', accessor: 'houseNumberAndStreet', Filter: ColumnFilter },
    { Header: 'Barangay', accessor: 'barangay', Filter: ColumnFilter },
    { Header: 'City', accessor: 'cityOrMunicipality', Filter: ColumnFilter },
    { Header: 'Province', accessor: 'province', Filter: ColumnFilter },
    { Header: 'Zip', accessor: 'zip', Filter: ColumnFilter },
    { Header: 'Phone', accessor: 'telephone', Filter: ColumnFilter },
    // { Header: 'For Date', accessor: 'date', Cell: ({value}) => {return moment(value).format('MMM DD, yyyy')} },
  ];

  return (
    <div className={styles.main_page}>
      <div className={styles.header_bar}>
        <h2 className={styles.page_header}>Clinic List</h2>
        {/* <div className={styles.buttons_container}>
          <button className={styles.button1}>Create New Clinic</button>
        </div> */}
      </div>
      <ReactTable COLUMNS={COLUMNS} DATA={clinicList} enableFilter={true} />
    </div>
  );
};

export default ClinicPage;
