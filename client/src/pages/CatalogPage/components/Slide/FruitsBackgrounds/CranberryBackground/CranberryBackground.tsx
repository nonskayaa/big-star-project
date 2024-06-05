import classes from "./CranberryBackground.module.sass";

import blurred_leaf from "../../../../../../assets/images/fruits/cranberry_bar_fruits/blurred_leaf.png";
import blurred_cranberry from "../../../../../../assets/images/fruits/cranberry_bar_fruits/blurred_cranberry.png";
import cranberry from "../../../../../../assets/images/fruits/cranberry_bar_fruits/cranberry.png";
import cranberry_with_leaves from "../../../../../../assets/images/fruits/cranberry_bar_fruits/cranberry_with_leaves.png";

import { motion } from "framer-motion";
import setAnimation from "../../../../../../helpers/setAnimation";

export default function CranberryBackground({
  isActive,
}: {
  isActive: boolean;
}) {
  const blurredCranberryVars = {
    open: {
      rotate: 0,
      x: 0,
      transition: {
        type: "spring",
        duration: 2.5,
        delay: 0.2,
      },
    },
    closed: {
      x: 500,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 30,
        duration: 2,
      },
    },
  };

  const blurredLeafVars = {
    open: {
      rotate: 0,
      x: 0,
      transition: {
        type: "spring",
        duration: 1.5,
        delay: 0.2,
      },
    },
    closed: {
      x: 500,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 30,
        duration: 2,
      },
    },
  };

  const cranberryVars = {
    open: {
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        delay: 0.1,
        duration: 2,
        stiffness: 50,
      },
    },
    closed: {
      rotate: -40,
      x: 600,
      transition: {
        type: "spring",
        delay: 0.1,
        duration: 2,
      },
    },
  };

  const cranberryWithLeavesVars = {
    open: {
      rotate: 0,
      x: 0,
      transition: {
        type: "spring",
        duration: 1.5,
        delay: 0.3,
      },
    },
    closed: {
      x: 500,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 30,
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
        src={blurred_cranberry}
        alt="cranberry"
        className={classes.fruits_background__blurred_cranberry_left}
        variants={blurredCranberryVars}
      />
      <motion.img
        src={blurred_cranberry}
        alt="cranberry"
        className={classes.fruits_background__blurred_cranberry_right}
        variants={blurredCranberryVars}
      />
      <motion.img
        src={blurred_leaf}
        alt="cranberry"
        className={classes.fruits_background__blurred_leaf_left}
        variants={blurredLeafVars}
      />
      <motion.img
        src={cranberry}
        alt="cranberry"
        className={classes.fruits_background__cranberry}
        variants={cranberryVars}
      />
      <motion.img
        src={cranberry_with_leaves}
        alt="cranberry"
        className={classes.fruits_background__cranberry_with_leaves}
        variants={cranberryWithLeavesVars}
      />
      <motion.img
        src={blurred_leaf}
        alt="cranberry"
        className={classes.fruits_background__blurred_leaf_right}
        variants={blurredLeafVars}
      />
      <motion.img
        src={blurred_cranberry}
        alt="cranberry"
        className={classes.fruits_background__blurred_cranberry_bottom}
        variants={blurredCranberryVars}
      />
    </motion.div>
  );
}
