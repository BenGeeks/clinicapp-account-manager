import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogOut } from '../../store/slices/user';

import mainLogo from '../../assets/images/clinicapp_logo.png';
import styles from './header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.userData._id);
  const token = useSelector((state) => state.user.userData.token);

  const userLogoutHandler = () => {
    dispatch(userLogOut({ method: 'post', url: `user/logout/${userId}`, token }));
  };

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <div className={styles.company_info_container}>
          <img className={styles.company_logo} src={mainLogo} alt="logo" />
        </div>
        <div className={styles.btn_container}>
          <button className={`${styles.btn} ${styles.btn_primary}`}>App</button>
          <button className={`${styles.btn} ${styles.btn_danger}`} onClick={userLogoutHandler}>
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
