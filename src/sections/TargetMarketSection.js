import React from 'react';
import styles from '../styles/TargetMarketSection.module.css';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/index';

const TargetMarketSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section className={styles.targetMarketSection}>
            <h2 className={styles.sectionTitle}>{t.targetMarket.title}</h2>
            <div className={styles.contentWrapper}>
                <div className={styles.infoCard}>
                    <h3>{t.targetMarket.fashionBrands.title}</h3>
                    <ul>
                        {t.targetMarket.fashionBrands.items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.infoCard}>
                    <h3>{t.targetMarket.onlineCustomers.title}</h3>
                    <ul>
                        {t.targetMarket.onlineCustomers.items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.infoCard}>
                    <h3>{t.targetMarket.marketSize.title}</h3>
                    <div className={styles.marketSizeItem}>
                        <span>{t.targetMarket.marketSize.tam}</span>
                        <span className={styles.marketSizeValue}>{t.targetMarket.marketSize.values.tam}</span>
                    </div>
                    <div className={styles.marketSizeItem}>
                        <span>{t.targetMarket.marketSize.sam}</span>
                        <span className={styles.marketSizeValue}>{t.targetMarket.marketSize.values.sam}</span>
                    </div>
                    <div className={styles.marketSizeItem}>
                        <span>{t.targetMarket.marketSize.som}</span>
                        <span className={styles.marketSizeValue}>{t.targetMarket.marketSize.values.som}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TargetMarketSection;