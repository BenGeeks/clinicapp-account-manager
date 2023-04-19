import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogOut } from '../../store/slices/user';
import { useNavigate } from 'react-router-dom';

import mainLogo from '../../assets/images/clinicapp_logo.png';
import styles from './header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((state) => state.user.userData._id);
  const token = useSelector((state) => state.user.userData.token);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const userLogoutHandler = () => {
    if (isLoggedIn) {
      dispatch(userLogOut({ method: 'post', url: `user/logout/${userId}`, token }));
    } else {
      navigate('/');
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <div className={styles.company_info_container}>
          <img className={styles.company_logo} src={mainLogo} alt="logo" />
        </div>
        <div className={styles.btn_container}>
          <NavLink to="https://clinicapp.online/" className={styles.main_nav}>
            Home
          </NavLink>
          <NavLink to="https://clinicapp.online/register/" className={styles.main_nav}>
            Register
          </NavLink>
          <NavLink to="https://app.clinicapp.online/" className={styles.main_nav}>
            App
          </NavLink>
          <NavLink to="https://clinicapp.online/contact-us/" className={styles.main_nav}>
            Contact Us
          </NavLink>
          <NavLink to="https://clinicapp.online/contact-us/" className={styles.main_nav}>
            About Us
          </NavLink>
          <div className={styles.main_nav} onClick={userLogoutHandler}>
            {isLoggedIn ? 'Logout' : 'Login'}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
