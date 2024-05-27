import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="">
        <Header />
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
