import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './side-bar.module.css';

import { AiOutlineAppstoreAdd, AiOutlineDashboard } from 'react-icons/ai';
import { FaRegHospital, FaCubes } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { MdOutlinePayments } from 'react-icons/md';
import { useSelector } from 'react-redux';

const SideBar = () => {
  const location = useLocation().pathname;
  const access = useSelector((state) => state.user.userData.access);
  return (
    <div className={styles.side_bar}>
      {access !== 'owner' && (
        <Link to="/dashboard">
          <div className={location === '/dashboard' ? styles.icon_container_active : styles.icon_container} title="dashboard">
            <div className={styles.icon}>
              <AiOutlineDashboard />
            </div>
          </div>
        </Link>
      )}
      <Link to="/account">
        <div className={location === '/account' ? styles.icon_container_active : styles.icon_container} title="account">
          <div className={styles.icon}>
            <AiOutlineAppstoreAdd />
          </div>
        </div>
      </Link>
      <Link to="/clinic">
        <div className={location === '/clinics' ? styles.icon_container_active : styles.icon_container} title="clinics">
          <div className={styles.icon}>
            <FaRegHospital />
          </div>
        </div>
      </Link>
      <Link to="/user">
        <div className={location === '/users' ? styles.icon_container_active : styles.icon_container} title="users">
          <div className={styles.icon}>
            <FiUsers />
          </div>
        </div>
      </Link>
      <Link to="/invoice">
        <div className={location === '/invoice' ? styles.icon_container_active : styles.icon_container} title="invoice">
          <div className={styles.icon}>
            <MdOutlinePayments />
          </div>
        </div>
      </Link>
      <Link to="/subscription">
        <div className={location === '/subscription' ? styles.icon_container_active : styles.icon_container} title="subscription">
          <div className={styles.icon}>
            <FaCubes />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SideBar;
