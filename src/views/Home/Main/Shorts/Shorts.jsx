import styles from './shorts.module.scss';

import { useEffect, useRef } from 'react';
import { FastAverageColor } from 'fast-average-color';

const Shorts = ({ item }) => {
  const cardRef = useRef();
  const videoRef = useRef();
  const timeoutRef = useRef();

  useEffect(() => {
    const card = cardRef.current;
    const video = videoRef.current;

    if (!video || !card) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = video.poster;

    const fac = new FastAverageColor();

    const applyColor = () => {
      const color = fac.getColor(img);

      const [r, g, b] = color.value;

      const softColor = `rgba(${r}, ${g}, ${b}, 0.2)`;

      card.style.setProperty('--hover-color', softColor);
    };

    if (img.complete) {
      applyColor();
    } else {
      img.onload = applyColor;
    }

    return () => fac.destroy();
  }, []);

  return (
    <div
      ref={cardRef}
      className={styles.container}
    >
      <div className={styles.containerImage}>
        <video
          muted
          ref={videoRef}
          src={item.preview}
          poster={item.thumbnail}
          crossOrigin="anonymous"
          onMouseEnter={() => {
            timeoutRef.current = setTimeout(() => {
              videoRef.current.play();

              timeoutRef.current = setTimeout(() => {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
                videoRef.current.load();
              }, 5000);
            }, 1000);
          }}
          onMouseLeave={() => {
            clearTimeout(timeoutRef.current);

            const video = videoRef.current;
            video.pause();
            video.currentTime = 0;
            video.load();
          }}
        >
          Seu navegador não suporta o elemento video
        </video>
      </div>
      <div className={styles.containerContent}>
        <div className={styles.containerContentInfo}>
          <h3>{item.title}</h3>
          <span>{item.visualizations}</span>
        </div>
        <div className={styles.containerContentButton}>
          <img
            src="/youtube_ui_clone/images/icons/options.svg"
            alt="Opções"
          />
        </div>
      </div>
    </div>
  );
};

export default Shorts;
