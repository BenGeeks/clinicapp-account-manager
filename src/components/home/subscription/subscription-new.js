import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { createNewSubscription } from '../../../store/slices/subscription';

import ReactForm from '../../../assets/react-form';
import { SCHEMA, INPUTLIST } from './resources';

const NewSubscriptionPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.userData.token);
  const status = useSelector((state) => state.subscription.status);

  useEffect(() => {
    status === 'success' && navigate('/subscription');
  }, [status, navigate]);

  const onSubmitHandler = (payload) => {
    dispatch(createNewSubscription({ method: 'post', url: 'subscription', token, data: payload }));
  };

  const onCancelHandler = () => {
    if (window.confirm('Are you sure you want to cancel')) {
      navigate('/subscription');
    }
  };

  return (
    <>
      <ReactForm title={'Add New Subscription'} layout={INPUTLIST} schema={SCHEMA} onCancel={onCancelHandler} onSubmit={onSubmitHandler} />
    </>
  );
};

export default NewSubscriptionPage;
