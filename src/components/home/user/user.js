import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserList } from '../../../store/slices/user';

import ReactTable from '../../../assets/react-table';
import ColumnFilter from '../../../assets/column-filter';

const UsersPage = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.user.userList);
  const access = useSelector((state) => state.user.userData.access);
  const token = useSelector((state) => state.user.userData.token);

  useEffect(() => {
    dispatch(getUserList({ method: 'get', url: 'user', token }));
  }, [dispatch, token]);

  const COLUMNS = [
    { Header: 'Name', accessor: 'name', Filter: ColumnFilter },
    { Header: 'Email Address', accessor: 'emailAddress', Filter: ColumnFilter },
    { Header: 'Phone Number', accessor: 'mobileNumber', Filter: ColumnFilter },
    { Header: 'Access', accessor: 'access', Filter: ColumnFilter },
    { Header: 'Role', accessor: 'role', Filter: ColumnFilter },
    { Header: 'Department', accessor: 'department', Filter: ColumnFilter },
    { Header: 'Position', accessor: 'position', Filter: ColumnFilter },
    { Header: 'Is Active', accessor: 'isActive', Filter: ColumnFilter },
  ];

  const COLUMNS2 = [
    { Header: 'Name', accessor: 'name', Filter: ColumnFilter },
    { Header: 'Business Name', accessor: 'businessName', Filter: ColumnFilter },
    { Header: 'Email Address', accessor: 'emailAddress', Filter: ColumnFilter },
    { Header: 'Phone Number', accessor: 'mobileNumber', Filter: ColumnFilter },
    { Header: 'Access', accessor: 'access', Filter: ColumnFilter },
    { Header: 'Role', accessor: 'role', Filter: ColumnFilter },
    { Header: 'Is Active', accessor: 'isActive', Filter: ColumnFilter },
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
