import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './side-bar.module.css';

import { AiOutlineAppstoreAdd, AiOutlineDashboard } from 'react-icons/ai';
import { FaRegHospital, FaCubes } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { MdOutlinePayments } from 'react-icons/md';
import { useSelector } from 'react-redux';

const SideBar = () => {
  const access = useSelector((state) => state.user.userData.access);
  return (
    <div className={styles.side_bar}>
      {access !== 'owner' && (
        <NavLink to="/dashboard" className={({ isActive }) => (isActive ? styles.icon_container_active : styles.icon_container)} title="dashboard">
          <div className={styles.icon}>
            <AiOutlineDashboard />
          </div>
        </NavLink>
      )}

      <NavLink to="/account" className={({ isActive }) => (isActive ? styles.icon_container_active : styles.icon_container)} title="account">
        <div className={styles.icon}>
          <AiOutlineAppstoreAdd />
        </div>
      </NavLink>

      <NavLink to="/clinic" className={({ isActive }) => (isActive ? styles.icon_container_active : styles.icon_container)} title="clinic">
        <div className={styles.icon}>
          <FaRegHospital />
        </div>
      </NavLink>

      <NavLink to="/user" className={({ isActive }) => (isActive ? styles.icon_container_active : styles.icon_container)} title="user">
        <div className={styles.icon}>
          <FiUsers />
        </div>
      </NavLink>

      <NavLink to="/invoice" className={({ isActive }) => (isActive ? styles.icon_container_active : styles.icon_container)} title="invoice">
        <div className={styles.icon}>
          <MdOutlinePayments />
        </div>
      </NavLink>

      <NavLink to="/subscription" className={({ isActive }) => (isActive ? styles.icon_container_active : styles.icon_container)} title="subscription">
        <div className={styles.icon}>
          <FaCubes />
        </div>
      </NavLink>
    </div>
  );
};

export default SideBar;
