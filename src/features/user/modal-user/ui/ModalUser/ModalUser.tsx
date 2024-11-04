import React, { useEffect, useRef } from "react";
import styles from "./ModalUser.module.css";
import { IModalProps, IModalUniversalProps } from "../../model/types";



export const ModalUser = ({
  children,
  className,
  isOpen = true,
  onClose,
}: IModalProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (event: Event) => {
      if (!ref?.current?.contains(event?.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [onClose]);

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
