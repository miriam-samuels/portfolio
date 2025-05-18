import React from 'react';
import styles from './loader.module.scss';

const Loader = ({ isLoading }) => {
  return (
    <div className={`${styles.loaderContainer} ${!isLoading ? styles.fadeOut : ''}`}>
      <div className={styles.logoLoader}>
        <img src="/images/logo.png" alt="Loading" />
      </div>
    </div>
  );
};

export default Loader;