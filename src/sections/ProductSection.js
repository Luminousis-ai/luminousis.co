import React from 'react';
import styles from '../styles/ProductSection.module.css';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

import demoGif from '../assets/product/demo.gif';
import mockupImage from '../assets/product/mockup.webp';

import product1 from '../assets/product/1.webp';
import product2 from '../assets/product/2.webp';
import product3 from '../assets/product/3.webp';
import product4 from '../assets/product/4.webp';
import product5 from '../assets/product/5.webp';
import product6 from '../assets/product/6.webp';
import product7 from '../assets/product/7.webp';
import product8 from '../assets/product/8.webp';

const ProductVideoSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const productGroups = [
        {
            subtitle: t?.product?.subtitle?.[0],
            description: t?.product?.description?.[0],
            images: [product1, product2]
        },
        {
            subtitle: t?.product?.subtitle?.[1],
            description: t?.product?.description?.[1],
            images: [product3, product4]
        },
        {
            subtitle: t?.product?.subtitle?.[2],
            description: t?.product?.description?.[2],
            images: [product5, product8]
        },
        {
            subtitle: t?.product?.subtitle?.[3],
            description: t?.product?.description?.[3],
            images: [product6, product7]
        }
    ];

    return (
        <>
            <h2>{t?.product?.title}</h2>
            <section className={styles.productVideoSection}>
                <div className={styles.container}>
                    <div className={styles.videoColumn}>
                        <div className={styles.mockupFrame}>
                            <img 
                                src={mockupImage} 
                                alt="Device Mockup"
                                className={styles.mockupImage}
                            />
                            <div className={styles.contentContainer}>
                                <img 
                                    src={demoGif}
                                    alt="Product demonstration"
                                    loading="lazy"
                                    className={styles.content}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.screenshotsColumn}>
                        {productGroups.map((group, index) => (
                            <div key={index} className={styles.screenshotGroup}>
                                <div className={styles.groupHeader}>
                                    <h3>{group.subtitle}</h3>
                                    <p>{group.description}</p>
                                </div>
                                <div className={styles.groupImages}>
                                    {group.images.map((image, imgIndex) => (
                                        <div key={imgIndex} className={styles.screenshot}>
                                            <img 
                                                src={image} 
                                                alt={`${group.subtitle} screenshot ${imgIndex + 1}`}
                                                loading="lazy"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductVideoSection;
