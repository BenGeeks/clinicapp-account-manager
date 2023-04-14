import React from 'react';

import styles from './account-info.module.css';
import moment from 'moment';

const AccountInfo = ({ userInfo, subscriptionInfo, accountInfo }) => {
  return (
    <div className={styles.main_container}>
      <div className={styles.column}>
        <div className={styles.column_header}>Owner Information</div>
        <div className={styles.info_set}>
          <div className={styles.info_label}>Name:</div>
          <div className={styles.info_details}>
            {(userInfo && userInfo.firstName) || ''} {(userInfo && userInfo.lastName) || ''}
          </div>
        </div>
        <div className={styles.info_set}>
          <div className={styles.info_label}>Email:</div>
          <div className={styles.info_details}>{(userInfo && userInfo.emailAddress) || ''}</div>
        </div>
        <div className={styles.info_set}>
          <div className={styles.info_label}>Phone:</div>
          <div className={styles.info_details}>{(userInfo && userInfo.mobileNumber) || ''}</div>
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.column_header}>Subscription</div>
        <div className={styles.info_set}>
          <div className={styles.info_label}>Plan:</div>
          <div className={styles.info_details}>{(subscriptionInfo && subscriptionInfo.subscriptionName) || ''}</div>
        </div>
        <div className={styles.info_set}>
          <div className={styles.info_label}>Clinic Limit:</div>
          <div className={styles.info_details}>{(subscriptionInfo && subscriptionInfo.clinicSiteLimit) || ''} clinic</div>
        </div>
        <div className={styles.info_set}>
          <div className={styles.info_label}>User Limit:</div>
          <div className={styles.info_details}>{(subscriptionInfo && subscriptionInfo.userLimit) || ''} users</div>
        </div>
        <div className={styles.info_set}>
          <div className={styles.info_label}>Chart Limit:</div>
          <div className={styles.info_details}>{(subscriptionInfo && subscriptionInfo.chartLimit) || ''} per day</div>
        </div>
        <div className={styles.info_set}>
          <div className={styles.info_label}>Monthly Price:</div>
          <div className={styles.info_details}>{(subscriptionInfo && subscriptionInfo.price) || ''} per month</div>
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.column_header}>Account</div>
        <div className={styles.info_set}>
          <div className={styles.info_label}>Created Date:</div>
          <div className={styles.info_details}>Jan 14, 2023</div>
        </div>
        <div className={styles.info_set}>
          <div className={styles.info_label}>Status:</div>
          <div className={styles.info_details}>{(accountInfo && accountInfo.status) || ''}</div>
        </div>
        <div className={styles.info_set}>
          <div className={styles.info_label}>Due Date: </div>
          <div className={styles.info_details}>{(accountInfo && accountInfo.dueDate && moment(accountInfo.dueDate).format('MMM DD, yyyy')) || ''}</div>
        </div>
        <div className={styles.info_set}>
          <div className={styles.info_label}>Amount Due:</div>
          <div className={styles.info_details}>{accountInfo && accountInfo.amountDue ? `₱ ${accountInfo.amountDue.toFixed(2)}` : ''}</div>
        </div>
        <div className={styles.info_set}>
          <div className={styles.info_label}>Over Due:</div>
          <div className={styles.info_details}>{accountInfo && accountInfo.overDue ? `₱ ${accountInfo.overDue.toFixed(2)}` : ''}</div>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
