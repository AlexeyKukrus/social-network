//Layout.tsx

import React from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

import styles from './layout.module.scss'

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.d_flex}>
        <Sidebar />
        {children}
      </main>
    </div>
  )
}

export default Layout