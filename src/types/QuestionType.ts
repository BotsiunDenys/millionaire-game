export type QuestionType = {
  question: string;
  answers: AnswerType[];
  prize: number;
};

export type AnswerType = {
  title: string;
  correct: boolean;
};
