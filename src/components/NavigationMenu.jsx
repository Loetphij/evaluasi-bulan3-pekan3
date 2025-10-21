import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navigation() {
    const navigate = useNavigate()
    const isAuthenticated = !!localStorage.getItem("authToken")

    const handleLogout = () => {
        localStorage.removeItem("authToken")
        alert("Berhasil logout!")
        navigate("/login")
    }

    return (
        <nav>
        <ul>
            <li>
                <NavLink to="/products" className={({ isActive }) => (isActive ? "active" : "")}>
                    Catalog
                </NavLink>
            </li>
            <li>
            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active" : "")}>
                Dashboard
            </NavLink>
            </li>

            {isAuthenticated ? (
                <li>
                    <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")} onClick={handleLogout}>
                    Logout
                    </NavLink>
                </li>
            ) : (
                <li>
                    <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>
                    Login
                    </NavLink>
                </li>
            )}
        </ul>
        </nav>
    )
}
