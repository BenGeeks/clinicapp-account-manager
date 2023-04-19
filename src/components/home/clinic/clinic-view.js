import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getClinicData, deleteClinic } from '../../../store/slices/clinic';

import ViewPage from '../../../assets/view-page';
import LoaderGif from '../../../assets/loader-gif';
import { INPUTLIST_SUP, INPUTLIST_OWNER } from './resources';

const ViewClinicPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clinicData = useSelector((state) => state.clinic.clinicData);
  const status = useSelector((state) => state.clinic.status);
  const { token, access } = useSelector((state) => state.user.userData);

  useEffect(() => {
    status === 'success' && navigate('/clinic');
  }, [status, navigate]);

  useEffect(() => {
    dispatch(getClinicData({ method: 'get', url: `clinic/${id}`, token }));
  }, [dispatch, token, id]);

  const onDeleteHandler = () => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      dispatch(deleteClinic({ method: 'delete', url: `clinic/${id}`, token }));
    }
  };

  const OnEditHandler = () => {
    navigate(`/clinic/edit/${id}`);
  };

  return (
    <>
      {status === 'loading' ? (
        <LoaderGif />
      ) : (
        <ViewPage
          title={clinicData.clinicName}
          data={clinicData}
          layout={access === 'owner' ? INPUTLIST_OWNER : INPUTLIST_SUP}
          enableEdit={true}
          enableDelete={true}
          onDelete={onDeleteHandler}
          onEdit={OnEditHandler}
        />
      )}
    </>
  );
};

export default ViewClinicPage;
