import styles from './home.module.scss';

import Aside from './Aside/Aside';
import Main from './Main/Main';

const chips = [
  'Tudo',
  'Inteligência Artifical',
  'Renderização',
  'Música',
  'Desenvolvimento Web',
  'Jogos',
  'Computadores de mesa',
  'Sistema Operacional',
  'Edições jornalísticas',
  'Programação de computadores',
  'JavaScript',
  'Arranjo',
  'Ao vivo',
  'Código Fonte',
];

const subscriptions = [
  {
    id: 1,
    url: 'https://yt3.ggpht.com/4UxYRy4fJ0Fo54TRPkw19_W6uCCnzTBSkzm75vGIiEObg4IgY5Ie1BIsNcflFNqofAjxEpTRcQ=s88-c-k-c0x00ffffff-no-rj',
    name: 'Beyoncé',
  },
  {
    id: 2,
    url: 'https://yt3.ggpht.com/Ny2dPagieD5aSyBNWExKpiTMTXbzbIDb_fO5m8NPR-ug3zvvwLg0tJ-Kn1T5VLzWYzmsokAy=s88-c-k-c0x00ffffff-no-rj',
    name: 'ANAVITÓRIA',
  },
  {
    id: 3,
    url: 'https://yt3.ggpht.com/ytc/AIdro_mQ2MqmImU7gWwMRs7Rn4fi14BmKCWSOXFvqiBWRFXPsw=s88-c-k-c0x00ffffff-no-rj',
    name: 'Bel Rodrigues',
  },
  {
    id: 4,
    url: 'https://yt3.ggpht.com/s8Ye13IN7ZbOi4HrMKAr-iN0JCHI1EJxDYLiRByRT96-K9Tz6S3PYTNjRl7D3BB9C_TTl5vY2A=s88-c-k-c0x00ffffff-no-rj',
    name: 'Coisa de Nerd',
  },
  {
    id: 5,
    url: 'https://yt3.ggpht.com/J4ZnwgZRa8v7tEX_NNYYdxm2LuT9Idtr5mJMWUpPSHxnaUwhLmXAI3m7KKFYM_IYkw7UVcTA2g=s88-c-k-c0x00ffffff-no-rj',
    name: 'Diva Depressão',
  },
  {
    id: 6,
    url: 'https://yt3.ggpht.com/l6ARvvtI4GWlZMV0nMCoatBy6NjJIB_PVK4ZTEpImbspN57kMaSqMHskIPXkgxsiISB0inbO9J4=s88-c-k-c0x00ffffff-no-rj',
    name: 'Imagine Dragons',
  },
  {
    id: 7,
    url: 'https://yt3.ggpht.com/T6O7D-JzxSYpt_aO5gHfXO5S-idatH1GSo2iIXkQZcT243_KQ5HXBfLTKGmMbeBZuNzwYQIH=s88-c-k-c0x00ffffff-no-rj',
    name: 'Louie Ponto',
  },
];

const navItems = [
  // MAIN
  {
    id: 1,
    icon: '/images/icons/home.svg',
    label: 'Início',
    type: 'main',
  },
  {
    id: 2,
    icon: '/images/icons/shorts.svg',
    label: 'Shorts',
    type: 'main',
  },

  // LIBRARY
  {
    id: 3,
    icon: '/images/icons/history.svg',
    label: 'Histórico',
    type: 'library',
  },
  {
    id: 4,
    icon: '/images/icons/playlists.svg',
    label: 'Playlists',
    type: 'library',
  },
  {
    id: 5,
    icon: '/images/icons/watch_later.svg',
    label: 'Assistir mais tarde',
    type: 'library',
  },
  {
    id: 6,
    icon: '/images/icons/liked.svg',
    label: 'Vídeos com "Gostei"',
    type: 'library',
  },
  {
    id: 7,
    icon: '/images/icons/videos.svg',
    label: 'Seus vídeos',
    type: 'library',
  },
  {
    id: 8,
    icon: '/images/icons/download.svg',
    label: 'Downloads',
    type: 'library',
  },

  // EXPLORE
  {
    id: 9,
    icon: '/images/icons/shopping.svg',
    label: 'Shopping',
    type: 'explore',
  },
  {
    id: 10,
    icon: '/images/icons/music.svg',
    label: 'Música',
    type: 'explore',
  },
  {
    id: 11,
    icon: '/images/icons/films.svg',
    label: 'Filmes',
    type: 'explore',
  },
  {
    id: 12,
    icon: '/images/icons/more.svg',
    label: 'Mostrar mais',
    type: 'explore',
  },
  {
    id: 13,
    icon: '/images/icons/denuncies.svg',
    label: 'Histórico de denúncias',
    type: 'more',
  },
];

