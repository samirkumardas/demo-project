import React from 'react';
import Buttons from '../buttons/';
import Filter from '../filter/';
import styles from './toolbar.css';

const Toolbar = () => {
	return (
            <div className={styles.toolBar}>
               <Buttons />
               <Filter />
            </div>
	);	
};

export default Toolbar;