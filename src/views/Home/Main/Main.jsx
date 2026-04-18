import styles from "./main.module.scss";

import Chips from "../Chips/Chips";

const Main = ({ chips }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerChips}>
        <Chips chips={chips} />
      </div>
    </div>
  );
};

export default Main;
