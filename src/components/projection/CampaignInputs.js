import React from 'react';
import commonStyles from '../../styles/projection/CommonInputs.module.css';
import styles from '../../styles/projection/CampaignInputs.module.css';

const CampaignInputs = ({ campaigns, onChange }) => {
    const handleCampaignChange = (index, field, value) => {
        const updatedCampaigns = campaigns.map((campaign, i) =>
            i === index ? { ...campaign, [field]: field === 'name' ? value : parseFloat(value) || 0 } : campaign
        );
        onChange(updatedCampaigns);
    };

    const handleAddCampaign = () => {
        const newCampaign = {
            name: `Campaign ${campaigns.length + 1}`,
            reach: 100000,
            downloadRate: 3,
            activeRate: 20,
            cost: 25000,
            startMonth: 1,
            duration: 3
        };
        onChange([...campaigns, newCampaign]);
    };

    const handleRemoveCampaign = (index) => {
        const updatedCampaigns = campaigns.filter((_, i) => i !== index);
        onChange(updatedCampaigns);
    };

    return (
        <div className={commonStyles.inputSection}>
            <div className={styles.campaignsContainer}>
                {campaigns.map((campaign, index) => (
                    <div key={index} className={styles.campaignCard}>
                        <div className={styles.campaignTop}>
                            <input
                                type="text"
                                value={campaign.name}
                                onChange={(e) => handleCampaignChange(index, 'name', e.target.value)}
                                className={styles.campaignName}
                                placeholder="Campaign Name"
                            />
                            <button
                                className={styles.removeButton}
                                onClick={() => handleRemoveCampaign(index)}
                                aria-label="Remove campaign"
                            >
                                ×
                            </button>
                        </div>

                        <div className={styles.campaignGrid}>
                            {[
                                { label: 'Target Reach', field: 'reach', unit: 'usr' },
                                { label: 'Cost', field: 'cost', unit: '$' },
                                { label: 'Download Rate', field: 'downloadRate', unit: '%' },
                                { label: 'Active Rate', field: 'activeRate', unit: '%' }
                            ].map(({ label, field, unit }) => (
                                <div key={field} className={commonStyles.inputGroup}>
                                    <label>{label}</label>
                                    <div className={commonStyles.inputWithIcon}>
                                        <input
                                            type="number"
                                            value={campaign[field]}
                                            onChange={(e) => handleCampaignChange(index, field, e.target.value)}
                                            min="0"
                                            max={field.includes('Rate') ? '100' : undefined}
                                        />
                                        <span className={commonStyles.inputIcon}>{unit}</span>
                                    </div>
                                </div>
                            ))}

                            <div className={styles.timelineInputs}>
                                {[
                                    { label: 'Start Month', field: 'startMonth', min: 1, max: 12 },
                                    { label: 'Duration', field: 'duration', min: 1, max: 12, unit: 'mo' }
                                ].map(({ label, field, min, max, unit }) => (
                                    <div key={field} className={commonStyles.inputGroup}>
                                        <label>{label}</label>
                                        <div className={commonStyles.inputWithIcon}>
                                            <input
                                                type="number"
                                                value={campaign[field]}
                                                onChange={(e) => handleCampaignChange(index, field, e.target.value)}
                                                min={min}
                                                max={max}
                                            />
                                            {unit && <span className={commonStyles.inputIcon}>{unit}</span>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={styles.campaignMetrics}>
                            <div className={styles.metric}>
                                <span>
                                    <i className={`fas fa-users ${styles.metricIcon}`}></i>
                                    Potential Users:
                                </span>
                                <strong>{Math.round(campaign.reach * campaign.downloadRate * campaign.activeRate / 10000)}</strong>
                            </div>
                            <div className={styles.metric}>
                                <span>
                                    <i className={`fas fa-dollar-sign ${styles.metricIcon}`}></i>
                                    Cost/ActiveUser:
                                </span>
                                <strong>${((campaign.cost / (campaign.reach * campaign.downloadRate * campaign.activeRate)) * 10000).toFixed(2)}</strong>
                            </div>
                        </div>
                    </div>
                ))}
                <div className={styles.campaignHeader}>
                    <button className={commonStyles.addButton} onClick={handleAddCampaign}>
                        New Campaign
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CampaignInputs;