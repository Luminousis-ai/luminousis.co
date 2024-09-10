import React from 'react';
import styles from '../styles/WelcomeSection.module.css';
import logo from '../assets/logo_1.png';

const WelcomeSection = () => {
    return (
        <section id="welcome" className={styles.welcomeSection}>
            <div className={styles.container}>
                <img src={logo} alt="Lis.Ai Logo" className={styles.logo} />
                <h1 className={`${styles.title} ${styles.customFont}`}>Lis.Ai</h1>
                <p className={styles.subtitle}>Smart Digital Shopping Mall</p>
                <p className={styles.description}>Scroll down for more details</p>
            </div>
        </section>
    );
};

export default WelcomeSection;
