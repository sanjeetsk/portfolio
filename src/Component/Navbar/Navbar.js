
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <NavLink to="/" className="navbar-logo">Sanjeet Kumar</NavLink>
                <button className={`navbar-toggler ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <ul className={`navbar-nav ${isOpen ? 'active' : ''}`}>
                <li className="nav-item">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/projects">Projects</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li className="nav-item">
                    <a href="https://drive.google.com/file/d/1f4BYeDsweT3ZrPM93CbxfAAxX_x8zQQp/view?usp=sharing" className="resume-link" target="_blank" rel="noopener noreferrer">Resume</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
