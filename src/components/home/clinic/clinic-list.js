import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getClinicList } from '../../../store/slices/clinic';

import LoaderGif from '../../../assets/loader-gif';
import ReactTable from '../../../assets/react-table';
import { COLUMNS, COLUMNS2 } from './resources';

const ClinicListPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clinicList = useSelector((state) => state.clinic.clinicList);
  const status = useSelector((state) => state.clinic.status);
  const { token, access } = useSelector((state) => state.user.userData);

  useEffect(() => {
    dispatch(getClinicList({ method: 'get', url: 'clinic', token }));
  }, [dispatch, token]);

  const onEditHandler = (id) => {
    navigate(`/clinic/edit/${id}`);
  };

  const onAddNewHandler = () => {
    navigate('/clinic/new');
  };

  const onViewHandler = (id) => {
    navigate(`/clinic/${id}`);
  };

  return (
    <>
      {status === 'loading' ? (
        <LoaderGif />
      ) : (
        <ReactTable
          COLUMNS={access === 'owner' ? COLUMNS2 : COLUMNS}
          DATA={clinicList}
          title={'Clinic List'}
          enableEdit={true}
          enableAddNew={true}
          enableDelete={false}
          enableView={true}
          onEdit={onEditHandler}
          onAddNew={onAddNewHandler}
          onView={onViewHandler}
        />
      )}
    </>
  );
};

export default ClinicListPage;
