import HeartIcon from "../../../../../components/icons/HeartIcon";
import { PhotoCardType } from "../../../../../types/PhotoCardType";

import classes from "./PhotoCard.module.sass";

export default function PhotoCard({
  photoCardInfo,
}: {
  photoCardInfo: PhotoCardType;
}) {
  return (
    <div className={classes.card__container}>
      <img
        src={photoCardInfo.image}
        className={classes.card__image}
        alt="teenagers"
      />

      <div className={classes.card__text_container}>
        <div className={classes.likes_section}>
          <HeartIcon />
          <p className={classes.likes_count}>{photoCardInfo.likes}</p>
        </div>
        <p className={classes.card__text}>{photoCardInfo.description}</p>
      </div>
    </div>
  );
}
