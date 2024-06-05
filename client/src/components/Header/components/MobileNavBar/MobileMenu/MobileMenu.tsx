import classes from "./MobileMenu.module.sass";
import { motion } from "framer-motion";

import { navLinks } from "../../../../../constants/navLinks";
import MobileCustomNavLink from "../MobileCustomNavLink/MobileCustomNavLink";

const mobileLinkVars = {
  closed: {
    x: "100vw",
    transition: {
      ease: "easeIn",
      duration: 0.6,
    },
  },
  open: {
    x: 0,
    transition: {
      type: "spring",
      damping: 30,
      stiffness: 100,

    },
  },
};

export default function MobileMenu({
  toggleMobileMenu,
}: {
  toggleMobileMenu: () => void;
}) {
  return (
    <motion.div
      className={classes.mobile_menu__container}
      variants={mobileLinkVars}
      initial={"closed"}
      animate={"open"}
      exit={"closed"}
    >
      {navLinks.map((link) => (
        <MobileCustomNavLink
          navLink={link}
          toggleMobileMenu={toggleMobileMenu}
        />
      ))}
    </motion.div>
  );
}
