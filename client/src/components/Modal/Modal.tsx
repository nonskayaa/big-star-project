import { ReactNode, useRef } from "react";
import Portal from "../Portal/Portal";

import classes from "./Modal.module.sass";
import useModalClose from "../../hooks/useModalClode";

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

export default function Modal({ children, onClose }: ModalProps) {
  const ref = useRef(null);

  useModalClose(ref, () => onClose());
  return (
    <Portal>
      <div className={classes.overlay} ref={ref}>
        <div className={classes.modal__content}>{children}</div>
      </div>
    </Portal>
  );
}
