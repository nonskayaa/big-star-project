import classes from "./DiscountIcon.module.sass";

export default function DiscountIcon({
  sizeOfDiscount,
}: {
  sizeOfDiscount: number;
}) {
  return (
    <div className={classes.discount_icon__container}>
      <p
        className={classes.discount_icon__size_of_discount}
      >{`-${sizeOfDiscount}%`}</p>
    </div>
  );
}
