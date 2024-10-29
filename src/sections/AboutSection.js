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
                <h2 className={styles.title}>{t.about.title}</h2>
                <div className={styles.content}>
                    <div className={styles.textContainer}>
                        <p>{t.about.content1}</p>
                        <p>{t.about.content2}</p>
                        <p>{t.about.content3}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;