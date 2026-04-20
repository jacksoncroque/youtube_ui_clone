import styles from "./videoCard.module.scss";

const VideoCard = ({ item }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerImage}>
        <img src={item.thumbnail} alt="Thumbnail" />
      </div>
      <div className={styles.containerTop}>
        <img src={item.channelImage} alt="Imagem do Canal" />
        <span>{item.title}</span>
      </div>
      <div className={styles.containerInfos}>
        <span>{item.channel}</span>
        <span>{item.visualizations}</span>
        <span>{item.uploadAt}</span>
      </div>
    </div>
  );
};
export default VideoCard;
