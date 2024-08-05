// Header.tsx

import React from "react";

import styles from './header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={`${styles.header} ${styles.d_flex}`}>
    </header>
  )
}

export default Header