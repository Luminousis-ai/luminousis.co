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
                    alt="Lis AI Logo" 
                    className={styles.logo}
                    loading="lazy"
                />
                <h1>
                    <strong>Lis AI</strong>
                    <span className={styles.subtitle}> {t.welcome.title} </span>
                </h1>
                <p className={styles.description}>{t.welcome.description}</p>
            </div>
        </section>
    );
};

export default WelcomeSection;
