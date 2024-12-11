import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.svg';
import styles from '../styles/Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { language, toggleLanguage } = useLanguage();
    const t = translations[language];
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollDifference = Math.abs(currentScrollY - lastScrollY);
            
            // Always show navbar when at the top
            if (currentScrollY === 0) {
                setIsVisible(true);
            } 
            // Only change visibility if scrolled more than 100px
            else if (scrollDifference > 100) {
                if (currentScrollY < lastScrollY) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
                setLastScrollY(currentScrollY);
            }
            
            setScrolled(currentScrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const toggleMenu = (e) => {
        e.stopPropagation();
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            const navContent = document.querySelector('[class*="navContent"]');
            const menuButton = document.querySelector('[class*="menuButton"]');
            
            if (isMenuOpen && 
                navContent && 
                !navContent.contains(event.target) && 
                menuButton && 
                !menuButton.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        setTimeout(() => {
            document.addEventListener('click', handleClickOutside);
        }, 0);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <nav className={`
            ${styles.navbar} 
            ${scrolled ? styles.scrolled : ''} 
            ${isVisible ? styles.visible : styles.hidden}
        `}>
            <button 
                className={styles.menuButton}
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <div className={styles.logoContainer}>
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                    <img 
                        src={logo} 
                        alt="Lis AI Logo" 
                        className={styles.logo} 
                        loading="lazy"
                    />
                </Link>
            </div>

            <div className={`${styles.navContent} ${isMenuOpen ? styles.active : ''}`}>
                <ul className={styles.navLinks}>
                    <li>
                        <Link to="/" onClick={() => setIsMenuOpen(false)}>
                            {t.nav.home}
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                            {t.nav.about}
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                            {t.nav.contact}
                        </Link>
                    </li>
                </ul>
                
                <div 
                    className={styles.languageSwitch} 
                    onClick={toggleLanguage}
                    role="button"
                    tabIndex={0}
                    aria-label="Change language"
                    onKeyPress={(e) => e.key === 'Enter' && toggleLanguage()}
                >
                    <span className={`${styles.languageOption} ${language === 'en' ? styles.languageOptionActive : ''}`}>
                        EN
                    </span>
                    <span className={`${styles.languageOption} ${language === 'tr' ? styles.languageOptionActive : ''}`}>
                        TR
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
