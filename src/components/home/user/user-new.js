import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getAccountList } from '../../../store/slices/account';
import { getUserOptions } from '../../../store/slices/user';

import ReactForm from '../../../assets/react-form';
import { SCHEMA_OWNER, SCHEMA_SUPERUSER, INPUTLIST_SUPERUSER, INPUTLIST_OWNER } from './resources';

const NewUserPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, access } = useSelector((state) => state.user.userData);
  const status = useSelector((state) => state.user.status);
  const { department, position, role } = useSelector((state) => state.user.userOptions);
  const accountList = useSelector((state) => state.account.accountList);

  useEffect(() => {
    dispatch(getAccountList({ method: 'get', url: 'accounts', token }));
    dispatch(getUserOptions({ method: 'get', url: 'user/options', token }));
  }, [dispatch, token]);

  useEffect(() => {
    status === 'success' && navigate('/user');
  }, [status, navigate]);

  const onSubmitHandler = (payload) => {
    // dispatch(createNewSubscription({ method: 'post', url: 'user', token, data: payload }));
  };

  const onCancelHandler = () => {
    if (window.confirm('Are you sure you want to cancel')) {
      navigate('/user');
    }
  };

  let departmentOptions = department.map((item) => {
    return { value: item._id, label: item.department };
  });
  let positionOptions = position.map((item) => {
    return { value: item._id, label: item.position };
  });
  let roleOptions = role.map((item) => {
    return { value: item._id, label: item.role };
  });

  console.log('USER OPTIONS: ', departmentOptions, positionOptions, roleOptions);

  let updatedList = INPUTLIST_SUPERUSER.map((data) => {
    if (data.name === 'accountName') {
      return { ...data, options: accountList };
    } else if (data.name === 'department') {
      return { ...data, options: departmentOptions };
    } else if (data.name === 'position') {
      return { ...data, options: positionOptions };
    } else if (data.name === 'role') {
      return { ...data, options: roleOptions };
    } else {
      return data;
    }
  });
  return (
    <>
      <ReactForm
        title={'Add New User'}
        layout={access === 'owner' ? INPUTLIST_OWNER : updatedList}
        schema={access === 'owner' ? SCHEMA_OWNER : SCHEMA_SUPERUSER}
        onCancel={onCancelHandler}
        onSubmit={onSubmitHandler}
      />
    </>
  );
};

export default NewUserPage;
