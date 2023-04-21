import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserList } from '../../../store/slices/user';
import { useNavigate } from 'react-router-dom';

import ReactTable from '../../../assets/react-table';
import { COLUMNS, COLUMNS2 } from './resources';

const UserListPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userList = useSelector((state) => state.user.userList);
  const access = useSelector((state) => state.user.userData.access);
  const token = useSelector((state) => state.user.userData.token);

  useEffect(() => {
    dispatch(getUserList({ method: 'get', url: 'users', token }));
  }, [dispatch, token]);

  const onEditHandler = (id) => {
    navigate(`/user/edit/${id}`);
  };

  const onDeleteHandler = (id) => {
    // navigate(`/account/edit/${id}`);
  };

  const onAddNewHandler = () => {
    navigate('/user/new');
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

export default UserListPage;
