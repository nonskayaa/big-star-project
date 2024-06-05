import classes from "./AboutUsBanner.module.sass";

import bars_composition from "../../../../assets/images/bars_composition.png";
import underline from "../../../../assets/images/graffiti/underline.png";

export default function AboutUsBanner() {
  return (
    <div className={classes.banner__container}>
      <div className={classes.banner__title_wrapper}>
        <h1 className={classes.banner__title}>
          {"Мечтай\nпо-крупному,\nзаряжай\nпо-полной"}
        </h1>
        <img src={underline} alt="underline" />
      </div>
      <div className={classes.banner__bars_composition__container}>
        <img
          src={bars_composition}
          className={classes.banner__bars_composition}
          alt="bars"
        />
      </div>
    </div>
  );
}
