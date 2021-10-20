import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left"></div>
      <div className="header-right">
        <h1 className="m-0">All your favourite tunes</h1>
        <h4 className="m-0 align-right">
          all
          <span className="text-warning">
            <i className="fas fa-sun"></i>
          </span>{" "}
          and all{" "}
          <span className="text-dark">
            <i className="fas fa-moon"></i>
          </span>
        </h4>
      </div>
    </div>
  );
};

export default Header;
