import React from 'react';
import styles from '../styles/AboutSection.module.css';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const AboutSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section id="about" className={styles.aboutSection}>
            <div className={styles.container}>
                <h1 className={styles.title}>{t.about.title}</h1>
                <div className={styles.content}>
                    <div className={styles.textContainer}>
                        <p>{t.about.content1}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;