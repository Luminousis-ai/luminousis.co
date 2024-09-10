import React from 'react';
import styles from '../styles/ProductSection.module.css';
import product3 from '../assets/3.png';
import product4 from '../assets/4.png';
import product5 from '../assets/5.png';
import product6 from '../assets/6.png';
import product8 from '../assets/8.png';
import product9 from '../assets/9.png';

const ProductShowcaseSection = () => {
    const features = [
        "Visual search for smooth discovery",
        "Virtual-Try-On for best shopping experience",
        "AI-Driven fashion recommendations",
        "Up-to-date fashion insights",
        "Engaging and interactive features",
        "Uniquely tailored shopping experience"
    ];

    return (
        <section id="product" className={styles.productShowcaseSection}>
            <h2 className={styles.sectionTitle}>Product</h2>
            
            <div className={styles.description}>
                <h3 className={styles.descriptionTitle}>Lis.Ai is a Smart Digital Shopping Mall</h3>
                <ul className={styles.featureList}>
                    {features.map((feature, index) => (
                        <li key={index} className={styles.featureItem}>{feature}</li>
                    ))}
                </ul>
            </div>
            
            <div className={styles.products}>
                {[product3, product4, product5, product6, product8, product9].map((product, index) => (
                    <div key={index} className={`${styles.product} ${styles.fadeIn}`}>
                        <img src={product} alt={`product${index + 3}`} className={styles.productImage} />
                        <p className={styles.productName}></p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductShowcaseSection;