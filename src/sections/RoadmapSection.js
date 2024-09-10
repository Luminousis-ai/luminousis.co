import React from 'react';
import styles from '../styles/RoadmapSection.module.css';

const RoadmapSection = () => {
    const roadmapItems = [
        { date: 'January 2025', description: 'Beta Testing & Development' },
        { date: 'May 2025', description: 'First Launch' },
        { date: 'January 2026', description: 'Reaching 25,000 Daily Users' },
        { date: 'January 2027', description: 'Reaching 250,000 Daily Users' },
    ];

    return (
        <section id="roadmap" className={styles.roadmapSection}>
            <h2 className={styles.sectionTitle}>Feature Roadmap</h2>
            <div className={styles.timelineContainer}>
                {roadmapItems.map((item, index) => (
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
                <h3>Continuous Improvement</h3>
                <ul>
                    <li>Ongoing development and optimization across all stages</li>
                    <li>Dynamically adding new features</li>
                    <li>Expanding the user base and product catalog</li>
                </ul>
            </div>
        </section>
    );
};

export default RoadmapSection;