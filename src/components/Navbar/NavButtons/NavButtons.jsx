import styles from "./navButtons.module.scss";

import { FiPlus } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";

const NavButtons = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerMain}>
        <FiPlus />
        <a href="/">Criar</a>
      </div>
      <div className={styles.containerSub}>
        <div className={styles.containerSubButton}><IoNotificationsOutline /></div>
        <img
          src="https://yt3.ggpht.com/yti/ANjgQV_qfr8UuOxAdSA9q0GhmN5xEv3GmzfoMyBCjkY7DwYR2_Z5=s88-c-k-c0x00ffffff-no-rj"
          alt="Dev"
        />
      </div>
    </div>
  );
};

export default NavButtons;
