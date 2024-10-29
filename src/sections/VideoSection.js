import React from 'react';
import styles from '../styles/VideoSection.module.css';
import thumbnail from '../assets/thumbnail.jpg';
import demoVideo from '../assets/demo_video.mp4';

const VideoSection = () => {
    return (
        <section className={styles.videoSection}>
            <div className={styles.videoWrapper}>
                <video
                    controls
                    preload="none"
                    poster={thumbnail}
                    width="100%"
                    height="auto"
                >
                    <source src={demoVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
};

export default VideoSection;
