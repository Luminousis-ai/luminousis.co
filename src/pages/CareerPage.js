import React from 'react';
import styles from '../styles/CareerPage.module.css'; 
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { FaExclamationCircle } from "react-icons/fa";

const CareerPage = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <div className={styles.careerPage}>
            <h1 className={styles.title}>{t.career.title}</h1>
            <div className={styles.noListings}>
                <div className={styles.card}>
                    <FaExclamationCircle className={styles.icon} />
                    <p className={styles.cardDescription}>{t.career.noListingsDescription}</p> 
                </div>
            </div>
        </div>
    );
};

export default CareerPage;
