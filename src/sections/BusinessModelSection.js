import React from 'react';
import styles from '../styles/BusinessModelSection.module.css';

const BusinessModelSection = () => {
    const offerings = [
        {
            title: 'App Users',
            items: [
                'Free App Access',
                'Subscription Model',
                'Premium Features',
                'User Engagement'
            ]
        },
        {
            title: 'Fashion Brands (Advertisement)',
            items: [
                'Dedicated Brand Pages',
                'Premium Visibility',
                'Showcase Collections',
                'Promote Special Offers'
            ]
        },
        {
            title: 'Fashion Brands (Market)',
            items: [
                'Detailed User Analytics',
                'Market Insights',
                'Trend Tracking',
                'Personalized Products'
            ]
        }
    ];

    return (
        <section id="business-model" className={styles.businessModelSection}>
            <h2 className={styles.sectionTitle}>Business Model</h2>
            <h3 className={styles.subTitle}>What we offer to:</h3>
            <div className={styles.offeringsContainer}>
                {offerings.map((offering, index) => (
                    <div key={index} className={styles.offeringCard}>
                        <h4 className={styles.offeringTitle}>{offering.title}</h4>
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