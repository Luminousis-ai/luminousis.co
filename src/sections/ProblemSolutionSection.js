import React from 'react';
import styles from '../styles/ProblemSolutionSection.module.css';
import { FaSearch, FaChartLine, FaRobot, FaUserFriends, FaEye, FaCog } from 'react-icons/fa';

const ProblemSolutionSection = () => {
    const problems = [
        {
            icon: <FaUserFriends />,
            title: "Lack of Personalization and Interaction",
            description: "Lack of personalization and interactive features in Fashion Retail"
        },
        {
            icon: <FaSearch />,
            title: "Ineffective Product Discovery",
            description: "Ineffective product discovery through traditional search methods"
        },
        {
            icon: <FaCog />,
            title: "Challenges in Trend Prediction",
            description: "Challenges in trend prediction and rapid design adaptation"
        }
    ];

    const solutions = [
        {
            icon: <FaEye />,
            title: "Visual Search Technology",
            description: "Enhanced product discovery through visual search technology"
        },
        {
            icon: <FaChartLine />,
            title: "Sales Data Analysis",
            description: "Sales data analysis to predict new trends and inform design decisions"
        },
        {
            icon: <FaRobot />,
            title: "AI-Based Personalization",
            description: "AI-based personalization system tailored to individual shopping experiences"
        }
    ];

    return (
        <section id="problem-solution" className={styles.problemSolutionSection}>
            <h2 className={styles.sectionTitle}>Problems and Solutions</h2>
            <div className={styles.container}>
                <div className={styles.column}>
                    <h3>Problems</h3>
                    <ul className={styles.itemList}>
                        {problems.map((problem, index) => (
                            <li key={index} className={styles.item}>
                                <span className={styles.icon}>{problem.icon}</span>
                                <div className={styles.content}>
                                    <h3>{problem.title}</h3>
                                    <p>{problem.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.column}>
                    <h3>Solutions</h3>
                    <ul className={styles.itemList}>
                        {solutions.map((solution, index) => (
                            <li key={index} className={styles.item}>
                                <span className={styles.icon}>{solution.icon}</span>
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