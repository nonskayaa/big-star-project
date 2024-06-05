import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import classes from "./PhotoSlider.module.sass";

import PhotoCard from "./PhotoCard/PhotoCard";
import { photoCardList } from "../../../../constants/photoCardList";

export default function PhotoSlider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className={classes.card_slider__container}
      >
        {photoCardList.map((photoCardInfo) => {
          return (
            <SwiperSlide>
              <PhotoCard photoCardInfo={photoCardInfo} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
