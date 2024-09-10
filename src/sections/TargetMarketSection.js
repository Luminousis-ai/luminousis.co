import React from 'react';
import styles from '../styles/TargetMarketSection.module.css';

const TargetMarketSection = () => {
    return (
        <section className={styles.targetMarketSection}>
            <h2 className={styles.sectionTitle}>Target Market</h2>
            <div className={styles.contentWrapper}>
                <div className={styles.infoCard}>
                    <h3>Fashion Brands</h3>
                    <ul>
                        <li>Corporate Companies</li>
                        <li>Local Boutiques</li>
                        <li>Independent textile manufacturers</li>
                        <li>E-commerce companies</li>
                    </ul>
                </div>
                <div className={styles.infoCard}>
                    <h3>Online Customers</h3>
                    <ul>
                        <li>Gen Z (Aged 16-24)</li>
                        <li>Young Adults (Aged 24-35)</li>
                        <li>Trendsetters and Influencers</li>
                        <li>Fashion Enthusiasts</li>
                    </ul>
                </div>
                <div className={styles.infoCard}>
                    <h3>Market Size</h3>
                    <div className={styles.marketSizeItem}>
                        <span>Total Available Market (TAM)</span>
                        <span className={styles.marketSizeValue}>15B</span>
                    </div>
                    <div className={styles.marketSizeItem}>
                        <span>Serviceable Available Market (SAM)</span>
                        <span className={styles.marketSizeValue}>1B</span>
                    </div>
                    <div className={styles.marketSizeItem}>
                        <span>Serviceable Obtainable Market (SOM)</span>
                        <span className={styles.marketSizeValue}>250M</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TargetMarketSection;