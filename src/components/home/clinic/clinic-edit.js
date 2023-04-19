import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getClinicData, updateClinic } from '../../../store/slices/clinic';
import { getAccountList } from '../../../store/slices/account';

import ReactForm from '../../../assets/react-form';
import LoaderGif from '../../../assets/loader-gif';
import { SCHEMA_SUP, SCHEMA_OWNER, INPUTLIST_SUP, INPUTLIST_OWNER } from './resources';

const EditClinicPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clinicData = useSelector((state) => state.clinic.clinicData);
  const accountList = useSelector((state) => state.account.accountList);
  const status = useSelector((state) => state.clinic.status);
  const { token, access } = useSelector((state) => state.user.userData);

  console.log(accountList);

  useEffect(() => {
    status === 'success' && navigate('/clinic');
  }, [status, navigate]);

  useEffect(() => {
    dispatch(getClinicData({ method: 'get', url: `clinic/${id}`, token }));
    dispatch(getAccountList({ method: 'get', url: 'accounts', token }));
  }, [dispatch, token, id]);

  const onSubmitHandler = (payload) => {
    dispatch(updateClinic({ method: 'patch', url: `clinic/${id}`, token, data: { ...payload, accountId: clinicData.accountId } }));
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
      {status === 'loading' ? (
        <LoaderGif />
      ) : (
        <ReactForm
          title={'Edit Clinic'}
          layout={access === 'owner' ? INPUTLIST_OWNER : updatedList}
          schema={access === 'owner' ? SCHEMA_OWNER : SCHEMA_SUP}
          onCancel={onCancelHandler}
          onSubmit={onSubmitHandler}
          defaultValues={clinicData}
        />
      )}
    </>
  );
};

export default EditClinicPage;
