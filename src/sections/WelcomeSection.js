import React from 'react';
import styles from '../styles/WelcomeSection.module.css';
import logo from '../assets/logo.svg';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const WelcomeSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section id="welcome" className={styles.welcomeSection}>
            <div className={styles.container}>
                <img 
                    src={logo} 
                    alt="Lis.Ai Logo" 
                    className={styles.logo}
                    loading="lazy"
                />
                <h1 className={`${styles.title} ${styles.customFont}`}>Lis.Ai</h1>
                <p className={styles.subtitle}>{t.welcome.title}</p>
                <p className={styles.description}>{t.welcome.description}</p>
            </div>
        </section>
    );
};

export default WelcomeSection;
