import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-head">
        <i className="fas fa-user-circle"></i>
        <h3 className="title">Subhajit Dey</h3>
      </div>
      <div>
        <div className="flex align-center fixed cursor-pointer">
          <i className="fas fa-headphones"></i> <h3>Discover</h3>
        </div>
        <div className="flex align-center fixed cursor-pointer">
          <i className="fas fa-heart"></i> <h3>Favourite</h3>
        </div>
        <div className="flex align-center fixed cursor-pointer">
          <i className="fas fa-search"></i> <h3>Search</h3>
        </div>
        <div className="flex align-center fixed cursor-pointer">
          <i className="fas fa-play-circle"></i> <h3>Palylists</h3>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
