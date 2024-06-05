import classes from "./Header.module.sass";

import logo from "../../assets/images/big-star-logo.png";

import NavBar from "./components/NavBar/NavBar";

import { useMediaQuery } from "react-responsive";
import MobileNavBar from "./components/MobileNavBar/MobileNavBar";

export default function Header() {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <header className={classes.header_container}>
      <a href="/" className={classes.header__logo}>
        <img
          src={logo}
          className={classes.header__logo_img}
          alt="big star logo"
        />
      </a>
      {isMobile ? <MobileNavBar /> : <NavBar />}
    </header>
  );
}
