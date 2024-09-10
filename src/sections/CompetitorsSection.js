import React from 'react';
import styles from '../styles/CompetitorsSection.module.css';

const CompetitorsSection = () => {
    const competitors = [
        { name: 'E-Commerce Sites', largeCatalog: true, visualSearch: false, virtualTryOn: false, clothingFocused: false, innovativeFeatures: false },
        { name: 'Brand Apps', largeCatalog: false, visualSearch: { value: '!', tooltip: 'Limited visual search capabilities' }, virtualTryOn: { value: '!', tooltip: 'Basic virtual try-on features' }, clothingFocused: true, innovativeFeatures: false },
        { name: 'Lis.Ai', largeCatalog: true, visualSearch: true, virtualTryOn: true, clothingFocused: true, innovativeFeatures: true },
    ];

    const features = [
        { name: 'Large Catalog', key: 'largeCatalog' },
        { name: 'Visual Search', key: 'visualSearch' },
        { name: 'Virtual-Try-On', key: 'virtualTryOn' },
        { name: 'Clothing Focused', key: 'clothingFocused' },
        { name: 'Innovative Features', key: 'innovativeFeatures' },
    ];

    const renderCell = (value) => {
        if (typeof value === 'object' && value !== null) {
            return <span className={styles.exclamation} title={value.tooltip}>{value.value}</span>;
        }
        return value ? <span className={styles.checkmark}>✓</span> : <span className={styles.cross}>✕</span>;
    };

    return (
        <section id="competitors" className={styles.competitorsSection}>
            <h2 className={styles.sectionTitle}>Competitors</h2>
            <div className={styles.tableWrapper}>
                <table className={styles.competitorsTable}>
                    <thead>
                        <tr>
                            <th></th>
                            {competitors.map(comp => <th key={comp.name}>{comp.name}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {features.map(feature => (
                            <tr key={feature.key}>
                                <td>{feature.name}</td>
                                {competitors.map(comp => (
                                    <td key={`${comp.name}-${feature.key}`}>
                                        {renderCell(comp[feature.key])}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default CompetitorsSection;