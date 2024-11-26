import React from 'react';
import commonStyles from '../../styles/projection/CommonInputs.module.css';
import styles from '../../styles/projection/GrowthInputs.module.css';

const GrowthInputs = ({ settings, onChange }) => {
    const handleInputChange = (field, value) => {
        onChange({
            ...settings,
            [field]: parseFloat(value) || 0
        });
    };

    return (
        <div className={commonStyles.inputSection}>
            <div className={styles.growthSettings}>
                <div className={styles.settingCard}>
                    <div className={styles.settingHeader}>
                        <label htmlFor="growthRateInput">Growth Rate</label>
                        <div className={commonStyles.inputWithIcon}>
                            <input
                                id="growthRateInput"
                                type="number"
                                min="0"
                                max="200"
                                value={settings.growthRate}
                                onChange={(e) => handleInputChange('growthRate', e.target.value)}
                                className={commonStyles.noSpinButton}
                                aria-label="Growth Rate Input"
                            />
                            <span className={commonStyles.inputIcon}>%</span>
                        </div>
                    </div>
                    <div className={styles.settingHeader}>
                        <label htmlFor="churnRateInput">Churn Rate</label>
                        <div className={commonStyles.inputWithIcon}>
                            <input
                                id="churnRateInput"
                                type="number"
                                min="0"
                                max="50"
                                value={settings.churnRate}
                                onChange={(e) => handleInputChange('churnRate', e.target.value)}
                                className={commonStyles.numberInput}
                                aria-label="Churn Rate Input"
                            />
                            <span className={commonStyles.inputIcon}>%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GrowthInputs;