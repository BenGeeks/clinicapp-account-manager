import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import styles from './react-form.module.css';

const ReactForm = ({ title, onSubmit, onCancel, layout, schema, defaultValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  return (
    <div className={styles.main_page}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.header_bar}>
          <h2 className={styles.page_header}>{title}</h2>
          <div className={styles.buttons_container}>
            <button type="button" className={`${styles.btn} ${styles.btn_danger}`} onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className={`${styles.btn} ${styles.btn_success}`}>
              Save
            </button>
          </div>
        </div>
        <div className={styles.form_container}>
          {layout.map((input) => {
            return (
              <div key={input.name} className={styles.input_container}>
                <div className={styles.label_container}>
                  <label htmlFor={input.name}>{input.label}:</label>
                  <div className={styles.error_message}>{errors[input.name]?.message}</div>
                </div>
                <input type={input.type} placeholder={input.label} {...register(input.name)} />
              </div>
            );
          })}
        </div>
      </form>
    </div>
  );
};

export default ReactForm;
