import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserList } from '../../../store/slices/user';

import ReactTable from '../../../assets/react-table';
import { COLUMNS, COLUMNS2 } from './resources';

const UsersPage = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.user.userList);
  const access = useSelector((state) => state.user.userData.access);
  const token = useSelector((state) => state.user.userData.token);

  useEffect(() => {
    dispatch(getUserList({ method: 'get', url: 'user', token }));
  }, [dispatch, token]);

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
        COLUMNS={access === 'owner' ? COLUMNS : COLUMNS2}
        DATA={userList}
        title={'User List'}
        enableFilter={false}
        enableEdit={true}
        enableDelete={true}
        enableAddNew={true}
        onEdit={onEditHandler}
        onDelete={onDeleteHandler}
        onAddNew={onAddNewHandler}
      />
    </>
  );
};

export default UsersPage;
