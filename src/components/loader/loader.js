import React from 'react';
import styles from './loader.css';

const Loader = ({ showLoader }) => {

	return showLoader ? (
           <div className={styles.overlay}>
			<div className={styles.ripple}>
              <div></div>
              <div></div>
            </div>
            </div> ) : '';
};

export default Loader;