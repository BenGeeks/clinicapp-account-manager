import React from 'react';

import loaderGif from './images/loader.gif';
import styles from './loader-gif.module.css';

const LoaderGif = () => {
  return (
    <div className={styles.gif_container}>
      <img className={styles.gif_image} src={loaderGif} alt="loader" />
    </div>
  );
};

export default LoaderGif;
