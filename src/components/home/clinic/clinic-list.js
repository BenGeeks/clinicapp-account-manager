import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getClinicList } from '../../../store/slices/clinic';

import ReactTable from '../../../assets/react-table';
import ColumnFilter from '../../../assets/column-filter';

const ClinicListPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clinicList = useSelector((state) => state.clinic.clinicList);
  const token = useSelector((state) => state.user.userData.token);

  useEffect(() => {
    dispatch(getClinicList({ method: 'get', url: 'accounts/clinic', token }));
  }, [dispatch, token]);

  const COLUMNS = [
    { Header: 'Clinic Name', accessor: 'clinicName', Filter: ColumnFilter },
    { Header: 'Business Name', accessor: 'businessName', Filter: ColumnFilter },
    { Header: 'Address', accessor: 'houseNumberAndStreet', Filter: ColumnFilter },
    { Header: 'Barangay', accessor: 'barangay', Filter: ColumnFilter },
    { Header: 'City', accessor: 'cityOrMunicipality', Filter: ColumnFilter },
    { Header: 'Province', accessor: 'province', Filter: ColumnFilter },
    { Header: 'Zip', accessor: 'zip', Filter: ColumnFilter },
    { Header: 'Phone', accessor: 'telephone', Filter: ColumnFilter },
  ];

  const onEditHandler = (id) => {
    navigate(`/clinic/edit/${id}`);
  };

  const onAddNewHandler = () => {
    navigate('/clinic/new');
  };

  return (
    <>
      <ReactTable COLUMNS={COLUMNS} DATA={clinicList} title={'Clinic List'} enableEdit={true} enableAddNew={true} enableDelete={false} onEdit={onEditHandler} onAddNew={onAddNewHandler} />
    </>
  );
};

export default ClinicListPage;
