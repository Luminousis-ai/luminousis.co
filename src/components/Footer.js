import React from 'react';
import styles from '../styles/Footer.module.css';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/logo.svg';

const Footer = () => {
    const { language } = useLanguage();
    const t = translations[language]?.footer || translations['en'].footer;

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerContent}>
                    <div className={styles.footerSection}>
                        <a href="/" className={styles.logoLink}>
                            <img src={logo} alt="Lis AI Logo" className={styles.logo} />
                        </a>
                        <p className={styles.description}>
                            {t.description}
                        </p>
                    </div>
                    
                    <div className={styles.footerSection}>
                        <div className={styles.footerNavTitle}>{t.navigation.title}</div>
                        <nav className={styles.footerNav}>
                            <a href="/">{t.navigation.home}</a>
                            <a href="/about">{t.navigation.about}</a>
                            <a href="/contact">{t.navigation.contact}</a>
                            <a href="/career">{t.navigation.career}</a>
                        </nav>
                    </div>

                    <div className={styles.rightSection}>
                        <div className={styles.footerSection}>
                            <div className={styles.contactTitle}>{t.contact}</div>
                            <div className={styles.contactInfo}>
                                <p>Email:</p>
                                <a href="mailto:hello@lisai.co">hello@lisai.co</a>
                            </div>
                        </div>

                        <div className={styles.footerSection}>
                            <div className={styles.followUsTitle}>{t.followUs}</div>
                            <div className={styles.socialLinks}>
                                <a href="https://x.com/lis_ai_co" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter />
                                </a>
                                <a href="https://linkedin.com/company/lis-ai" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.copyright}>
                    &copy; {new Date().getFullYear()} Lis AI - {t.rights}
                </div>
            </div>
        </footer>
    );
};

export default Footer;