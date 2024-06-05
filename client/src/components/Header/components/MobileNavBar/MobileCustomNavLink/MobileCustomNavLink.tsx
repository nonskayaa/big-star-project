import classes from "./MobileCustomNavLink.module.sass";
import classNames from "classnames";

import { CustomNavLinkType } from "../../../../../types/CustomNavLinkType";
import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";

export default function MobileCustomNavLink({
  navLink,
  toggleMobileMenu,
}: {
  navLink: CustomNavLinkType;
  toggleMobileMenu: () => void;
}) {
  const setActive = ({ isActive }: { isActive: boolean }) => {
    return isActive
      ? classNames(classes.mobile_custom_nav_link__container, classes.active)
      : classes.mobile_custom_nav_link__container;
  };

  const mobileLinkVars = {
    whileTap: {
      scale: 0.8,
    },
  };

  return (
    <NavLink to={navLink.link} className={setActive} onClick={toggleMobileMenu}>
      <motion.p
        className={classes.mobile_custom_nav_link__title}
        variants={mobileLinkVars}
        whileTap={"whileTap"}
      >
        {navLink.title}
      </motion.p>
    </NavLink>
  );
}
