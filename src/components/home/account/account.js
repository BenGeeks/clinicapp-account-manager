import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { getAccountList } from '../../../store/slices/account';

import ReactTable from '../../../assets/react-table';
import ColumnFilter from '../../../assets/column-filter';

const AccountPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accountList = useSelector((state) => state.account.accountList);
  const token = useSelector((state) => state.user.userData.token);

  const COLUMNS = [
    { Header: 'Business Name', accessor: 'businessName', Filter: ColumnFilter },
    { Header: 'Status', accessor: 'status', Filter: ColumnFilter },
    { Header: 'Owner', accessor: 'owner', Filter: ColumnFilter },
    { Header: 'Email Address', accessor: 'emailAddress', Filter: ColumnFilter },
    { Header: 'Phone', accessor: 'mobileNumber', Filter: ColumnFilter },
    { Header: 'Amount Due', accessor: 'amountDue', Filter: ColumnFilter },
    {
      Header: 'Due',
      accessor: 'dueDate',
      Filter: ColumnFilter,
      Cell: ({ value }) => {
        return moment(value).format('MMM DD, yyyy');
      },
    },
    { Header: 'Over Due', accessor: 'overDue', Filter: ColumnFilter },
  ];

  useEffect(() => {
    dispatch(getAccountList({ method: 'get', url: 'account', token }));
  }, [dispatch, token]);

  const onEditHandler = (id) => {
    navigate(`/account/edit/${id}`);
  };

  return (
    <>
      <ReactTable COLUMNS={COLUMNS} DATA={accountList} title={'Account List'} enableEdit={true} enableDelete={false} onEdit={onEditHandler} />
    </>
  );
};

export default AccountPage;
