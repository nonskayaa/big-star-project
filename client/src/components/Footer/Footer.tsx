import { useState } from "react";
import classes from "./Footer.module.sass";

import { Link } from "react-router-dom";

import logo from "../../assets/images/big-star-logo.png";
import VkIcon from "../icons/VkIcon";
import OkIcon from "../icons/OkIcon";
import FeedbackFormModal from "./components/FeedbackFormModal/FeedbackFormModal";
import { AnimatePresence } from "framer-motion";

export default function Footer() {
  const [isModalActive, setModalActive] = useState(false);

  function handleModalOpen() {
    setModalActive(true);
  }

  function handleModalClose() {
    setModalActive(false);
  }

  return (
    <>
      <footer className={classes.footer__container}>
        <div className={classes.footer__info_container}>
          <div className={classes.footer__navigation}>
            <ul className={classes.footer__navigation_list}>
              <li className={classes.footer__navigation_item}>
                <Link to="/">КАТАЛОГ</Link>
              </li>

              <li className={classes.footer__navigation_item}>
                <Link to="/about">О НАС</Link>
              </li>

              <li className={classes.footer__navigation_item}>
                <Link to="/promotions">АКЦИИ</Link>
              </li>
            </ul>
          </div>

          <div className={classes.footer__contacts}>
            <p className={classes.footer__contacts_label}>КОНТАКТЫ</p>
            <ul className={classes.footer__contacts_list}>
              <li className={classes.footer__contacts_item}>
                info@zlakinazavtrak.ru
              </li>
              <li className={classes.footer__contacts_item}>8 800 234 72 14</li>
              <li className={classes.footer__contacts_item}>
                <button
                  className={classes.feedback_btn}
                  onClick={handleModalOpen}
                  type="button"
                >
                  Обратная связь
                </button>
              </li>
            </ul>
          </div>

          <div className={classes.footer__social_media}>
            <p className={classes.footer__social_media_label}>
              МЫ В СОЦИАЛЬНЫХ СЕТЯХ
            </p>
            <ul className={classes.footer__social_media_list}>
              <li className={classes.footer__social_media_item}>
                <a
                  href="https://vk.com/mymatti"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <VkIcon />
                </a>
              </li>
              <li className={classes.footer__social_media_item}>
                <a
                  href="https://ok.ru/group/61166056636549/hobby"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <OkIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <img src={logo} className={classes.footer__logo} alt="" />
      </footer>
      <AnimatePresence>
        {isModalActive && (
          <FeedbackFormModal handleModalClose={handleModalClose} />
        )}
      </AnimatePresence>
    </>
  );
}
