import React from 'react';
import styles from '../styles/RoadmapSection.module.css';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const RoadmapSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section id="roadmap" className={styles.roadmapSection}>
            <h2 className={styles.sectionTitle}>{t.roadmap.title}</h2>
            <div className={styles.timelineContainer}>
                {t.roadmap.items.map((item, index) => (
                    <div key={index} className={styles.timelineItem}>
                        <div className={styles.timelineContent}>
                            <div className={styles.timelineDot}></div>
                            <h3 className={styles.date}>{item.date}</h3>
                            <p className={styles.description}>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.infoBox}>
                <h3>{t.roadmap.continuous}</h3>
                <ul>
                    {t.roadmap.improvements.map((improvement, index) => (
                        <li key={index}>{improvement}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default RoadmapSection;