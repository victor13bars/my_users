import React from "react";
import { ButtonType } from "../../types/ButtonType";
import styles from "./Button.module.css";

export const Button = ({
  children,
  onClick,
  btnColor = "teal",
  labelColor,
  disabled,
  type,
  style,
  ...props
}: ButtonType) => {
  const commonStyles = {
    backgroundColor: btnColor,
    color: labelColor || "white",
  };
  const outlineStyles = {
    border: `1px solid ${btnColor}`,
    color: btnColor,
    backgroundColor: "white",
  };

  const roundedStyle = {
    backgroundColor: btnColor,
    color: labelColor || "white",
    borderRadius: "25px",
  };
  const disabledStyle = {
    cursor: "default",
    backgroundColor: btnColor,
    color: labelColor || "white",
    opacity: 0.4,
  };
  const blockStyles = {
    width: "95%",
    margin: "0 auto",
  };

  let btnStyle;
  switch (type) {
    case "rounded":
      btnStyle = roundedStyle;
      break;
    case "block":
      btnStyle = blockStyles;
      break;
    case "outline":
      btnStyle = outlineStyles;

      break;
    default:
      btnStyle = {
        backgroundColor: btnColor,
        color: labelColor || "white",
      };
      break;
  }

  return (
    <button
      style={
        disabled
          ? { ...commonStyles, ...btnStyle, ...disabledStyle }
          : { ...commonStyles, ...btnStyle }
      }
      {...props}
      type="button"
      onClick={onClick}
      className={styles.btn}
    >
      {children || "button"}
    </button>
  );
};