const youtubeItems = [
  {
    id: 1,
    icon: '/images/icons/premium.svg',
    label: 'YouTube Premium',
  },
  {
    id: 2,
    icon: '/images/icons/Youtube_Music_icon.svg',
    label: 'YouTube Music',
  },
  {
    id: 3,
    icon: 'images/icons/YouTube_Kids_LogoVector.svg',
    label: 'YouTube Kids',
  },
];

const videoCard = [
  {
    id: 1,
    title: 'Aprenda todos os conceitos básicos de JavaScript em 20 minutos',
    thumbnail:
      'https://i.ytimg.com/vi/xKOyDDuQSVY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDytzaCMPmR3RixxrXaO8BG6Vks1w',
    preview: '/videos/learn_js.mp4',
    channel: 'Coding2GO',
    channelImage:
      'https://yt3.ggpht.com/DDvCeQPtcL0K2b96Q8cP0x-d5RWX-tXCUDAxvQUvD0_m26Jt1gyHuXCfxN9Xo1EQVckPF1miNDg=s88-c-k-c0x00ffffff-no-rj',
    visualizations: '24 mil visualizações',
    uploadAt: 'há 2 semanas',
    position: 'first',
  },
  {
    id: 2,
    title:
      'PROJETO DE FILMES COM REACT E API DO TMDB (REACT ROUTER, REACT HOOKS)',
    thumbnail:
      'https://i.ytimg.com/vi/XqxUHVVO7-U/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBeorIZAqwfuPDIkwnkx0d__JaUBA',
    preview: '/videos/film-project.mp4',
    channel: 'Matheus Battisti - Hora de Codar',
    channelImage:
      'https://yt3.ggpht.com/uPCkzVLQAv_qhRQJ_cGGfAZvWCNQ-eaxGVcvXlVjpV3qALP5r1-HvC1nLBmGAlS2At_z-I70bg=s88-c-k-c0x00ffffff-no-rj',
    visualizations: '84 mil visualizações',
    uploadAt: 'há 3 anos',
    position: 'first',
  },
  {
    id: 3,
    title: 'Domine o React Router de forma fácil',
    thumbnail:
      'https://i.ytimg.com/vi/c02YoWR9gSY/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCr7fc8lUVI_gF7XjLFaLzfZs3gqw',
    preview: '/videos/domine_router.mp4',
    channel: 'Nova Designs',
    channelImage:
      'https://yt3.ggpht.com/OtO6tCDjPSx4XZKj4AQdI4jXHoaIaKv_UU2Q_3uw4chk3ifTyhMFSBYJaoMjySb-ihS_ILd7Nw=s88-c-k-c0x00ffffff-no-rj',
    visualizations: '94 mil visualizações',
    uploadAt: 'há 1 ano',
    position: 'first',
  },
  {
    id: 4,
    title: 'Ariana Grande - imperfect for you (Live on SNL)',
    thumbnail:
      'https://i.ytimg.com/vi/sgw3BmOb5eI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCm1n33l2daeb2BLgYk5FkQLunh-Q',
    preview: '/videos/ariana_grande.mp4',
    channel: 'Ariana Grande',
    channelImage:
      'https://yt3.googleusercontent.com/vLWO1tajYHyFJ3lGkcMxKMayA-ZNUqCUYj5bOO8TWhNVL7EV-bjxmguUkZ3B2dMsAtZYir8r=s176-c-k-c0x00ffffff-no-rj-mo',
    visualizations: '5,4 mi de visualizações',
    uploadAt: 'há 2 anos',
    position: 'second',
  },
  {
    id: 5,
    title: 'Por que no ESPAÇO é IMPOSSÍVEL viajar em LINHA RETA?',
    thumbnail:
      'https://i.ytimg.com/vi/PbL4ei4RTqg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDyEI7AZ8U4Scf619pxj52aTPz75Q',
    preview: '/videos/espaço.mp4',
    channel: 'Blu Ciência',
    channelImage:
      'https://yt3.ggpht.com/0BeiW_fPv7e-_yc1oRBdRuRn-vprcV7GJgxR5TJFwxPrGo0qQwPsZQfpM2U_ucXPhaZNRvQdYg=s68-c-k-c0x00ffffff-no-rj',
    visualizations: '24 mil visualizações',
    uploadAt: 'há 3 dias',
    position: 'second',
  },
  {
    id: 6,
    title: 'O que são os algoritmos e como prendem você',
    thumbnail:
      'https://i.ytimg.com/vi/nj22l1gIll8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAi_NmxcrDmkwEJi4P08hZhdyOjMw',
    preview: '/videos/algoritmos.mp4',
    channel: 'BBC News Brasil',
    channelImage:
      'https://yt3.ggpht.com/ytc/AIdro_nxfAGf2WYRHqMTgrScAVCAKN4ZHqwY89Z_5KirrVNsQTmi=s68-c-k-c0x00ffffff-no-rj',
    visualizations: '238 mil visualizações',
    uploadAt: 'há 4 anos',
    position: 'second',
  },
  {
    id: 7,
    title:
      'Como funcionam as LINGUAGENS de PROGRAMAÇÃO #SagaDosComputadores Ep. 8',
    thumbnail:
      'https://i.ytimg.com/vi/22nd99SLgNA/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLADwRlLgVVhRw8eZes3UsxRfbJCNA',
    preview: '/videos/manual_do_mundo.mp4',
    channel: 'Manual do Mundo',
    channelImage:
      'https://yt3.ggpht.com/6ZMLayvP5HkX4mgU6ELfDwAl0AWFITQ43mSH7xPcXmxaRkGLbN54ugeeJ5AfY6OgAzTT71MZ=s88-c-k-c0x00ffffff-no-rj',
    visualizations: '1,6 mi de visualizações',
    uploadAt: 'há 3 anos',
    position: 'second',
  },
  {
    id: 8,
    title:
      'Vecna é o Novo Killer do Dead by Daylight - Novo Mapa Com TELETRANSPORTE e MAIS!',
    thumbnail:
      'https://i.ytimg.com/vi/u7bEgME70N4/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCiWPKPIIYR8g6OCCLYD7GdCL6xOA',
    preview: '/videos/vecna.mp4',
    channel: 'SouzaSoul',
    channelImage:
      'https://yt3.ggpht.com/Yqp2V7TJN8C_6Br3uR-lMvBh-bqPoux3fqI4BqmrF6AR0QhzYw7wT2lD3QmJ2Ffq0A6L9xd24w=s68-c-k-c0x00ffffff-no-rj',
    visualizations: '140 mil visualizções',
    uploadAt: 'há 1 ano',
    position: 'second',
  },
  {
    id: 9,
    title: '10 Conceitos-Base de Computação Que Você Precisa Saber',
    thumbnail:
      'https://i.ytimg.com/vi/zLV586SXHsU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCpBGlIZZgw5MVuAKaJPqNc3Y-3hA',
    preview: '/videos/computação.mp4',
    channel: 'Arthur Takeda',
    channelImage:
      'https://yt3.ggpht.com/c_dwwZrEeEh-mKcIk5RFo5T6vOoxDkKzttZFhoJe5KzFYHTgat-RiGAyqlbP8cbFx7pCNfiChg=s68-c-k-c0x00ffffff-no-rj',
    visualizations: '57 mil visualizções',
    uploadAt: 'há 2 meses',
    position: 'second',
  },
];

