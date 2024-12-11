import React from 'react';
import styles from '../styles/BusinessModelSection.module.css';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { FaChartBar, FaUsers, FaBullhorn } from 'react-icons/fa';

const BusinessModelSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const businessIcons = [<FaChartBar />, <FaUsers />, <FaBullhorn />];

    return (
        <section id="business-model" className={styles.businessModelSection}>
            <h2>{t.business.title}</h2>
            <div className={styles.offeringsContainer}>
                {t.business.offerings.map((offering, index) => (
                    <div key={index} className={styles.infoCard}>
                        <div className={styles.iconWrapper}>
                            {businessIcons[index % businessIcons.length]}
                        </div>
                        <h3 className={styles.offeringTitle}>{offering.title}</h3>
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