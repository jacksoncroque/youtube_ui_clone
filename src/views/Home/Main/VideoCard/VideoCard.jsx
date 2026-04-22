import styles from './videoCard.module.scss';

const VideoCard = ({ item }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerImage}>
        <img
          src={item.thumbnail}
          alt="Thumbnail"
        />
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
      </div>
    </div>
  );
};
export default VideoCard;
