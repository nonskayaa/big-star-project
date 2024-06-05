import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Autoplay, FreeMode } from "swiper/modules";

import MarketplaceLink from "../../MarketplaceLink/MarketplaceLink";
import { MarketplaceLinksList } from "../../../../../types/MarketplaceLinksList";
import classes from "./LinkSlider.module.sass";

export default function LinkSlider({
  linksList,
}: {
  linksList: MarketplaceLinksList;
}) {
  return (
    <Swiper
      loop={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      slidesPerView={4}
      spaceBetween={0}
      speed={6000}
      modules={[EffectCreative, Autoplay, FreeMode]}
      className={classes.links_slider}
      freeMode={true}
      breakpoints={{
        1024: {
          slidesPerView: 3.5,
        },
        768: {
          slidesPerView: 3,
        },
        320: {
          slidesPerView: 2.3,
        },
      }}
    >
      {Object.keys(linksList).map((key: string) => (
        <SwiperSlide>
          <MarketplaceLink link={linksList[key]} marketplaceTitle={key} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
