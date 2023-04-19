import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getSubscriptionData, deleteSubscription } from '../../../store/slices/subscription';

import ViewPage from '../../../assets/view-page';
import LoaderGif from '../../../assets/loader-gif';
import { INPUTLIST } from './resources';

const ViewSubscriptionPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const subscriptionData = useSelector((state) => state.subscription.subscriptionData);
  const status = useSelector((state) => state.subscription.status);
  const token = useSelector((state) => state.user.userData.token);
  const access = useSelector((state) => state.user.userData.access);

  useEffect(() => {
    dispatch(getSubscriptionData({ method: 'get', url: `subscription/${id}`, token }));
  }, [dispatch, token, id]);

  const onDeleteHandler = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      dispatch(deleteSubscription({ method: 'delete', url: `subscription/${id}`, token }));
    }
  };

  const OnEditHandler = () => {
    navigate(`/subscription/edit/${id}`);
  };

  return (
    <>
      {status === 'loading' ? (
        <LoaderGif />
      ) : (
        <ViewPage
          title={subscriptionData.subscriptionName}
          enableEdit={access === 'owner' ? false : true}
          enableDelete={access === 'owner' ? false : true}
          layout={INPUTLIST}
          data={subscriptionData}
          onDelete={onDeleteHandler}
          onEdit={OnEditHandler}
        />
      )}
    </>
  );
};

export default ViewSubscriptionPage;
