import React, { useRef, useState } from 'react';
import styles from '../styles/ProductVideoSection.module.css';
import thumbnail from '../assets/thumbnail.jpg';
import demoVideo from '../assets/demo_video.mp4';
import { FaPlay } from 'react-icons/fa';

import product1 from '../assets/1.webp';
import product2 from '../assets/2.webp';
import product3 from '../assets/3.webp';
import product4 from '../assets/4.webp';
import product5 from '../assets/5.webp';
import product6 from '../assets/6.webp';
import product7 from '../assets/7.webp';
import product8 from '../assets/8.webp';
import product9 from '../assets/9.webp';

const ProductVideoSection = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayVideo = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section className={styles.productVideoSection}>
            <div className={styles.container}>
                <div className={styles.videoColumn}>
                    <div className={styles.videoWrapper}>
                        <video
                            ref={videoRef}
                            preload="none"
                            poster={thumbnail}
                            controls
                            onClick={handlePlayVideo}
                        >
                            <source src={demoVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        {!isPlaying && (
                            <button className={styles.playButton} onClick={handlePlayVideo}>
                                <FaPlay />
                            </button>
                        )}
                    </div>
                </div>

                <div className={styles.screenshotsColumn}>
                    {[product1, product2, product3, product4, product5, product7, product6, product8, product9]
                        .map((screenshot, index) => (
                            <div key={index} className={styles.screenshot}>
                                <img 
                                    src={screenshot} 
                                    alt={`App screenshot ${index + 1}`}
                                    loading="lazy"
                                />
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default ProductVideoSection;
