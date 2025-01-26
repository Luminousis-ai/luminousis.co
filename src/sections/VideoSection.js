import React from 'react';
import styles from '../styles/VideoSection.module.css';

const VideoSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.mockupContainer}>
        <div className={styles.screenArea}>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className={styles.video}
            poster="/placeholder.jpg"
          >
            <source src="/screen-recording.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;