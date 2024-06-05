import classes from "./NavBar.module.sass";

import CustomNavLink from "../CustomNavLink/CustomNavLink";

import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { navLinks } from "../../../../constants/navLinks";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const menuVars = {
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.8,
    },
  };

  function toggleMenu() {
    setOpen((prev) => !prev);
  }

  return (
    <motion.nav
      className={classes.nav_bar__container}
      onHoverStart={toggleMenu}
      onHoverEnd={toggleMenu}
    >
      <motion.div className={classes.nav_bar__menu_btn}>
        <motion.p
          className={classes.nav_bar__menu_btn_title}
          variants={menuVars}
          whileHover={"hover"}
          whileTap={"tap"}
        >
          Меню
        </motion.p>
      </motion.div>
      <AnimatePresence>
        {open &&
          navLinks.map((link) => (
            <CustomNavLink key={link.id} navLink={link} />
          ))}
      </AnimatePresence>
    </motion.nav>
  );
}
