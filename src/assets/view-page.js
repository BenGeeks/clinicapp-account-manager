import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './view-page.module.css';

const ViewPage = ({ title = '', data = {}, layout = [], enableEdit, enableDelete, onEdit, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.main_page}>
      <div className={styles.header_bar}>
        <h2 className={styles.page_header}>{title}</h2>
        <div className={styles.buttons_container}>
          {enableDelete && (
            <button className={styles.button1} onClick={onDelete}>
              Delete
            </button>
          )}
          {enableEdit && (
            <button className={styles.button1} onClick={onEdit}>
              Edit
            </button>
          )}
          <button className={styles.button1} onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
      </div>
      <div className={styles.data_container}>
        {layout.map((row) => {
          return (
            <div key={row.name} className={styles.row_container}>
              <div className={styles.row_label}>{row.label}:</div>
              <div className={styles.row_value}>{data[row.name]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ViewPage;
