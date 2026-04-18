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
import { MdNavigateNext } from "react-icons/md";

const Aside = ({ subscriptions }) => {
  return (
    <div className={styles.container}>
      <section className={styles.containerMain}>
        <div className={styles.containerMainHome}>
          <div className={styles.containerMainHomeInit}>
            <AiFillHome />
            <a href="/">Início</a>
          </div>
          <div className={styles.containerMainHomeShorts}>
            <SiYoutubeshorts />
            <a href="/">Shorts</a>
          </div>
        </div>
      </section>
      <section className={styles.containerSubs}>
        <div className={styles.containerSubsOne}>
          <span>Inscrições</span>
          <MdNavigateNext />
        </div>
        <div className={styles.containerSubsChannels}>
          {subscriptions.map((subscribe) => {
            return (
              <div key={subscribe.id} className={styles.containerSubsChannelsItem}>
                <img src={subscribe.url} alt="Canal" />
                <span>{subscribe.name}</span>
              </div>
            );
          })}
        </div>
      </section>
      <div className={styles.containerYou}></div>
    </div>
  );
};

export default Aside;
