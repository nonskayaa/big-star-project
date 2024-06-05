import classes from "./SuccessfullSubmitted.module.sass";

import SmileyIcon from "../../../../components/icons/SmileyIcon";

export default function SuccessfullSubmitted() {
  return (
    <>
      <SmileyIcon />
      <h4 className={classes.newsletter__title}>
        Вы успешно подписались на рассылку!
      </h4>
      <p className={classes.newsletter__subtitle}>
        теперь вы самые первые будете узнавать о наших акциях
      </p>
    </>
  );
}
