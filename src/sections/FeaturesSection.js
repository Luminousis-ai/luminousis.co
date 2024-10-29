import React from 'react';
import styles from '../styles/FeaturesSection.module.css';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const FeaturesSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section id="features" className={styles.featuresSection}>
            <h2 className={styles.sectionTitle}>{t.features.title}</h2>
            <div className={styles.features}>
                <div className={styles.feature}>
                    <h3>{t.features.visualSearch.title}</h3>
                    <p>{t.features.visualSearch.description}</p>
                </div>
                <div className={styles.feature}>
                    <h3>{t.features.virtualTryOn.title}</h3>
                    <p>{t.features.virtualTryOn.description}</p>
                </div>
                <div className={styles.feature}>
                    <h3>{t.features.aiPersonalization.title}</h3>
                    <p>{t.features.aiPersonalization.description}</p>
                </div>
                <div className={styles.feature}>
                    <h3>{t.features.insights.title}</h3>
                    <p>{t.features.insights.description}</p>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
