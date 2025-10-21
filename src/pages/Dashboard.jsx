import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Navigation from "../components/NavigationMenu";

export default function Dashboard() {
  return (
    <>
        <header className="header">
            <div className="logo">
                <h2>Tech Solutions</h2>
            </div>
            <Navigation />
        </header>
        <div className="dashboard-container">
        <aside className="dashboard-sidebar">
            <h2>Dashboard</h2>
            <nav className="nav-ul">
            <ul>
                <li>
                <NavLink to="profile" className={({ isActive }) => isActive ? "active" : ""}>
                    Profile
                </NavLink>
                </li>
                <li>
                <NavLink to="settings" className={({ isActive }) => isActive ? "active" : ""}>
                    Settings
                </NavLink>
                </li>
            </ul>
            </nav>
        </aside>

        <main className="dashboard-content">
            <Outlet />
        </main>
        </div>
    </>
  );
}
