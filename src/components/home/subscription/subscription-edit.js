import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getSubscriptionData, updateSubscription } from '../../../store/slices/subscription';

import ReactForm from '../../../assets/react-form';
import LoaderGif from '../../../assets/loader-gif';
import { SCHEMA, INPUTLIST } from './resources';

const EditSubscriptionPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const subscriptionData = useSelector((state) => state.subscription.subscriptionData);
  const status = useSelector((state) => state.subscription.status);
  const token = useSelector((state) => state.user.userData.token);

  useEffect(() => {
    status === 'success' && navigate('/subscription');
  }, [status, navigate]);

  useEffect(() => {
    dispatch(getSubscriptionData({ method: 'get', url: `subscription/${id}`, token }));
  }, [dispatch, token, id]);

  const onSubmitHandler = (payload) => {
    dispatch(updateSubscription({ method: 'patch', url: `subscription/${id}`, token, data: payload }));
  };

  const onCancelHandler = () => {
    if (window.confirm('Are you sure you want to cancel')) {
      navigate('/subscription');
    }
  };

  return (
    <>
      {status === 'loading' ? (
        <LoaderGif />
      ) : (
        <ReactForm
          title={'Edit Subscription'}
          layout={INPUTLIST}
          schema={SCHEMA}
          onCancel={onCancelHandler}
          onSubmit={onSubmitHandler}
          defaultValues={subscriptionData}
        />
      )}
    </>
  );
};

export default EditSubscriptionPage;
