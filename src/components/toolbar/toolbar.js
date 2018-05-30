import React from 'react';
import Buttons from '../buttons/buttons';
import Filter from '../filter/filter';
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