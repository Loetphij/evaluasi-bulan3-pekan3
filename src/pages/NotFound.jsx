import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Navigation from '../components/NavigationMenu';

function NotFound() {
    return (
        <>
            <header className="header">
                <div className="logo">
                <h2>Tech Solutions</h2>
                </div>
            </header>
            <h2>404 - Halaman Tidak Ditemukan</h2>;
        </>
    )
}

export default NotFound;