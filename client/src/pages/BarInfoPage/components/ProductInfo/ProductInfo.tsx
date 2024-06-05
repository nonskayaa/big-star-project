import graffiti_background from "../../../../assets/images/graffiti/graffiti_brush.png";
import { BarInfo } from "../../../../types/BarInfo";
import NutritionFactsList from "./NutritionFactsList/NutritionFactsList";

import classes from "./ProductInfo.module.sass";

export default function ProductInfo({ info }: { info: BarInfo }) {
  return (
    <div className={classes.product__info_container}>
      
      <div className={classes.product__title_wrapper}>
      <img
        src={graffiti_background}
        alt="graffiti"
        className={classes.graffiti_background}
      />
        <h1 className={classes.product__title}>{info?.name}</h1>
      </div>

      <div className={classes.product__ingredients_container}>
        <p className={classes.product__ingredients_subtitle}>Состав</p>
        <p className={classes.product__ingredients_text}>{info?.ingredients}</p>
      </div>
      <NutritionFactsList nutritionFacts={info.nutritionFacts} />
    </div>
  );
}
