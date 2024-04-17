import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, open, className }) => {
  const stylings = className ? `modal ${className}` : "modal";
  const dialogRef = useRef();
  useEffect(() => {
    const modal = dialogRef.current;
    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog ref={dialogRef} className={stylings}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
