import React from 'react';
import styles from '../styles/TimingSection.module.css';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { FaSearch, FaRobot, FaExpandArrowsAlt } from 'react-icons/fa';

const TimingSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    
    const timingIcons = [<FaRobot />, <FaSearch />, <FaExpandArrowsAlt />];

    return (
        <section className={styles.timingSection}>
            <h2>{t.timing.title}</h2>
            <div className={styles.timingContainer}>
                {t.timing.points.map((point, index) => (
                    <div key={index} className={styles.timingItem}>
                        <span className={styles.timingIcon}>{timingIcons[index]}</span>
                        <p>{point}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TimingSection;