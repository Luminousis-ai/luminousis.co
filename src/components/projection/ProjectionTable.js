import React, { useEffect, useRef } from 'react';
import styles from '../../styles/projection/ProjectionTable.module.css';

const ProjectionTable = ({ data, subscriptionPlans }) => {
    const tableWrapperRef = useRef(null);

    if (!data) return null;

    const formatNumber = (num) => new Intl.NumberFormat().format(Math.round(num));
    const formatCurrency = (num) => new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(num);

    const handleExport = (format) => {
        const headers = [
            'Month',
            'Total Users',
            'Organic Users',
            'Campaign Users',
            'Growth Rate',
            'Basic Users',
            'Basic Revenue',
            'Standard Users',
            'Standard Revenue',
            'Premium Users',
            'Premium Revenue',
            'Total Revenue'
        ];

        const rows = data.monthlyData.map((month, index) => [
            `Month ${index + 1}`,
            month.totalUsers,
            month.organicUsers,
            month.campaignUsers,
            `${month.growthRate.toFixed(1)}%`,
            month.subscriptionDistribution.basic,
            month.subscriptionDistribution.basic * subscriptionPlans[0].price,
            month.subscriptionDistribution.standard,
            month.subscriptionDistribution.standard * subscriptionPlans[1].price,
            month.subscriptionDistribution.premium,
            month.subscriptionDistribution.premium * subscriptionPlans[2].price,
            month.revenue
        ]);

        if (format === 'csv') {
            const csv = [headers.join(','), ...rows.map(row => row.join(','))].join('\n');
            const blob = new Blob([csv], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'revenue_projection.csv';
            a.click();
        }
    };

    return (
        <div className={styles.tableContainer}>
            <h3 className={styles.sectionTitle}>Revenue Projection Analysis</h3>
            <div className={styles.tableWrapper} ref={tableWrapperRef}>
                <table className={styles.projectionTable}>
                    <thead>
                        <tr>
                            <th rowSpan="2">Period</th>
                            <th rowSpan="2">Total Active Users</th>
                            <th colSpan="2" className={styles.headerGroup}>User Acquisition</th>
                            <th rowSpan="2">Monthly Growth (%)</th>
                            <th colSpan="2" className={`${styles.headerGroup} ${styles.categoryGroup}`}>Free Plan</th>
                            <th colSpan="2" className={`${styles.headerGroup} ${styles.categoryGroup}`}>Standard Plan</th>
                            <th colSpan="2" className={`${styles.headerGroup} ${styles.categoryGroup}`}>Premium Plan</th>
                            <th rowSpan="2">Monthly Revenue</th>
                        </tr>
                        <tr>
                            <th>Organic Growth</th>
                            <th>Marketing Campaign</th>
                            <th className={styles.categoryGroup}>Users</th>
                            <th className={styles.categoryGroup}>Revenue</th>
                            <th className={styles.categoryGroup}>Users</th>
                            <th className={styles.categoryGroup}>Revenue</th>
                            <th className={styles.categoryGroup}>Users</th>
                            <th className={styles.categoryGroup}>Revenue</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.monthlyData.map((month, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{formatNumber(month.totalUsers)}</td>
                                <td>{formatNumber(month.organicUsers)}</td>
                                <td>{formatNumber(month.campaignUsers)}</td>
                                <td>{month.growthRate.toFixed(1)}%</td>
                                <td>{formatNumber(month.subscriptionDistribution.basic)}</td>
                                <td>{formatCurrency(month.subscriptionDistribution.basic * subscriptionPlans[0].price)}</td>
                                <td>{formatNumber(month.subscriptionDistribution.standard)}</td>
                                <td>{formatCurrency(month.subscriptionDistribution.standard * subscriptionPlans[1].price)}</td>
                                <td>{formatNumber(month.subscriptionDistribution.premium)}</td>
                                <td>{formatCurrency(month.subscriptionDistribution.premium * subscriptionPlans[2].price)}</td>
                                <td>{formatCurrency(month.revenue)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className={styles.tableActions}>
                <button className={styles.exportButton} onClick={() => handleExport('csv')}>
                    Export to CSV
                </button>
            </div>
        </div>
    );
};

export default ProjectionTable; 