import React from 'react';
import { scrollToSection } from '../utils/scrollToSection';
import logo from '../assets/logo.png';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <img src={logo} alt="Company Logo" className={styles.logo} style={{cursor: 'pointer'}} onClick={() => scrollToSection('welcome')}/>
            <ul className={styles.navLinks}>
                <li onClick={() => scrollToSection('welcome')}>Home</li>
                <li onClick={() => scrollToSection('about')}>About Us</li>
                <li onClick={() => scrollToSection('product')}>Product</li>
                <li onClick={() => scrollToSection('roadmap')}>Roadmap</li>
                <li onClick={() => scrollToSection('contact')}>Contact</li>
            </ul>
        </nav>
    );
};

export default Navbar;
