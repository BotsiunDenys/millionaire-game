"use client";

import { useState } from "react";

import { ButtonBorder } from "../Icons";
import s from "./Button.module.css";

interface Props {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button = ({ onClick, children, className }: Props) => {
  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    setSelected(true);
    setTimeout(() => {
      setSelected(false);
      onClick();
    }, 2500);
  };

  return (
    <button
      type="button"
      className={`${s.button} ${className} ${selected && s.selectedButton}`}
      onClick={handleSelect}
    >
      <ButtonBorder className={s.border} />
      <span className={s.buttonContent}>{children}</span>
    </button>
  );
};

export default Button;
