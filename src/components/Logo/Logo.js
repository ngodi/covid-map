import React from 'react';

import styles from './Logo.module.css';

const Logo = () => {
    return (
        <div className={styles.logo}>
            <img src='images/logo.png' alt="COVID MAP LOGO" width="100%"/>
            <span className={styles.text}>Status Report</span>
        </div>
    )
}

export default Logo;