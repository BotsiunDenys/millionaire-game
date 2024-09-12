"use client";

import { SetStateAction, useState } from "react";

import { AnswerType, QuestionType } from "@/types/QuestionType";

import { ButtonBorder } from "../Icons";
import s from "./Button.module.css";

interface Props {
  onClick: (answer: AnswerType) => void;
  children: React.ReactNode;
  className?: string;
  questions: QuestionType[];
  answer: AnswerType;
  disabled: boolean;
  setDisabled: React.Dispatch<SetStateAction<boolean>>;
}

const Button = ({
  onClick,
  children,
  className,
  answer,
  disabled,
  setDisabled,
}: Props) => {
  const [styles, setStyles] = useState("");

  // setting styles based correct answer
  const handleSelect = () => {
    setDisabled(true);
    setStyles(s.selectedButton);
    setTimeout(() => {
      if (answer.correct) {
        setStyles(s.correctButton);
      } else {
        setStyles(s.wrongButton);
      }
      setTimeout(() => onClick(answer), 1000);
    }, 2500);
  };

  return (
    <button
      type="button"
      className={`${s.button} ${className} ${styles}`}
      onClick={handleSelect}
      disabled={disabled}
    >
      <ButtonBorder className={s.border} />
      <span className={s.buttonContent}>
        {children} {answer.title}
      </span>
    </button>
  );
};

export default Button;
