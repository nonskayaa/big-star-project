import classes from "./SuccessfullSubmitted.module.sass";
import CheckRingIcon from "../../../../icons/CheckRingIcon";

export default function SuccessfullSubmitted() {
  return (
    <div className={classes.successfull_submitted__container}>
      <CheckRingIcon />
      <h1 className={classes.successfull_submitted__title}>
        Заяка успешно отправлена!
      </h1>
      <p className={classes.successfull_submitted__subtitle}>
        мы свяжемся с вами в ближайшее время
      </p>
      <a href="/" className={classes.successfull_submitted__btn}>
        Ок, понял
      </a>
    </div>
  );
}
