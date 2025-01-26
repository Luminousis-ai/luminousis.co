import React from 'react';
import styles from '../styles/AboutPage.module.css';
import AboutSection from '../sections/AboutSection';
import CofounderCard from '../components/CofounderCard';
import companyLogo from '../assets/itu_logo.png';
import tarik_bacak from '../assets/cofounders/tarik_bacak.webp';
import h_fatih_durkaya from '../assets/cofounders/h_fatih_durkaya.webp';
import esad_ugur from '../assets/cofounders/esad_ugur.webp';
import eren_yasa from '../assets/cofounders/eren_yasa.webp';

const AboutPage = () => {
  const cofounders = [
    {
      name: "Esad Uğur",
      position: "Co-Founder",
      photo: esad_ugur,
      linkedinUrl: "https://linkedin.com/in/esad-uğur-50a277209"
    },
    {
      name: "H. Fatih Durkaya",
      position: "Co-Founder",
      photo: h_fatih_durkaya,
      linkedinUrl: "https://linkedin.com/in/hasan-fatih-durkaya"
    },
    {
      name: "Tarık Bacak",
      position: "Co-Founder",
      photo: tarik_bacak,
      linkedinUrl: "https://linkedin.com/in/tarikbacak"
    },
    {
      name: "Eren Yaşa",
      position: "Co-Founder",
      photo: eren_yasa,
      linkedinUrl: "https://linkedin.com/in/eren-yaşa-007a061b6"
    },
  ];

  return (
      <div className={styles.aboutPage}>
        <AboutSection />
        <section className={styles.aboutSection}>
          <div className={styles.cofoundersContainer}>
            {cofounders.map((cofounder, index) => (
              <CofounderCard
                key={index}
                photo={cofounder.photo}
                name={cofounder.name}
                position={cofounder.position}
                companyLogo={companyLogo}
                linkedinUrl={cofounder.linkedinUrl}
              />
            ))}
          </div>
        </section>
      </div>
    );
  };

export default AboutPage;