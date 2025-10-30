import React from "react";
import { Link } from "react-router";


const Menu = () => {
  return (
    <>
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link >
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
        // onClick={handleProfileClick}
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