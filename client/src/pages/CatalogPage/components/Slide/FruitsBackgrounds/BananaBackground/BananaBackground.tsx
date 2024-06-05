import banana_blurred_left from "../../../../../../assets/images/fruits/banana_bar_fruits/banana_blurred_left.png";
import banana_blurred_right from "../../../../../../assets/images/fruits/banana_bar_fruits/banana_blurred_right.png";
import banana from "../../../../../../assets/images/fruits/banana_bar_fruits/banana.png";
import bananas from "../../../../../../assets/images/fruits/banana_bar_fruits/bananas.png";
import leaf_blurred from "../../../../../../assets/images/fruits/banana_bar_fruits/leaf_blurred.png";
import leaf from "../../../../../../assets/images/fruits/banana_bar_fruits/leaf.png";
import leaves from "../../../../../../assets/images/fruits/banana_bar_fruits/leaves.png";

import classes from "./BananaBackground.module.sass";

import { motion } from "framer-motion";

import setAnimation from "../../../../../../helpers/setAnimation";

export default function BananaBackground({ isActive }: { isActive: boolean }): JSX.Element {
  const blurredBananaVars_top = {
    open: {
      rotate: 0,
      x: 0,
      transition: {
        type: "spring",
        duration: 2.3,
      },
    },
    closed: {
      x: 400,
      rotate: -40,
      transition: {
        type: "spring",
        duration: 2.3,
      },
    },
  };

  const blurredBananaVars_bottom = {
    open: {
      rotate: 0,
      x: 0,
      transition: {
        type: "spring",
        duration: 2,
      },
    },
    closed: {
      x: 600,
      rotate: -40,
      transition: {
        type: "spring",
        duration: 2,
      },
    },
  };

  const bananaVars = {
    open: {
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        delay: 0.1,
      },
    },
    closed: {
      x: 200,
      rotate: 20,
      transition: {
        type: "spring",
        duration: 2,
      },
    },
  };

  const leavesVars = {
    open: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        delay: 0.1,
      },
    },
    closed: {
      scale: 0.3,
      rotate: -60,
      opacity: 0,
      transition: {
        type: "spring",
        delay: 0.1,
        duration: 0.5,
      },
    },
  };

  const bananasVars = {
    open: {
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
      },
    },
    closed: {
      x: -100,
      rotate: -20,
      transition: {
        type: "spring",
      },
    },
  };

  const leafVars = {
    open: {
      x: 0,
      rotate: 0,
      opacity: 1,
      originX: 0.8,
      originY: 0.7,
      transition: {
        type: "spring",
      },
    },
    closed: {
      originX: 0.8,
      originY: 0.7,
      opacity: 0,
      x: 100,
      rotate: -90,
    },
  };
  
  return (
    <motion.div
      className={classes.fruits_background__container}
      animate={setAnimation(isActive)}
    >
      <motion.img
        src={banana_blurred_right}
        alt="banana"
        className={classes.fruits_background__blurred_banana_left}
        variants={blurredBananaVars_top}
      />

      <motion.img
        src={banana_blurred_left}
        alt=""
        className={classes.fruits_background__blurred_banana_right}
        variants={blurredBananaVars_top}
      />
      <img
        src={leaf_blurred}
        alt="banana"
        className={classes.fruits_background__blurred_leaf}
      />
      <motion.img
        src={leaves}
        alt="banana"
        className={classes.fruits_background__leaves}
        variants={leavesVars}
      />
      <motion.img
        src={bananas}
        alt="banana"
        className={classes.fruits_background__bananas}
        variants={bananasVars}
      />
      <motion.img
        src={leaf}
        alt="banana"
        className={classes.fruits_background__leaf}
        variants={leafVars}
      />
      <motion.img
        src={banana}
        alt="banana"
        className={classes.fruits_background__banana}
        variants={bananaVars}
      />

      <motion.img
        src={banana_blurred_right}
        alt="banana"
        className={classes.fruits_background__blurred_banana_bottom_right}
        variants={blurredBananaVars_bottom}
      />

      <motion.img
        src={banana_blurred_left}
        alt="banana"
        className={classes.fruits_background__blurred_banana_bottom_left}
        variants={blurredBananaVars_bottom}
      />
    </motion.div>
  );
}
