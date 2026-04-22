import styles from './main.module.scss';

import Chips from '../Chips';
import VideoCard from './VideoCard';
import Shorts from './Shorts/';

const Main = ({ chips, videoCard, shorts }) => {
  return (
    <div className={styles.container}>
      <Chips chips={chips} />
      <div className={styles.containerMain}>
        {videoCard
          .filter((item) => {
            return item.position === 'first';
          })
          .map((item) => {
            return (
              <VideoCard
                item={item}
                key={item.id}
              />
            );
          })}
      </div>
      <div className={styles.containerTitle}>
        <div className={styles.containerTitleMain}>
          <img
            src="./youtube_ui_clone/images/icons/shorts_red.svg"
            alt="YouTube Shorts"
          />
          <h3>Shorts</h3>
        </div>
        <div className={styles.containerTitleButton}>
          <img
            src="./youtube_ui_clone/images/icons/options.svg"
            alt="Opções"
          />
        </div>
      </div>
      <div className={styles.containerShorts}>
        {shorts
          .filter((item) => {
            return item.type === 'first';
          })
          .map((item) => {
            return (
              <Shorts
                item={item}
                key={item.id}
              />
            );
          })}
      </div>
      <div className={styles.containerMain}>
        {videoCard
          .filter((item) => {
            return item.position === 'second';
          })
          .map((item) => {
            return (
              <VideoCard
                item={item}
                key={item.id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Main;
