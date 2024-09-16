import React from 'react';
import { scrollToSection } from '../utils/scrollToSection';
import logo from '../assets/logo.png';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navLinks}>
                <li onClick={() => scrollToSection('about')}>About Us</li>
                <li onClick={() => scrollToSection('product')}>Product</li>
            </ul>
            <div>
                <img src={logo} alt="Company Logo" className={styles.logo} onClick={() => scrollToSection('welcome')} />
            </div>
            <ul className={styles.navLinks}>
                <li onClick={() => scrollToSection('roadmap')}>Roadmap</li>
                <li onClick={() => scrollToSection('contact')}>Contact</li>
            </ul>
        </nav>
    );
};

export default Navbar;
