import { motion } from "framer-motion";

import { NavLink } from "react-router-dom";

import { CustomNavLinkType } from "../../../../types/CustomNavLinkType";

import classes from "./CustomNavLink.module.sass";
import classNames from "classnames";


export default function CustomNavLink({
  navLink,
}: {
  navLink: CustomNavLinkType;
}) {
  const setActive = ({ isActive }: { isActive: boolean }) => {
    return isActive
      ? classNames(classes.custom_nav_link__container, classes.active)
      : classes.custom_nav_link__container;
  };

  const navLinkVars = {
    closed: {
      scale: 0,
    },
    open: {
      scale: 1,

      transition: {
        delay: navLink.id * 0.1,
        type: "spring",
        stiffness: 400,
        damping: 18,
      },
    },
    hover: {
      scale: 1.1,

      transition: {
        ease: "backOut",
        stiffness: 400,
        damping: 10,
        duration: 0.5,
      },
    },
    tap: {
      scale: 0.8,
    },
    exit: {
      scale: 0,
      transition: {
        delay: 0.5 - navLink.id * 0.1,
        ease: "backIn",
        duration: 0.2,
      },
    },
  };
  return (
    <NavLink to={navLink.link} className={setActive}>
      <motion.p
        variants={navLinkVars}
        whileHover={"hover"}
        whileTap={"tap"}
        initial={"closed"}
        animate={"open"}
        exit={"exit"}
        className={classes.custom_nav_link__title}
      >
        {navLink.title}
      </motion.p>
    </NavLink>
  );
}
