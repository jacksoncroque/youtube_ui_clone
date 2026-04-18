import React from "react";
import styles from "./aside.module.scss";

import { AiFillHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineHistory } from "react-icons/md";
import { MdPlaylistAddCheck } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { SlLike } from "react-icons/sl";
import { GoVideo } from "react-icons/go";
import { MdDownload } from "react-icons/md";

const Aside = ({ subscriptions }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerMain}>
        <div className={styles.containerMainHome}>
          <AiFillHome />
          <a href="/">Início</a>
        </div>
        <div className={styles.containerMainHome}>
          <SiYoutubeshorts />
          <a href="/">Shorts</a>
        </div>
      </div>
      <div className={styles.containerSubs}>
        <div className={styles.containerChannels}>
          {subscriptions.map((subscribe) => {
            return (
              <React.Fragment key={subscribe.id}>
                <img src={subscribe.url} alt="Canal" />
                <span>{subscribe.name}</span>
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <div className={styles.containerYou}></div>
    </div>
  );
};

export default Aside;
