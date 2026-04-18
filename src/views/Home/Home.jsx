import styles from "./home.module.scss";

import Aside from "./Aside/Aside";
import Main from "./Main/Main";

const chips = [
  "Tudo",
  "Inteligência Artifical",
  "Renderização",
  "Música",
  "Desenvolvimento Web",
  "Jogos",
  "Computadores de mesa",
  "Sistema Operacional",
  "Edições jornalísticas",
];

const subscriptions = [
  {
    id: 1,
    url: "https://yt3.ggpht.com/4UxYRy4fJ0Fo54TRPkw19_W6uCCnzTBSkzm75vGIiEObg4IgY5Ie1BIsNcflFNqofAjxEpTRcQ=s88-c-k-c0x00ffffff-no-rj",
    name: "Beyoncé",
  },
  {
    id: 2,
    url: "https://yt3.ggpht.com/Ny2dPagieD5aSyBNWExKpiTMTXbzbIDb_fO5m8NPR-ug3zvvwLg0tJ-Kn1T5VLzWYzmsokAy=s88-c-k-c0x00ffffff-no-rj",
    name: "ANAVITÓRIA",
  },
  {
    id: 3,
    url: "https://yt3.ggpht.com/ytc/AIdro_mQ2MqmImU7gWwMRs7Rn4fi14BmKCWSOXFvqiBWRFXPsw=s88-c-k-c0x00ffffff-no-rj",
    name: "Bel Rodrigues",
  },
  {
    id: 4,
    url: "https://yt3.ggpht.com/s8Ye13IN7ZbOi4HrMKAr-iN0JCHI1EJxDYLiRByRT96-K9Tz6S3PYTNjRl7D3BB9C_TTl5vY2A=s88-c-k-c0x00ffffff-no-rj",
    name: "Coisa de Nerd",
  },
  {
    id: 5,
    url: "https://yt3.ggpht.com/J4ZnwgZRa8v7tEX_NNYYdxm2LuT9Idtr5mJMWUpPSHxnaUwhLmXAI3m7KKFYM_IYkw7UVcTA2g=s88-c-k-c0x00ffffff-no-rj",
    name: "Diva Depressão",
  },
  {
    id: 6,
    url: "https://yt3.ggpht.com/l6ARvvtI4GWlZMV0nMCoatBy6NjJIB_PVK4ZTEpImbspN57kMaSqMHskIPXkgxsiISB0inbO9J4=s88-c-k-c0x00ffffff-no-rj",
    name: "Imagine Dragons",
  },
  {
    id: 7,
    url: "https://yt3.ggpht.com/T6O7D-JzxSYpt_aO5gHfXO5S-idatH1GSo2iIXkQZcT243_KQ5HXBfLTKGmMbeBZuNzwYQIH=s88-c-k-c0x00ffffff-no-rj",
    name: "Louie Ponto",
  },
];

const Home = () => {
  return (
    <div className={styles.container}>
      <Aside subscriptions={subscriptions} />
      <Main chips={chips} />
    </div>
  );
};

export default Home;
