import React from 'react';
import styles from '../styles/FeaturesSection.module.css';

const FeaturesSection = () => {
    return (
        <section id="features" className={styles.featuresSection}>
            <h2 className={styles.sectionTitle}>Our Key Features</h2>
            <div className={styles.features}>
                <div className={styles.feature}>
                    <h3>Visual Search</h3>
                    <p>AI-based visual search that enhances product discovery, providing a more intuitive shopping experience.</p>
                </div>
                <div className={styles.feature}>
                    <h3>Virtual Try-On</h3>
                    <p>Experience the best online shopping with our virtual try-on technology.</p>
                </div>
                <div className={styles.feature}>
                <h3>AI-Driven Personalization</h3>
                    <p>Receive fashion recommendations uniquely tailored to your preferences, powered by AI.</p>
                </div>
                <div className={styles.feature}>
                    <h3>Up-to-Date Insights</h3>
                    <p>Get real-time updates on fashion trends and insights to help you stay ahead of the curve.</p>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
