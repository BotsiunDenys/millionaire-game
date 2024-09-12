import { SetStateAction } from "react";

import Image from "next/image";

import InfoMoneyCard from "@/components/InfoMoneyCard/InfoMoneyCard";

import { QuestionType } from "@/types/QuestionType";

import s from "./SideBarInfoSection.module.css";

interface Props {
  isToggled: boolean;
  setIsToggled: React.Dispatch<SetStateAction<boolean>>;
  questions: QuestionType[];
  currentQuestion: QuestionType;
}

const SideBarInfoSection = ({
  isToggled,
  setIsToggled,
  questions,
  currentQuestion,
}: Props) => {
  // indentifying variant of money card based on current question
  const getCardVariant = (question: QuestionType) => {
    const searchedIndex = questions.findIndex(
      (data) => data.prize === question.prize,
    );
    const currentQuestionIndex = questions.findIndex(
      (data) => data.prize === currentQuestion.prize,
    );

    if (currentQuestionIndex === searchedIndex) {
      return "active";
    } else if (currentQuestionIndex > searchedIndex) {
      return "inactive";
    }
    return "default";
  };

  return (
    <aside className={`${s.wrapper} ${isToggled ? s.visibleWrapper : ""}`}>
      <Image
        onClick={() => setIsToggled(false)}
        alt="close icon"
        src="/closeIcon.svg"
        width={14}
        height={14}
        className={s.closeIcon}
      />
      <div className={s.infoWrapper}>
        {questions
          .slice() // creating copy of an array to avoid questions reversing
          .reverse()
          .map((question) => (
            <InfoMoneyCard
              variant={getCardVariant(question)}
              key={question.prize}
            >
              ${question.prize.toLocaleString()}
            </InfoMoneyCard>
          ))}
      </div>
    </aside>
  );
};

export default SideBarInfoSection;
