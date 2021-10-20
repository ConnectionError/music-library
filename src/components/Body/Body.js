import React from "react";
import "./Body.css";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

const Body = () => {
  return (
    <div className="body">
      <Sidebar />
      <div className="w-100">
        <Header />
        {/* <MainContent/> */}
      </div>
    </div>
  );
};

export default Body;
