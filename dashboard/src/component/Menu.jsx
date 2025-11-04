import React from "react";
import { Link } from "react-router";
import { useState } from "react";


const Menu = () => {

  const [isProfileDropdownOpen , setIsProfileDropdownOpen] = useState(false);

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <>
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link to="/">Dashboard</Link >
          </li>
          <li>
            <Link to="/orders">Orders</Link >
          </li>
          <li>
            <Link to="/holdings">Holdings</Link >
          </li>
          <li>
            <Link to="/positions">Positions</Link >
          </li>
          <li>
            <Link to="/funds">Funds</Link >
          </li>

        </ul>
        <hr />
        <div className="profile" 
        onClick={handleProfileClick}
        >
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Menu;