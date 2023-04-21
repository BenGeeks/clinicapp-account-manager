import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getSubscriptionList, deleteSubscription } from '../../../store/slices/subscription';

import ReactTable from '../../../assets/react-table';
import { COLUMNS } from './resources';

const SubscriptionListPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const subscriptionList = useSelector((state) => state.subscription.subscriptionList);
  const token = useSelector((state) => state.user.userData.token);
  const access = useSelector((state) => state.user.userData.access);

  useEffect(() => {
    dispatch(getSubscriptionList({ method: 'get', url: 'subscriptions' }));
  }, [dispatch]);

  const onEditHandler = (id) => {
    navigate(`/subscription/edit/${id}`);
  };

  const onAddNewHandler = () => {
    navigate('/subscription/new');
  };

  const onDeleteHandler = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      dispatch(deleteSubscription({ method: 'delete', url: `subscription/${id}`, token }));
    }
  };

  return (
    <>
      <ReactTable
        COLUMNS={COLUMNS}
        DATA={subscriptionList}
        title={'Subscription List'}
        enableFilter={false}
        enableEdit={access === 'owner' ? false : true}
        enableDelete={access === 'owner' ? false : true}
        enableAddNew={access === 'owner' ? false : true}
        onEdit={onEditHandler}
        onDelete={onDeleteHandler}
        onAddNew={onAddNewHandler}
      />
    </>
  );
};

export default SubscriptionListPage;
