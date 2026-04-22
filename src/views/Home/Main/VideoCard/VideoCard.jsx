import { useEffect, useRef } from 'react';
import { FastAverageColor } from 'fast-average-color';

import styles from './videoCard.module.scss';

const VideoCard = ({ item }) => {
  const cardRef = useRef();
  const videoRef = useRef();

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
            const video = videoRef.current;

            video.play();

            setTimeout(() => {
              video.pause();
              video.currentTime = 0;
              video.load();
            }, [5000]);
          }}
          onMouseLeave={() => {
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
        <div className={styles.containerContentImage}>
          <img
            src={item.channelImage}
            alt="Imagem do Canal"
          />
        </div>
        <div className={styles.containerContentInfo}>
          <h4>{item.title}</h4>
          <a href="/">{item.channel}</a>
          <div className={styles.containerContentInfoVT}>
            <span>{item.visualizations}</span>
            <span>·</span>
            <span>{item.uploadAt}</span>
          </div>
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
export default VideoCard;
