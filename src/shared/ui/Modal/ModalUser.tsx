import React, { useEffect, useRef } from "react";
import styles from "./ModalUser.module.css";
import { IModalProps, IModalUniversalProps } from "../../types/ModalType";
import { useOnClickOutside } from "../../../entities/user/utils/hooks/useOnClickOutside";

export const ModalUser = ({
  ref,
  children,
  className,
  isOpen = true,
  onClose,
}: IModalProps) => {
  useOnClickOutside(ref, onClose);
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modalContainer}>
      <div ref={ref} data-id="modal" className={styles.modal + " " + className}>
        {children}
      </div>
    </div>
  );
};

ModalUser.Header = ({ children, className }: IModalUniversalProps) => {
  return <div className={styles.modalHeader + " " + className}>{children}</div>;
};

ModalUser.Body = ({ children, className }: IModalUniversalProps) => {
  return <div className={styles.modalBody + " " + className}>{children}</div>;
};

ModalUser.Footer = ({ children, className }: IModalUniversalProps) => {
  return <div className={styles.modalFooter + " " + className}>{children}</div>;
};
