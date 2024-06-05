import classes from "./AboutBarBtn.module.sass";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";

export default function AboutBarBtn({ link }: { link: string }) {
  const linkVars = {
    whileHover: {
      scale: 1.1,
    },
    whileTap: {
      scale: 0.9,
    },
  };
  return (
    <motion.div
      variants={linkVars}
      whileHover={"whileHover"}
      whileTap={"whileTap"}
    >
      <Link to={link} className={classes.about_bar_link}>
        хочу купить
      </Link>
    </motion.div>
  );
}
