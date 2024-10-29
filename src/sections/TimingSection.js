import React from 'react';
import styles from '../styles/TimingSection.module.css';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const TimingSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section className={styles.timingSection}>
            <h2 className={styles.sectionTitle}>{t.timing.title}</h2>
            <div className={styles.timingContainer}>
                {t.timing.points.map((point, index) => (
                    <div key={index} className={styles.timingItem}>
                        <span className={styles.timingIcon}>•</span>
                        <p>{point}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TimingSection;