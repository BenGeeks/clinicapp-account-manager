import React from 'react';
import { Link } from 'react-router-dom';

import styles from './side-bar.module.css';

import { AiOutlineAppstoreAdd, AiOutlineDashboard } from 'react-icons/ai';
import { FaRegHospital, FaCubes } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { MdOutlinePayments } from 'react-icons/md';
import { useSelector } from 'react-redux';

const SideBar = () => {
  const access = useSelector((state) => state.user.userInfo.access);

  console.log(access);
  return (
    <div className={styles.side_bar}>
      {access !== 'owner' && (
        <Link to="/dashboard">
          <div className={styles.icon_container} title="dashboard">
            <div className={styles.icon}>
              <AiOutlineDashboard />
            </div>
          </div>
        </Link>
      )}
      <Link to="/account">
        <div className={styles.icon_container} title="accounts">
          <div className={styles.icon}>
            <AiOutlineAppstoreAdd />
          </div>
        </div>
      </Link>
      <Link to="/clinic">
        <div className={styles.icon_container} title="clinics">
          <div className={styles.icon}>
            <FaRegHospital />
          </div>
        </div>
      </Link>
      <Link to="/user">
        <div className={styles.icon_container} title="users">
          <div className={styles.icon}>
            <FiUsers />
          </div>
        </div>
      </Link>
      <Link to="/subscription">
        <div className={styles.icon_container} title="subscription">
          <div className={styles.icon}>
            <FaCubes />
          </div>
        </div>
      </Link>
      <Link to="/subscription">
        <div className={styles.icon_container} title="payments">
          <div className={styles.icon}>
            <MdOutlinePayments />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SideBar;
