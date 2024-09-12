import GameSection from "@/sections/GameSection/GameSection";

import { QuestionType } from "@/types/QuestionType";

import data from "../../assets/data.json";
import s from "./page.module.css";

const GamePage = () => {
  // setting type to questions got from assets
  const questions: QuestionType[] = data.questions;

  return (
    <div className={s.wrapper}>
      {/* sort data to have always strict order, if there is no order in data */}
      <GameSection questions={questions.sort((a, b) => a.prize - b.prize)} />
    </div>
  );
};

export default GamePage;
