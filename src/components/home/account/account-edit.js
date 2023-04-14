import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

import { getAccountData, updateAccount } from '../../../store/slices/account';
import { getSubscriptionList } from '../../../store/slices/subscription';

import ReactForm from '../../../assets/react-form';
import LoaderGif from '../../../assets/loader-gif';
import { SCHEMA, INPUTLIST } from './resources';

const EditAccountPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accountData = useSelector((state) => state.account.accountData);
  const status = useSelector((state) => state.account.status);
  const token = useSelector((state) => state.user.userData.token);
  const subscriptionList = useSelector((state) => (state.subscription && state.subscription.subscriptionList ? state.subscription.subscriptionList : []));
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    dispatch(getAccountData({ method: 'get', url: `account/${id}`, token }));
    dispatch(getSubscriptionList({ method: 'get', url: 'subscription' }));
  }, [dispatch, token, id]);

  useEffect(() => {
    status === 'success' && isSubmitted === true && navigate('/account');
  }, [status, navigate, isSubmitted]);

  const onSubmitHandler = (payload) => {
    dispatch(updateAccount({ method: 'patch', url: `account/${id}`, token, data: payload }));
    setIsSubmitted(true);
  };

  const onCancelHandler = () => {
    if (window.confirm('Are you sure you want to cancel')) {
      navigate('/account');
    }
  };

  let updatedList = INPUTLIST.map((data) => {
    if (data.name === 'subscription') {
      return { ...data, options: subscriptionList };
    } else {
      return data;
    }
  });

  console.log(updatedList);
  return (
    <>
      {status === 'loading' ? (
        <LoaderGif />
      ) : (
        <ReactForm
          title={'Edit Account'}
          layout={updatedList}
          schema={SCHEMA}
          onCancel={onCancelHandler}
          onSubmit={onSubmitHandler}
          defaultValues={{ ...accountData, dueDate: moment(accountData.dueDate).format('yyyy-MM-DD') }}
        />
      )}
    </>
  );
};

export default EditAccountPage;
