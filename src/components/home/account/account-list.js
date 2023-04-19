import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAccountList } from '../../../store/slices/account';

import ReactTable from '../../../assets/react-table';
import { COLUMNS } from './resources';

const AccountListPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accountList = useSelector((state) => state.account.accountList);
  const token = useSelector((state) => state.user.userData.token);

  useEffect(() => {
    dispatch(getAccountList({ method: 'get', url: 'accounts', token }));
  }, [dispatch, token]);

  const onEditHandler = (id) => {
    navigate(`/account/edit/${id}`);
  };

  const onViewHandler = (id) => {
    navigate(`/account/${id}`);
  };

  return (
    <>
      <ReactTable
        COLUMNS={COLUMNS}
        DATA={accountList}
        title={'Account List'}
        enableEdit={true}
        enableDelete={false}
        enableView={true}
        onEdit={onEditHandler}
        onView={onViewHandler}
      />
    </>
  );
};

export default AccountListPage;
