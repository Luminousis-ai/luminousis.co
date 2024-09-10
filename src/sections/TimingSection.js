import React from 'react';
import styles from '../styles/TimingSection.module.css';

const TimingSection = () => {
    const timingPoints = [
        "Growing demand for personalized services",
        "Rising of fashion based E-commerce",
        "Need for flexible e-commerce services",
        "Consumer desire for interactive experiences",
        "Power of AI-driven digital services"
    ];

    return (
        <section className={styles.timingSection}>
            <h2 className={styles.sectionTitle}>Timing</h2>
            <div className={styles.timingContainer}>
                {timingPoints.map((point, index) => (
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