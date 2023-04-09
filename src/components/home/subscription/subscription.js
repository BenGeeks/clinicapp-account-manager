import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSubscriptionList } from '../../../store/slices/subscription';

import ReactTable from '../../../assets/react-table';
import ColumnFilter from '../../../assets/column-filter';

const SubscriptionPage = () => {
  const dispatch = useDispatch();
  const subscriptionList = useSelector((state) => state.subscription.subscriptionList);
  const access = useSelector((state) => state.user.userData.access);

  useEffect(() => {
    dispatch(getSubscriptionList({ method: 'get', url: 'accounts/subscriptions' }));
  }, [dispatch]);

  const COLUMNS = [
    { Header: 'Name', accessor: 'subscriptionName', Filter: ColumnFilter },
    { Header: 'Clinic Limit', accessor: 'clinicSiteLimit', Filter: ColumnFilter },
    { Header: 'User Limit', accessor: 'userLimit', Filter: ColumnFilter },
    { Header: 'Patients per Day', accessor: 'chartLimit', Filter: ColumnFilter },
    { Header: 'Price per Month', accessor: 'price', Filter: ColumnFilter },
  ];

  const onEditHandler = (id) => {
    // navigate(`/account/edit/${id}`);
  };

  const onDeleteHandler = (id) => {
    // navigate(`/account/edit/${id}`);
  };

  const onAddNewHandler = () => {
    // navigate(`/account/edit/${id}`);
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

export default SubscriptionPage;
