import React, { useState, useEffect } from 'react';
import { scrollToSection } from '../utils/scrollToSection';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.svg';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    const { language, toggleLanguage } = useLanguage();
    const t = translations[language];
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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

    const handleNavClick = (section) => {
        scrollToSection(section);
        setIsMenuOpen(false);
    };

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.logoContainer}>
                <img 
                    src={logo} 
                    alt="Lis.Ai Logo" 
                    className={styles.logo} 
                    onClick={() => handleNavClick('welcome')} 
                    loading="lazy"
                />
            </div>

            <button 
                className={styles.menuButton}
                onClick={toggleMenu}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
            >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <div 
                className={`${styles.navContent} ${isMenuOpen ? styles.active : ''}`}
                role="navigation"
                aria-label="Main navigation"
            >
                <ul className={styles.navLinks}>
                    {['about', 'product', 'roadmap', 'contact'].map((section) => (
                        <li 
                            key={section}
                            onClick={() => handleNavClick(section)}
                            role="menuitem"
                            tabIndex={0}
                            onKeyPress={(e) => e.key === 'Enter' && handleNavClick(section)}
                        >
                            {t.nav[section]}
                        </li>
                    ))}
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
                    <span style={{ margin: '0 4px', color: '#4417C1' }}>/</span>
                    <span className={`${styles.languageOption} ${language === 'tr' ? styles.languageOptionActive : ''}`}>
                        TR
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
