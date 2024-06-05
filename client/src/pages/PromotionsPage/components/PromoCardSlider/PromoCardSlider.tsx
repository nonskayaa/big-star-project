import classes from "./PromoCardSlider.module.sass";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import PromoCard from "../PromoCard/PromoCard";

import { observer } from "mobx-react-lite";
import PromotionStore from "../../../../store/PromotionStore";
import { useEffect, useState } from "react";
import { fetchPromotions } from "../../../../http/promotionsAPI";

import { Promotion } from "../../../../types/Promotion";

export default observer(function PromoCardSlider() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPromotions().then((data: Promotion[]) => {
      PromotionStore.setPromotions(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <div className={classes.promo_card__slider}>
          <h2>Loading...</h2>
        </div>
      ) : (
        <Swiper
          slidesPerView={3.5}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className={classes.promo_card__slider}
          breakpoints={{
            1280: {
              slidesPerView: 3.2,
            },
            1024: {
              slidesPerView: 2.5,
            },
            768: {
              slidesPerView: 2.25,
            },
            520: {
              slidesPerView: 1.5,
            },
            320: {
              slidesPerView: 1.25,
            },
            280: {
              slidesPerView: 1,
            },
          }}
        >
          {PromotionStore.promotionsList.map((promotion) => (
            <SwiperSlide>
              <PromoCard key={promotion.id} promotion={promotion} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
});
