import styles from "./main.module.scss";

import Chips from "../Chips/Chips";

const Main = ({ chips }) => {
  return (
    <div className={styles.container}>
      <Chips chips={chips} />
    </div>
  );
};

export default Main;
