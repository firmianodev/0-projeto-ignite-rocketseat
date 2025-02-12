import styles from './Header.module.css';

import igniteLogo from '../../assets/ignite-logo.svg';
import React from 'react';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do Ignite" />
        </header>
    )
}
