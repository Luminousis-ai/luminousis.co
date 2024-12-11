import React from 'react';
import styles from '../styles/CompetitorsSection.module.css';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const CompetitorsSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const competitors = [
        { name: t.competitors.companies.ecommerce, largeCatalog: true, visualSearch: { value: '!', tooltip: t.competitors.tooltips.limitedVisualSearch }, virtualTryOn: false, clothingFocused: false},
        { name: t.competitors.companies.brandApps, largeCatalog: false, visualSearch: { value: '!', tooltip: 'Limited visual search capabilities' }, virtualTryOn: false, clothingFocused: true},
        { name: t.competitors.companies.googleLens, largeCatalog: true, visualSearch: true, virtualTryOn: false, clothingFocused: false},
        { name: t.competitors.companies.lisai, largeCatalog: true, visualSearch: true, virtualTryOn: true, clothingFocused: true},
    ];

    const features = [
        { name: t.competitors.features.largeCatalog, key: 'largeCatalog' },
        { name: t.competitors.features.visualSearch, key: 'visualSearch' },
        { name: t.competitors.features.virtualTryOn, key: 'virtualTryOn' },
        { name: t.competitors.features.clothingFocused, key: 'clothingFocused' },
    ];

    const renderCell = (value) => {
        if (typeof value === 'object' && value !== null) {
            return <span className={styles.exclamation} title={value.tooltip}>{value.value}</span>;
        }
        return value ? <span className={styles.checkmark}>✓</span> : <span className={styles.cross}>✕</span>;
    };

    return (
        <section id="competitors" className={styles.competitorsSection}>
            <h2>{t.competitors?.title}</h2>
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