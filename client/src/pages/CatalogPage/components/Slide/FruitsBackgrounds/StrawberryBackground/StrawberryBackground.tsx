import classes from "./StrawberryBackground.module.sass";

import blurred_strawberry_1 from "../../../../../../assets/images/fruits/strawberry_bar_fruits/blurred_strawberry_1.png";
import blurred_strawberry_2 from "../../../../../../assets/images/fruits/strawberry_bar_fruits/blurred_strawberry_2.png";
import blurred_strawberry_3 from "../../../../../../assets/images/fruits/strawberry_bar_fruits/blurred_strawberry_3.png";
import blurred_strawberry_4 from "../../../../../../assets/images/fruits/strawberry_bar_fruits/blurred_strawberry_4.png";

import strawberry from "../../../../../../assets/images/fruits/strawberry_bar_fruits/strawberry.png";
import strawberry_with_leaf from "../../../../../../assets/images/fruits/strawberry_bar_fruits/strawberry_with_leaf.png";

import { motion } from "framer-motion";
import setAnimation from "../../../../../../helpers/setAnimation";

export default function StrawberryBackground({
  isActive,
}: {
  isActive: boolean;
}) {
  const blurredStrawberryVars = {
    open: {
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        duration: 2.5,
        delay: 0.15,
      },
    },
    closed: {
      x: 500,
      rotate: 90,
      transition: {
        type: "spring",
        stiffness: 30,
        duration: 2,
      },
    },
  };

  const strawberryVars = {
    open: {
      scale: 1,
      transition: {
        type: "spring",
        delay: 0.1,
        duration: 2,
        stiffness: 140,
      },
    },
    closed: {
      scale: 0,
      transition: {
        type: "spring",
        delay: 0.4,
        duration: 2.5,
      },
    },
  };

  const strawberryWithLeavesVars = {
    open: {
      scale: 1,
      transition: {
        type: "spring",
        delay: 0.3,
        stiffness: 120,
      },
    },
    closed: {
      scale: 0,
      transition: {
        type: "spring",
        delay: 0.1,
        duration: 2,
      },
    },
  };
  return (
    <motion.div
      className={classes.fruits_background__container}
      animate={setAnimation(isActive)}
    >
      <motion.img
        src={blurred_strawberry_1}
        alt="strawberry"
        className={classes.fruits_background__blurred_strawberry_top_left}
        variants={blurredStrawberryVars}
      />
      <motion.img
        src={strawberry}
        alt="strawberry"
        className={classes.fruits_background__strawberry}
        variants={strawberryVars}
      />

      <motion.img
        src={blurred_strawberry_2}
        alt="strawberry"
        className={classes.fruits_background__blurred_strawberry_top_right}
        variants={blurredStrawberryVars}
      />

      <motion.img
        src={blurred_strawberry_3}
        alt="strawberry"
        className={classes.fruits_background__blurred_strawberry_bottom_left}
        variants={blurredStrawberryVars}
      />

      <motion.img
        src={blurred_strawberry_4}
        alt="strawberry"
        className={classes.fruits_background__blurred_strawberry_bottom_right}
        variants={blurredStrawberryVars}
      />
      <motion.img
        src={strawberry_with_leaf}
        alt="strawberry"
        className={classes.fruits_background__strawberry_with_leaf}
        variants={strawberryWithLeavesVars}
      />
    </motion.div>
  );
}
