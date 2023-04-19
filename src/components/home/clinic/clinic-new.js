import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { createNewClinic } from '../../../store/slices/clinic';
import { getAccountList } from '../../../store/slices/account';

import ReactForm from '../../../assets/react-form';
import { SCHEMA_SUP, SCHEMA_OWNER, INPUTLIST_SUP, INPUTLIST_OWNER } from './resources';

const NewClinicPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector((state) => state.clinic.status);
  const accountList = useSelector((state) => state.account.accountList);
  const { token, access } = useSelector((state) => state.user.userData);

  useEffect(() => {
    status === 'success' && navigate('/clinic');
  }, [status, navigate]);

  useEffect(() => {
    dispatch(getAccountList({ method: 'get', url: 'accounts', token }));
  }, [dispatch, token]);

  const onSubmitHandler = (payload) => {
    dispatch(createNewClinic({ method: 'post', url: 'clinic', token, data: payload }));
  };

  const onCancelHandler = () => {
    if (window.confirm('Are you sure you want to cancel')) {
      navigate('/clinic');
    }
  };

  let updatedList = INPUTLIST_SUP.map((data) => {
    if (data.name === 'accountId') {
      return { ...data, options: accountList };
    } else {
      return data;
    }
  });

  return (
    <>
      <ReactForm
        title={'New Clinic'}
        layout={access === 'owner' ? INPUTLIST_OWNER : updatedList}
        schema={access === 'owner' ? SCHEMA_OWNER : SCHEMA_SUP}
        onCancel={onCancelHandler}
        onSubmit={onSubmitHandler}
      />
    </>
  );
};

export default NewClinicPage;
