import React from 'react';
import styles from '../styles/ProductSection.module.css';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const ProductShowcaseSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section id="product" className={styles.productShowcaseSection}>
            <h2 className={styles.sectionTitle}>{t.product.title}</h2>
            
            <div className={styles.description}>
                <h3 className={styles.descriptionTitle}>{t.product.subtitle}</h3>
                <ul className={styles.featureList}>
                    {t.product.features.map((feature, index) => (
                        <li key={index} className={styles.featureItem}>{feature}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default ProductShowcaseSection;