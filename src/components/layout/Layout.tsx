//Layout.tsx

import React from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";


const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <Header />
      
          <Sidebar />
       
          {children}

    </>
  )
}

export default Layout