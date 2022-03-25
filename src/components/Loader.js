import React from 'react';
import {Rings} from 'react-loader-spinner';
import styles from './Loader.module.scss';

const Loader = () => (
  <div className={styles.Loader}>
    <Rings
      type="Rings"
      color="black" 
      height={100}
      width={100}
    />
  </div>
);

export default Loader;