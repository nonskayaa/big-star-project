import DateIcon from "../DateIcon/DateIcon";
import DiscountIcon from "../DiscountIcon/DiscountIcon";
import classes from "./PromoCard.module.sass";

import { Promotion } from "../../../../types/Promotion";
import ArrowIcon from "../../../../components/icons/ArrowIcon";

import { motion } from "framer-motion";


export default function PromoCard({ promotion }: { promotion: Promotion }) {
  const promoCardVars = {
    whileHover: {
      scale: 1.06,
      transition: {
        type: "spring",
      },
    },
  };

  return (
    <a href={promotion.link} className={classes.promo_card__link}>
      <motion.div
        className={classes.promo_card__container}
        variants={promoCardVars}
        whileHover={"whileHover"}
      >
        <div className={classes.promo_card__top}>
          <div className={classes.promo_card__image_container}>
            <img
              src={process.env.REACT_APP_API_URL + "/" + promotion.image}
              alt="promo"
              className={classes.promo_card__image}
            />
          </div>
          <div className={classes.promo_card__arrow_icon}>
            <ArrowIcon />
          </div>
          <DiscountIcon sizeOfDiscount={promotion.size_of_discount} />
        </div>
        <div className={classes.promo_card__bottom}>
          <h3 className={classes.promo_card__title}>
            {promotion.name_of_shop}
          </h3>
          <DateIcon dateFrom={promotion.date_from} dateTo={promotion.date_to} />
          <p className={classes.promo_card__subtitle}>
            {promotion.description}
          </p>
        </div>
      </motion.div>
    </a>
  );
}
