import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("authToken");

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    alert("Berhasil logout!");
    navigate("/login");
  };

  return (
    <nav>
      <ul>
        {isAuthenticated ? (
          <>
            <li>
              <NavLink to="/products" className={({ isActive }) => (isActive ? "active" : "")}>
                Catalog
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className={({ isActive }) => (isActive ? "active" : "")}>
                Cart
              </NavLink>
            </li>
            <li>
              <button
                onClick={handleLogout}
                style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", fontWeight: '600', fontSize: '15px' }}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>
              Login
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
