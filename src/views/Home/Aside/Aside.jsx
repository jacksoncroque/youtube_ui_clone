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
        <div className={styles.containerSubsTitle}>
          <span>Incrições</span>
          <IoIosArrowForward />
        </div>
        <Subscriptions subscriptions={subscriptions} />
        <NavItems navItems={[navItems[11]]} />
      </section>
      <section className={styles.containerYou}>
        <div className={styles.containerYouTitle}>
          <span>Você</span>
          <IoIosArrowForward />
        </div>
        <NavItems navItems={navItems.filter((i) => i.type === "library")} />
      </section>
      <section className={styles.containerExplore}>
        <div className={styles.containerExploreTitle}>
          <span>Explorar</span>
        </div>
        <NavItems navItems={navItems.filter((i) => i.type === "explore")} />
      </section>
      <section className={styles.containerYoutube}>
        <div className={styles.containerYoutubeTitle}><span>Mais do YouTube</span></div>
        <NavItems navItems={youtubeItems} />
      </section>
      <section className={styles.containerDenuncies}>
        <NavItems navItems={navItems.filter((i) => i.type === "more")} />
      </section>
      <section className={styles.containerFooter}>
        <ul>
          <li>
            <a href="/">Sobre</a>
          </li>
          <li>
            <a href="/">Imprensa</a>
          </li>
          <li>
            <a href="/">Direitos autorais</a>
          </li>
          <li>
            <a href="/">Entre em contato</a>
          </li>
          <li>
            <a href="/">Criadores de conteúdo</a>
          </li>
          <li>
            <a href="/">Publicidade</a>
          </li>
          <li>
            <a href="/">Desenvolvedores</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/">Termos</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/">Privacidade</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/">Política e segurança</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/">Como funciona o YouTube</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/">Testar os novos recursos</a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Aside;
