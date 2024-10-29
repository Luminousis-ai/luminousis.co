import React from 'react';
import styles from '../styles/ProblemSolutionSection.module.css';
import { FaUserFriends, FaSearch, FaChartLine, FaRobot, FaEye, FaCog } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const ProblemSolutionSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    // Icon mapping for problems and solutions
    const problemIcons = [<FaUserFriends />, <FaSearch />, <FaChartLine />];
    const solutionIcons = [<FaRobot />, <FaEye />, <FaCog />];

    return (
        <section id="problem-solution" className={styles.problemSolutionSection}>
            <h2 className={styles.sectionTitle}>{t.problemSolution.title}</h2>
            <div className={styles.container}>
                <div className={styles.column}>
                    <h3>{language === 'tr' ? 'Sorunlar' : 'Problems'}</h3>
                    <ul className={styles.itemList}>
                        {t.problemSolution.problems.map((problem, index) => (
                            <li key={index} className={styles.item}>
                                <span className={styles.icon}>{problemIcons[index]}</span>
                                <div className={styles.content}>
                                    <h3>{problem.title}</h3>
                                    <p>{problem.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.column}>
                    <h3>{language === 'tr' ? 'Çözümler' : 'Solutions'}</h3>
                    <ul className={styles.itemList}>
                        {t.problemSolution.solutions.map((solution, index) => (
                            <li key={index} className={styles.item}>
                                <span className={styles.icon}>{solutionIcons[index]}</span>
                                <div className={styles.content}>
                                    <h3>{solution.title}</h3>
                                    <p>{solution.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolutionSection;