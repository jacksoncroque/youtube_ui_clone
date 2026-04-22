import styles from './chips.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Chips = ({ chips }) => {
  return (
    <div className={styles.container}>
      <Swiper
        className={styles.containerMain}
        slidesPerView="auto"
        spaceBetween={0}
      >
        {chips.map((chip) => {
          return (
            <SwiperSlide
              key={chip}
              className={styles.containerMainSwiper}
            >
              <span>{chip}</span>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Chips;
