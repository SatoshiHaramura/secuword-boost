import { FC } from 'react';

type Props = {
  judgedAnswers: boolean[];
  numberOfQuestions: number;
};

const Score: FC<Props> = ({ judgedAnswers, numberOfQuestions }) => {
  const numberOfCorrectAnswers = judgedAnswers.filter(
    (judgedAnswer) => judgedAnswer
  ).length;

  return (
    <div className="text-center" data-testid="score">
      <span className="text-3xl" data-testid="number-of-correct-answers">
        {numberOfCorrectAnswers}
      </span>
      <span> / </span>
      <span data-testid="number-of-questions">{numberOfQuestions}</span>
    </div>
  );
};

export default Score;
