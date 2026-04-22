import styles from './shorts.module.scss';

import { useEffect, useRef } from 'react';
import { FastAverageColor } from 'fast-average-color';

const Shorts = ({ item }) => {
  const cardRef = useRef();
  const imageRef = useRef();
  const shortsRef = useRef();

  useEffect(() => {
    const img = imageRef.current;
    const card = cardRef.current;

    if (!img || !card) return;

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
    <div className={styles.container}>
      <div className={styles.containerImage}>
        <video
          muted
          ref={shortsRef}
          src={item.preview}
          poster={item.thumbnail}
          crossOrigin="anonymous"
          onMouseEnter={() => {
            const video = shortsRef.current;

            if (!video) return;

            video.play();

            setTimeout(() => {
              video.pause();
              video.currentTime = 0;
              video.load();
            }, [5000]);
          }}
          onMouseLeave={() => {
            const video = shortsRef.current;

            if (!video) return;

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
            src="/images/icons/options.svg"
            alt="Opções"
          />
        </div>
      </div>
    </div>
  );
};

export default Shorts;
