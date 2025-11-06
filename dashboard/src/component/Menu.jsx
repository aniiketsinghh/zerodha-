import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router"; // ✅ correct import

const Menu = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  // ✅ close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Logout function
  const handleLogout = () => {
    // remove cookie
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    // redirect to frontend (update URL if different)
    window.location.href = "http://localhost:5173";
  };

  return (
    <div className="w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-3">
        
        {/* --- LEFT SECTION (Logo) --- */}
        <div className="flex items-center">
          <img src="logo.png" alt="logo" className="w-10" />
        </div>

        {/* --- CENTER MENU --- */}
        <ul className="flex items-center gap-17 text-gray-700 font-medium text-base">
          {["Dashboard", "Orders", "Holdings", "Positions", "Funds"].map((item) => (
            <li key={item}>
              <NavLink
                to={item === "Dashboard" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `transition-colors duration-200 ${
                    isActive
                      ? "text-blue-600 font-semibold"
                      : "hover:text-blue-500"
                  }`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* --- RIGHT PROFILE --- */}
        <div
          className="relative cursor-pointer select-none"
          onClick={handleProfileClick}
          ref={dropdownRef}
        >
          <div className="flex items-center gap-3">
            <div className="avatar bg-blue-600 text-white text-xl font-semibold rounded-full w-12 h-12 flex items-center justify-center shadow-sm">
              A
            </div>
            <p className="username text-gray-800 text-lg">Aniket</p>
          </div>

          {/* --- DROPDOWN --- */}
          {isProfileDropdownOpen && (
            <div
              className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 
              animate-fadeSlide"
            >
              <div className="px-4 py-2 border-b border-gray-100">
                <p className="font-semibold text-gray-800 text-sm">Aniket Singh</p>
                <p className="text-xs text-blue-600">aniket@example.com</p>
              </div>

              <ul className="py-2 text-sm text-gray-700">
                <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                  Privacy & Policy
                </li>
                <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                  View Status
                </li>
                <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                  Add Amount
                </li>
                <li
                  onClick={handleLogout}
                  className="hover:bg-red-50 px-4 py-2 text-red-600 cursor-pointer font-medium"
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
