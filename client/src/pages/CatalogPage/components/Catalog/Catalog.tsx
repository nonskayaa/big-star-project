import { Swiper, SwiperSlide } from "swiper/react";

import { Mousewheel, Pagination, Autoplay } from "swiper/modules";
import { EffectCreative } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import classes from "./Catalog.module.sass";
import Slide from "../Slide/Slide";

import { productSlidesInfo } from "../../../../constants/productSlidesInfo";

export default function Catalog() {
  return (
    <>
      <Swiper
        direction={"horizontal"}
        slidesPerView={1}
        mousewheel={true}
        speed={1050}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        watchSlidesProgress={true}
        pagination={{
          clickable: true,
        }}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-40%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[Mousewheel, Pagination, EffectCreative, Autoplay]}
        className={classes.swiper}
      >
        {productSlidesInfo.map((productInfo) => {
          return (
            <SwiperSlide>
              {({ isVisible }) => (
                <Slide productInfo={productInfo} isSlideActive={isVisible} />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
