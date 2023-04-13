import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getClinicList } from '../../../store/slices/clinic';

import ReactTable from '../../../assets/react-table';
import { COLUMNS } from './resources';

const ClinicListPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clinicList = useSelector((state) => state.clinic.clinicList);
  const token = useSelector((state) => state.user.userData.token);

  useEffect(() => {
    dispatch(getClinicList({ method: 'get', url: 'clinic', token }));
  }, [dispatch, token]);

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
