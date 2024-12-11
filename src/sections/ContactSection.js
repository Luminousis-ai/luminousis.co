import { FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { motion } from 'framer-motion';
import styles from '../styles/ContactSection.module.css';

const ContactSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const contactMethods = [
        {
            icon: <FaPhone />,
            label: 'Phone',
            value: '+90 505 990 53 28',
            href: 'tel:+905059905328',
        },
        {
            icon: <FaEnvelope />,
            label: 'Email',
            value: 'hello@lisai.co',
            href: 'mailto:hello@lisai.co',
        },
        {
            icon: <FaTwitter />,
            label: 'Twitter',
            value: '@lis_ai_co',
            href: 'https://x.com/lis_ai_co',
        },
    ];

    return (
        <section id="contact" className={styles.contactSection}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={styles.header}
                >
                    <h2 className={styles.title}>{t.contact.title}</h2>
                    <p className={styles.description}>{t.contact.description}</p>
                </motion.div>

                <div className={styles.methodsGrid}>
                    {contactMethods.map((method, index) => (
                        <motion.a
                            key={index}
                            href={method.href}
                            target={method.label === 'Twitter' ? '_blank' : undefined}
                            rel={method.label === 'Twitter' ? 'noopener noreferrer' : undefined}
                            className={styles.methodCard}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className={styles.iconWrapper}>
                                {method.icon}
                            </div>
                            <h3 className={styles.methodLabel}>
                                {method.label}
                            </h3>
                            <p className={styles.methodValue}>
                                {method.value}
                            </p>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactSection;