import classes from "./MobileNavBar.module.sass";

import {useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { MenuToggle } from "./MenuToggle/MenuToggle";
import MobileMenu from "./MobileMenu/MobileMenu";


export default function MobileNavBar() {
  const [isMobileMenuActive, setMobileMenuActive] = useState(false);

  function toggleMobileMenu() {
    setMobileMenuActive((prev) => !prev);
  }
  return (
    <>
      <motion.nav
        initial={false}
        animate={isMobileMenuActive ? "open" : "closed"}
        className={classes.mobile_nav__container}
      >
        <MenuToggle toggle={toggleMobileMenu} />
      </motion.nav>
      <AnimatePresence>
        {isMobileMenuActive && (
          <MobileMenu toggleMobileMenu={toggleMobileMenu} />
        )}
      </AnimatePresence>
    </>
  );
}
