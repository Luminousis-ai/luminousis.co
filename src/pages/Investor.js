import React from 'react';
import styles from '../styles/Investor.module.css';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Investor = () => {
    return (
        <div className={styles.investor}>
            <h1>Investor Relations</h1>
            <p>Welcome to our Investor Relations page</p>
            <section className={styles.financialReports}>
                <h2>Financial Reports</h2>
                <ul>
                    <li>
                        <a href="/reports/2023" target="_blank" rel="noopener noreferrer">
                            Annual Report 2023
                        </a>
                    </li>
                    <li>
                        <a href="/reports/q4-2023" target="_blank" rel="noopener noreferrer">
                            Q4 2023 Report
                        </a>
                    </li>
                </ul>
            </section>
            <section className={styles.contact}>
                <h2>Contact Information</h2>
                <p>For investor inquiries, please contact us at investor@company.com</p>
            </section>
        </div>
    );
};

export default Investor; 