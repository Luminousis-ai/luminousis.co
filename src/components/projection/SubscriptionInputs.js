import React from 'react';
import commonStyles from '../../styles/projection/CommonInputs.module.css';
import styles from '../../styles/projection/SubscriptionInputs.module.css';

const SubscriptionInputs = ({ plans, onChange }) => {
    const colors = ['#4417C1', '#ff8000', '#00a854'];
    
    const totalDistribution = plans.reduce((sum, plan) => sum + plan.distribution, 0);
    const isValidDistribution = totalDistribution === 100;

    const handlePlanChange = (index, field, value) => {
        const newPlans = [...plans];
        newPlans[index][field] = parseFloat(value) || 0;
        onChange(newPlans);
    };

    return (
        <div className={commonStyles.inputSection}>            
            <div className={styles.distributionBarContainer}>
                <div className={styles.distributionBar}>
                    {plans.map((plan, index) => (
                        plan.distribution > 0 && (
                            <div
                                key={index}
                                className={styles.distributionSegment}
                                style={{
                                    width: `${plan.distribution}%`,
                                    backgroundColor: colors[index]
                                }}
                            />
                        )
                    ))}
                </div>
                {!isValidDistribution && (
                    <div className={styles.distributionWarning}>
                        Total distribution should be 100% (currently {totalDistribution}%)
                    </div>
                )}
            </div>

            <div className={styles.plansContainer}>
                {plans.map((plan, index) => (
                    <div key={index} className={styles.planCard}>
                        <div className={styles.planHeader} style={{color: colors[index]}}>
                            {plan.name}
                        </div>
                        <div className={styles.planInputsRow}>
                            <div className={styles.inputGroup}>
                                <label>Price</label>
                                <div className={styles.inputWithIcon}>
                                    <span className={styles.inputIcon}>$</span>
                                    <input
                                        type="number"
                                        value={plan.price}
                                        onChange={(e) => handlePlanChange(index, 'price', e.target.value)}
                                        min="0"
                                        step="0.1"
                                        className={styles.noSpinButton}
                                    />
                                </div>
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Distribution</label>
                                <div className={styles.inputWithIcon}>
                                    <input
                                        type="number"
                                        value={plan.distribution}
                                        onChange={(e) => handlePlanChange(index, 'distribution', e.target.value)}
                                        min="0"
                                        max="100"
                                        className={styles.noSpinButton}
                                        style={{
                                            borderColor: !isValidDistribution ? '#ff4d4f' : undefined
                                        }}
                                    />
                                    <span className={styles.inputIcon}>%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SubscriptionInputs;