const shorts = [
  {
    id: 1,
    thumbnail:
      'https://i.ytimg.com/vi/IjqSSyjrWPA/oardefault.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLCm4DBYOa0Niu0walxWB4NCLQ9J1Q&usqp=CCk',
    preview: '/videos/simple_design_ui.mp4',
    title: 'Simple Sign In Form UI using HTML & CSS',
    visualizations: '4,1mi de visualizações',
    type: 'first',
  },
  {
    id: 2,
    thumbnail:
      'https://i.ytimg.com/vi/sNq1ooPOXvU/oardefault.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLDjhBgWnZKNk7Y2hKp5kdC0DULH0A&usqp=CCk',
    preview: '/videos/resumo_js.mp4',
    title: 'Resumo meia boca de JavaScript',
    visualizations: '15 mil visualizações',
    type: 'first',
  },
  {
    id: 3,
    thumbnail:
      'https://i.ytimg.com/vi/ZxDcTwe2ZA8/oardefault.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLDxL3oYqYbAemwgI1BI9f8gnsnPiQ&usqp=CCk',
    title: 'Rosalía performing Berghain in Milan',
    preview: '/videos/rosalia.mp4',
    visualizations: '177 mil visualizações',
    type: 'first',
  },
  {
    id: 4,
    thumbnail:
      'https://i.ytimg.com/vi/pCvbDzLWcGk/oar1.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLBgE0mB7OW9SoQEvlVf6NeQfEhpWg&usqp=CCk',
    preview: '/videos/excel.mp4',
    title: 'Como economizar espaço na planilha do Excel girando',
    visualizations: '1,1 mi de visualizações',
    type: 'first',
  },
  {
    id: 5,
    thumbnail:
      'https://i.ytimg.com/vi/Doy3oDTtPIY/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLBp4UJnkLKr98CsmWf3OAVzzARySA&usqp=CCk',
    preview: '/videos/dev_junior.mp4',
    title: '5 COISAS QUE TODO FRONTEND JUNIOR DEVE',
    visualizations: '232 mil visualizações',
    type: 'first',
  },
];
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <Aside
          subscriptions={subscriptions}
          navItems={navItems}
          youtubeItems={youtubeItems}
        />
        <Main
          chips={chips}
          videoCard={videoCard}
          shorts={shorts}
        />
      </div>
    </div>
  );
};

export default Home;
