import React from 'react';
import styles from '../styles/TargetMarketSection.module.css';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/index';
import { FaChartBar, FaUsers, FaBullhorn } from 'react-icons/fa';

const TargetMarketSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const businessIcons = [<FaChartBar />, <FaUsers />, <FaBullhorn />];

    return (
        <section className={styles.targetMarketSection}>
            <h2>{t.targetMarket.title}</h2>
            <div className={styles.contentWrapper}>
                <div className={styles.infoCard}>
                    <div className={styles.iconWrapper}>
                        {businessIcons[0]}
                    </div>
                    <h3>{t.targetMarket.fashionBrands.title}</h3>
                    <ul>
                        {t.targetMarket.fashionBrands.items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.infoCard}>
                    <div className={styles.iconWrapper}>
                        {businessIcons[1]}
                    </div>
                    <h3>{t.targetMarket.onlineCustomers.title}</h3>
                    <ul>
                        {t.targetMarket.onlineCustomers.items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.infoCard}>
                    <div className={styles.iconWrapper}>
                        {businessIcons[2]}
                    </div>
                    <h3>{t.targetMarket.advertisement.title}</h3>
                    <ul>
                        {t.targetMarket.advertisement.items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default TargetMarketSection;