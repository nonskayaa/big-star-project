import formatDate from "../../../../helpers/formatDate";
import classes from "./DateIcon.module.sass";

export default function DateIcon({
  dateFrom,
  dateTo,
}: {
  dateFrom: Date;
  dateTo: Date;
}) {
  return (
    <div className={classes.date_icon__container}>
      <p>{`${formatDate(dateFrom)} - ${formatDate(dateTo)}`}</p>
    </div>
  );
}
