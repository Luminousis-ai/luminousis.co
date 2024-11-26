import React from 'react';
import styles from '../../styles/projection/KeyMetrics.module.css';

const KeyMetrics = ({ data, subscriptionPlans }) => {
    if (!data || !subscriptionPlans) return null;

    const formatNumber = (num) => new Intl.NumberFormat().format(Math.round(num));
    const formatCurrency = (num) => new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    }).format(num);

    console.log(data);
    
    const metricGroups = [
        {
            title: "Revenue Metrics",
            metrics: [
                { label: "Total Revenue (12 months)", value: formatCurrency(data.totalRevenue), ariaLabel: "Total revenue for twelve months" },
                { label: "Average Monthly Revenue", value: formatCurrency(data.totalRevenue / 12), ariaLabel: "Average monthly revenue" },
                { label: "Revenue Growth (M1 to M12)", value: `${((data.monthlyRevenue[11] / data.monthlyRevenue[0] - 1) * 100).toFixed(1)}%`, ariaLabel: "Revenue growth from month one to month twelve" },
                { label: "Month 12 Run Rate (ARR)", value: formatCurrency(data.monthlyRevenue[11] * 12), ariaLabel: "Annual run rate based on month twelve" }
            ]
        },
        {
            title: "User Metrics",
            metrics: [
                { label: "Total Users (Month 12)", value: formatNumber(data.totalUsers[11]), ariaLabel: "Total users for month twelve" },
                { label: "Avg Monthly Growth Rate", value: `${data.averageGrowth.toFixed(1)}%`, ariaLabel: "Average monthly growth rate" },
                { label: "Organic Users (Month 12)", value: formatNumber(data.monthlyData[11].organicUsers), ariaLabel: "Organic users for month twelve" },
                { label: "Campaign Users (Month 12)", value: formatNumber(data.monthlyData[11].campaignUsers), ariaLabel: "Campaign users for month twelve" }
            ]
        },
        {
            title: "Subscription Metrics",
            metrics: [
                { 
                    label: "Basic Tier (Month 12)", 
                    value: `${formatNumber(data.subscriptionData[11]?.basic || 0)} : ${formatCurrency((data.subscriptionData[11]?.basic || 0) * subscriptionPlans[0].price)}`, 
                    ariaLabel: "Basic tier for month twelve" 
                },
                { 
                    label: "Standard Tier (Month 12)", 
                    value: `${formatNumber(data.subscriptionData[11]?.standard || 0)} : ${formatCurrency((data.subscriptionData[11]?.standard || 0) * subscriptionPlans[1].price)}`, 
                    ariaLabel: "Standard tier for month twelve" 
                },
                { 
                    label: "Premium Tier (Month 12)", 
                    value: `${formatNumber(data.subscriptionData[11]?.premium || 0)} : ${formatCurrency((data.subscriptionData[11]?.premium || 0) * subscriptionPlans[2].price)}`, 
                    ariaLabel: "Premium tier for month twelve" 
                }
            ]
        },
        {
            title: "Campaign Impact",
            metrics: [
                { label: "Campaign-Driven Revenue (M12)", value: formatCurrency(data.campaignRevenue[11]), ariaLabel: "Campaign-driven revenue for month twelve" },
                { label: "Campaign User %", value: `${((data.monthlyData[11].campaignUsers / data.totalUsers[11]) * 100).toFixed(1)}%`, ariaLabel: "Campaign user percentage" },
                { label: "Avg Campaign Growth", value: `${data.avgCampaignGrowth.toFixed(1)}%`, ariaLabel: "Average campaign growth" },
                { label: "Revenue per User (M12)", value: formatCurrency(data.monthlyRevenue[11] / data.totalUsers[11]), ariaLabel: "Revenue per user for month twelve" }
            ]
        }
    ];

    return (
        <section className={styles.metricsContainer} aria-label="Key performance metrics">
            {metricGroups.map((group, index) => (
                <div 
                    key={`group-${index}`} 
                    className={styles.metricGroup}
                    role="region"
                    aria-label={group.title}
                >
                    <h3 className={styles.groupTitle}>{group.title}</h3>
                    <div className={styles.metricsGrid}>
                        {group.metrics.map((metric, mIndex) => (
                            <div 
                                key={`metric-${mIndex}`} 
                                className={styles.metric}
                                role="article"
                                aria-label={metric.ariaLabel}
                            >
                                <div className={styles.metricLabel}>{metric.label}</div>
                                <div className={styles.metricValue}>{metric.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default KeyMetrics; 