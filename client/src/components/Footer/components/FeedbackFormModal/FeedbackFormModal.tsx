import classes from "./FeedbackFormModal.module.sass";

import Modal from "../../../Modal/Modal";
import FeedbackForm from "../FeedbackForm/FeedbackForm";

import { motion } from "framer-motion";


export default function FeedbackFormModal({
  handleModalClose,
}: {
  handleModalClose: () => void;
}) {

  const formVars = {
    closed: {
      x: "100vw",
      transition: {
        ease: "easeIn",
        duration: 0.7,
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

  return (
    <Modal onClose={handleModalClose}>
      <motion.div
        className={classes.feedback_form_modal__container}
        variants={formVars}
        initial={"closed"}
        animate={"open"}
        exit={"closed"}
      >
        <button
          type="button"
          className={classes.feedback_form_modal__close_btn}
          onClick={handleModalClose}
        >
          X
        </button>

        <FeedbackForm />
      </motion.div>
    </Modal>
  );
}
