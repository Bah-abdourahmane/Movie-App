import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-main text-white overflow-hidden">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
