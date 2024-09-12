"use client";

import { useState } from "react";

import { AnswerType, QuestionType } from "@/types/QuestionType";

import { ButtonBorder } from "../Icons";
import s from "./Button.module.css";

interface Props {
  onClick: (answer: AnswerType) => void;
  children: React.ReactNode;
  className?: string;
  questions: QuestionType[];
  answer: AnswerType;
}

const Button = ({ onClick, children, className, answer }: Props) => {
  const [styles, setStyles] = useState("");

  // setting styles based correct answer
  const handleSelect = () => {
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
    >
      <ButtonBorder className={s.border} />
      <span className={s.buttonContent}>
        {children} {answer.title}
      </span>
    </button>
  );
};

export default Button;
