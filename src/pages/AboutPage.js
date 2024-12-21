import React from 'react';
import AboutSection from '../sections/AboutSection';
import CofounderCard from '../components/CofounderCard';
import companyLogo from '../assets/itu_logo.png';
import tarik_bacak from '../assets/cofounders/tarik_bacak.webp';
import h_fatih_durkaya from '../assets/cofounders/h_fatih_durkaya.webp';
import esad_ugur from '../assets/cofounders/esad_ugur.webp';
import yusuf_aslan from '../assets/cofounders/yusuf_aslan.webp';
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
      name: "Yusuf Aslan",
      position: "Co-Founder",
      photo: yusuf_aslan,
      linkedinUrl: "https://linkedin.com/in/yusuf-aslan-47052b1b6"
    },
    {
      name: "Eren Yaşa",
      position: "Co-Founder",
      photo: eren_yasa,
      linkedinUrl: "https://linkedin.com/in/eren-yaşa-007a061b6"
    },
  ];

  return (
    <div className="about-page">
      <AboutSection />
      <div className="cofounders-container">
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
    </div>
  );
};

export default AboutPage;