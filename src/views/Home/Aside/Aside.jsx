import styles from "./aside.module.scss";

import Subscriptions from "./Subscriptions/Subscriptions";
import NavItems from "./NavItems/NavItems";

import { IoIosArrowForward } from "react-icons/io";

const Aside = ({ subscriptions, navItems, youtubeItems }) => {
  return (
    <div className={styles.container}>
      <section className={styles.containerMain}>
        <NavItems navItems={navItems.filter((i) => i.type === "main")} />
      </section>
      <section className={styles.containerSubs}>
        <div>
          <span>Incrições</span>
          <IoIosArrowForward />
        </div>
        <Subscriptions subscriptions={subscriptions} />
        <NavItems navItems={[navItems[11]]} />
      </section>
      <section>
        <div>
          <span>Você</span>
        </div>
        <NavItems navItems={navItems.filter((i) => i.type === "library")} />
      </section>
      <section>
        <span>Explorar</span>
        <NavItems navItems={navItems.filter((i) => i.type === "explore")} />
      </section>
      <section>
        <NavItems navItems={youtubeItems} />
      </section>
      <section>
        <NavItems navItems={navItems.filter((i) => i.type === "more")} />
      </section>
    </div>
  );
};

export default Aside;
