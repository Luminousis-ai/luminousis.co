import React from 'react';
import styles from '../styles/BusinessModelSection.module.css';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const BusinessModelSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section id="business-model" className={styles.businessModelSection}>
            <h2 className={styles.sectionTitle}>{t.business.title}</h2>
            <h3 className={styles.subTitle}>{t.business.subtitle}</h3>
            <div className={styles.offeringsContainer}>
                {t.business.offerings.map((offering, index) => (
                    <div key={index} className={styles.offeringCard}>
                        <h4 className={styles.offeringTitle}>{offering.title}</h4>
                        <ul className={styles.offeringList}>
                            {offering.items.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BusinessModelSection;