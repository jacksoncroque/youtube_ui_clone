import styles from "./shorts.module.scss";
const Shorts = ({ item }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerImage}>
        <img src={item.thumbnail} alt="Capa do vídeo" />
      </div>
      <div className={styles.containerContent}>
        <div className={styles.containerContentInfo}>
          <h3>{item.title}</h3>
          <span>{item.visualizations}</span>
        </div>
        <div className={styles.containerContentButton}>
          <img src="/images/icons/options.svg" alt="Opções" />
        </div>
      </div>
    </div>
  );
};

export default Shorts;
