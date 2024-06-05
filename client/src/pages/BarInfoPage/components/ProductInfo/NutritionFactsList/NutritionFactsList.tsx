import classes from "./NutritionFactsList.module.sass";

import { NutritionFacts } from "../../../../../types/NutritionFacts";
import NutritionFactItem from "./NutritionFactItem/NutritionFactItem";

export default function NutritionFactsList({
  nutritionFacts,
}: {
  nutritionFacts: NutritionFacts;
}) {
  const nutritionFactsList = [
    {
      title: "Белки",
      count: nutritionFacts.proteins,
    },
    {
      title: "Жиры",
      count: nutritionFacts.fats,
    },
    {
      title: "Углеводы",
      count: nutritionFacts.carbohydrates,
    },
    {
      title: "Ккал",
      count: nutritionFacts.kcal,
    },
  ];
  return (
    <div className={classes.product__nutrition_facts_container}>

      <p className={classes.product__nutrition_facts_subtitle}>
        Пищевая ценность на 100 г
      </p>

      <div className={classes.product__nutrition_facts_wrapper}>
        {nutritionFactsList.map((nutritionFact) => {
          return <NutritionFactItem nutritionFact={nutritionFact} />;
        })}
      </div>
      
    </div>
  );
}
