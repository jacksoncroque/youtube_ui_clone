import styles from "./main.module.scss";

import Chips from "../Chips";
import VideoCard from "./VideoCard"

const Main = ({ chips, videoCard }) => {
  return (
    <div className={styles.container}>
      <Chips chips={chips} />
      <div className={styles.containerMain}>
        {videoCard.map((item) => {
          return <VideoCard item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Main;
