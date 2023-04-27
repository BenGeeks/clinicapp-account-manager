import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Header from '../home/header';
import styles from './react-form.module.css';

const ReactForm = ({ title, onSubmit, secondaryButtonText, onSecondaryClick, layout, schema, buttonText, buttonIsDisabled }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className={styles.background}>
      <Header />
      <div className={styles.container}>
        <div className={styles.main_page}>
          <div className={styles.header_bar}>
            <h2 className={styles.page_header}>{title}</h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.form_container}>
              {layout.map((input) => {
                return (
                  <div key={input.name} className={styles.input_container}>
                    <div className={styles.label_container}>
                      <label htmlFor={input.name}>{input.label}:</label>
                      <div className={styles.error_message}>{errors[input.name]?.message}</div>
                    </div>
                    {input.type === 'select' && (
                      <select placeholder={input.label} {...register(input.name)}>
                        {input &&
                          input.options &&
                          input.options.map((option) => {
                            return (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            );
                          })}
                      </select>
                    )}
                    {input.type !== 'select' && <input type={input.type} placeholder={input.label} {...register(input.name)} />}
                  </div>
                );
              })}
            </div>
            <div className={styles.buttons_container}>
              <button type="submit" className={`${styles.btn} ${styles.btn_success}`} disabled={buttonIsDisabled}>
                {buttonText}
              </button>
              <div className={styles.cancel} onClick={onSecondaryClick}>
                {secondaryButtonText}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReactForm;
