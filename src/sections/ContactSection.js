import React from 'react';
import styles from '../styles/ContactSection.module.css';
import { FaTwitter } from 'react-icons/fa'; 

const ContactSection = () => {
    return (
        <section id="contact" className={styles.contactSection}>
            <div className={styles.contactContent}>
                <h2 className={styles.sectionTitle}>Contact Us</h2>
                <ul className={styles.contactList}>
                    <li className={styles.contactItem}><a href="mailto:luminousisai@gmail.com" style={{ textDecoration: 'none' }}>luminousisai@gmail.com</a></li>
                    <li className={styles.contactItem}><a href="tel:+905059905328" style={{ textDecoration: 'none' }}>+90 505 990 53 28</a></li>
                </ul>
                <div className={styles.socialMedia}>
                    <a href="https://x.com/luminousis_ai" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                </div>
            </div>
            <div className={styles.copyright}>
                &copy; {new Date().getFullYear()} Lis.Ai - All rights reserved.
            </div>
        </section>
    );
};

export default ContactSection;
