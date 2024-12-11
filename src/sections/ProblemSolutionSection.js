import React from 'react';
import styles from '../styles/ProblemSolutionSection.module.css';
import { FaUserFriends, FaSearch, FaRobot, FaEye } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const ProblemSolutionSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const problemIcons = [<FaSearch />, <FaUserFriends />];
    const solutionIcons = [<FaEye />, <FaRobot />];

    return (
        <section id="problem-solution" className={styles.problemSolutionSection}>
            <h2>{t.problemSolution.title}</h2>
            <div className={styles.container}>
                <div className={styles.column}>
                    <ul className={styles.itemList}>
                        {t.problemSolution.problems.map((problem, index) => (
                            <li key={index} className={styles.item}>
                                <span className={styles.icon}>{problemIcons[index]}</span>
                                <div className={styles.content}>
                                    <p>{problem.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.column}>
                    <ul className={styles.itemList}>
                        {t.problemSolution.solutions.map((solution, index) => (
                            <li key={index} className={styles.item}>
                                <span className={styles.icon}>{solutionIcons[index]}</span>
                                <div className={styles.content}>
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