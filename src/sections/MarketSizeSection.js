import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import styles from '../styles/MarketSize.module.css';
import marketSizeImage from '../assets/market_size.webp'; 

const MarketSizeSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section className={styles.marketSizeSection}>
            <h2 className={styles.title}>{t.marketSize.title}</h2>
            <p className={styles.description}>{t.marketSize.description}</p>
            <p className={styles.citation}>
                Source:
                <a href="https://www.statista.com/forecasts/1437015/number-of-users-fashion-e-commerce-market-worldwide" target="_blank" rel="noopener noreferrer"> statista, </a>
                <a href="https://www.digitalcommerce360.com/apparel-ecommerce-statistics" target="_blank" rel="noopener noreferrer">digitalcommerce360</a>
            </p>
            <img 
                src={marketSizeImage} 
                alt="Market Size" 
                className={styles.image}
                loading="lazy" 
            />
        </section>
    );
};

export default MarketSizeSection;
