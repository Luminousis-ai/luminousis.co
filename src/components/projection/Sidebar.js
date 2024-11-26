import React, { useState } from 'react';
import styles from '../../styles/projection/Sidebar.module.css';
import { IoChevronDown } from 'react-icons/io5';
import GrowthInputs from './GrowthInputs';
import SubscriptionInputs from './SubscriptionInputs';
import CampaignInputs from './CampaignInputs';

const Sidebar = ({ 
    subscriptionPlans, 
    setSubscriptionPlans,
    growthRate,
    setGrowthRate,
    churnRate,
    setChurnRate,
    campaigns,
    setCampaigns 
}) => {
    const [openSection, setOpenSection] = useState('growth');

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div className={styles.dropdownContainer}>
            {/* Growth & Churn Settings Dropdown */}
            <div className={`${styles.dropdown} ${openSection === 'growth' ? styles.active : ''}`}>
                <button className={styles.dropdownHeader} onClick={() => toggleSection('growth')}>
                    <span>Growth & Churn Rates</span>
                    <IoChevronDown className={openSection === 'growth' ? styles.rotated : ''} />
                </button>
                <div className={styles.dropdownContent}>
                    <GrowthInputs 
                        settings={{ growthRate, churnRate }} 
                        onChange={({ growthRate: newGrowthRate, churnRate: newChurnRate }) => {
                            setGrowthRate(newGrowthRate);
                            setChurnRate(newChurnRate);
                        }} 
                    />
                </div>
            </div>

            {/* Subscription Plans Dropdown */}
            <div className={`${styles.dropdown} ${openSection === 'subscription' ? styles.active : ''}`}>
                <button className={styles.dropdownHeader} onClick={() => toggleSection('subscription')}>
                    <span>Subscription Plans</span>
                    <IoChevronDown className={openSection === 'subscription' ? styles.rotated : ''} />
                </button>
                <div className={styles.dropdownContent}>
                    <SubscriptionInputs plans={subscriptionPlans} onChange={setSubscriptionPlans} />
                </div>
            </div>

            {/* Marketing Campaigns Dropdown */}
            <div className={`${styles.dropdown} ${openSection === 'marketing' ? styles.active : ''}`}>
                <button className={styles.dropdownHeader} onClick={() => toggleSection('marketing')}>
                    <span>Marketing Campaigns</span>
                    <IoChevronDown className={openSection === 'marketing' ? styles.rotated : ''} />
                </button>
                <div className={styles.dropdownContent}>
                    <CampaignInputs campaigns={campaigns} onChange={setCampaigns} />
                </div>
            </div>
        </div>
    );
};

export default Sidebar; 