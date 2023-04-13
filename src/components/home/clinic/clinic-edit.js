import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getClinicData, updateClinic } from '../../../store/slices/clinic';

import ReactForm from '../../../assets/react-form';
import LoaderGif from '../../../assets/loader-gif';
import { SCHEMA, INPUTS } from './resources';

const EditClinicPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clinicData = useSelector((state) => state.clinic.clinicData);
  const status = useSelector((state) => state.clinic.status);
  const token = useSelector((state) => state.user.userData.token);

  useEffect(() => {
    status === 'success' && navigate('/clinic');
  }, [status, navigate]);

  useEffect(() => {
    dispatch(getClinicData({ method: 'get', url: `clinic/${id}`, token }));
  }, [dispatch, token, id]);

  const onSubmitHandler = (payload) => {
    dispatch(updateClinic({ method: 'patch', url: `clinic/${id}`, token, data: { ...payload, accountId: clinicData.accountId } }));
  };

  const onCancelHandler = () => {
    if (window.confirm('Are you sure you want to cancel')) {
      navigate('/clinic');
    }
  };

  return (
    <>
      {status === 'loading' ? (
        <LoaderGif />
      ) : (
        <ReactForm title={'New Clinic'} layout={INPUTS} schema={SCHEMA} onCancel={onCancelHandler} onSubmit={onSubmitHandler} defaultValues={clinicData} />
      )}
    </>
  );
};

export default EditClinicPage;
