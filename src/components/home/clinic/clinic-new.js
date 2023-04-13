import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { createNewClinic } from '../../../store/slices/clinic';

import ReactForm from '../../../assets/react-form';
import { SCHEMA, INPUTS } from './resources';

const NewClinicPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.userData.token);
  const status = useSelector((state) => state.clinic.status);

  useEffect(() => {
    status === 'success' && navigate('/clinic');
  }, [status, navigate]);

  const onSubmitHandler = (payload) => {
    dispatch(createNewClinic({ method: 'post', url: 'clinic', token, data: payload }));
  };

  const onCancelHandler = () => {
    if (window.confirm('Are you sure you want to cancel')) {
      navigate('/clinic');
    }
  };

  return (
    <>
      <ReactForm title={'New Clinic'} layout={INPUTS} schema={SCHEMA} onCancel={onCancelHandler} onSubmit={onSubmitHandler} />
    </>
  );
};

export default NewClinicPage;
