import classes from "./SaltCaramelBackground.module.sass";
import salt_caramel from "../../../../../../assets/images/fruits/saltcaramel_bar_fruits/salt_caramel.png";

import { motion } from "framer-motion";
import setAnimation from "../../../../../../helpers/setAnimation";

export default function SaltCaramelBackground({
  isActive,
}: {
  isActive: boolean;
}) {
  const saltCaramelVars = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        delay: 0.2,
        stiffness: 60,
      },
    },
    closed: {
      x: 400,
      transition: {
        type: "linear",
        delay: 1,
      },
    },
  };
  return (
    <motion.div
      className={classes.fruits_background__container}
      animate={setAnimation(isActive)}
    >
      <motion.img
        src={salt_caramel}
        alt="salt caramel"
        className={classes.fruits_background__salt_caramel}
        variants={saltCaramelVars}
      />
    </motion.div>
  );
}
