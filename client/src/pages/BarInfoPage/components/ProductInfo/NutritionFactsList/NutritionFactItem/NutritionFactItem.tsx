import classes from "./NutritionFactItem.module.sass";

type NutritionFactItemProps = {
  title: string;
  count: number;
};

export default function NutritionFactItem({
  nutritionFact,
}: {
  nutritionFact: NutritionFactItemProps;
}) {
  return (
    <div className={classes.product__nutrition_facts_item}>
      <p className={classes.product__nutrition_facts_count}>
        {nutritionFact.count}
      </p>
      <p className={classes.product__nutrition_facts_name}>
        {nutritionFact.title}
      </p>
    </div>
  );
}
