import React from 'react';
import styles from '../styles/AboutSection.module.css';

const AboutSection = () => {
    return (
        <section id="about" className={styles.aboutSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>About Us</h2>
                <div className={styles.content}>
                    <div className={styles.textContainer}>
                        <p>We are a team of fresh computer engineers graduated from Istanbul Technical University, united by a passion for technology in fashion. At Lis.Ai, our mission is to adapt e-commerce to the changing world, making it more interactive, personalized, and user-friendly.</p>
                        <p>We leverage AI to solve real problems, prioritizing solutions that enhance the shopping experience rather than creating technology in search of a problem. Our approach blends cutting-edge AI innovations with intuitive design, offering seamless and comfortable e-commerce experiences that empower brands and captivate modern shoppers.</p>
                        <p>At Lis.Ai, we are committed to setting new standards for the future of fashion-based e-commerce.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;