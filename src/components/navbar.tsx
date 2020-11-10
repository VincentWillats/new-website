import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export const Navbar = () => {
    return (
        <div className="navbar">
            <Link className="btn" to="/">
                Home
            </Link>

            <Link className="btn" to="/projects">
                Projects
            </Link>

            <Link className="btn" to="/contact">
                Contact Me
            </Link>
        </div>
    );
};
