import React from 'react';
import '../styles/CofounderCard.css';
import { FaLinkedin } from 'react-icons/fa';

const CofounderCard = ({ photo, name, position, companyLogo, linkedinUrl }) => {
  return (
    <div className="cofounder-card">
      <img src={photo} alt={name} className="cofounder-photo" />
      <h3 className="cofounder-name">{name}</h3>
      <p className="cofounder-position">{position}</p>
      <a href='https://www.itu.edu.tr' target="_blank" rel="noopener noreferrer">
        <img src={companyLogo} alt="Istanbul Technical University Logo" className="company-logo" />
      </a>
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="linkedin-icon" />
      </a>
    </div>
  );
};

export default CofounderCard;
