import { ReactNode } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

type BackdropProps = {
  onClose: () => void;
};
const Backdrop = ({ onClose }: BackdropProps) => {
  return <div className={classes.backdrop} onClick={onClose} />;
};

type ModalOverlayProps = {
  children: ReactNode;
};
const ModalOverlay = ({ children }: ModalOverlayProps) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays")!;

type ModalProps = {
  onClose: () => void;
  children: ReactNode;
};
const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
