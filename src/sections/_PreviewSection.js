import React, { useRef, useEffect, useState } from 'react';
import styles from '../styles/PreviewSection.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import mockupImage from '../assets/mockup.png';
import previewContent from '../assets/1.webp';

const PreviewSection = () => {
  const sectionRef = useRef(null);
  const mockupRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false); 

  // Ekran boyutunu kontrol etmek için
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // Mobil için farklı scale değerleri
  const scale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    isMobile 
      ? [1.1, 0.8, 0.8, 1.1] // Mobil için daha küçük scale değerleri
      : [1.2, 0.6, 0.6, 1.2]  // Desktop için orijinal değerler
  );

  return (
    <section ref={sectionRef} className={styles.previewSection}>
      <motion.div 
        ref={mockupRef}
        className={styles.mockupContainer}
        style={{ 
          scale,
        }}
      >
        <div className={styles.mockupFrame}>
          <img 
            src={mockupImage} 
            alt="Device Mockup" 
            className={styles.mockupImage}
            loading="eager"
          />
          <div className={styles.contentContainer}>
            <img 
              src={previewContent} 
              alt="Preview Content"
              className={styles.content}
              loading="eager"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PreviewSection;
