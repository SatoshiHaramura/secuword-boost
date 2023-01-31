import { FC } from 'react';
import { Category, Lesson, Question } from '@/types';
import LessonsPageHeader from '@/components/pages/lessons/LessonsPageHeader';
import SelectionTypeQuestion from '@/components/pages/lessons/SelectionTypeQuestion';
import LessonResult from '@/components/pages/lessons/LessonResult';

type Props = {
  category: Category | undefined;
  lesson: Lesson | undefined;
  judgedAnswers: boolean[];
  questions: Question[];
  currentQuestionNumber: number;
  question: Question;
  handleClickChoiceButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClickSameLessonButton: () => void;
  handleClickNextLessonButton: () => void;
  handleClickMenuButton: () => void;
  playSound: boolean | undefined;
  handleClickPlaySoundButton: () => void;
};

const Presenter: FC<Props> = ({
  category,
  lesson,
  judgedAnswers,
  questions,
  currentQuestionNumber,
  question,
  handleClickChoiceButton,
  handleClickSameLessonButton,
  handleClickNextLessonButton,
  handleClickMenuButton,
  playSound,
  handleClickPlaySoundButton,
}) => {
  return (
    <div className="container mx-auto flex w-screen max-w-sm flex-col justify-center border border-gray-200">
      <div className="divide-y divide-gray-200">
        <LessonsPageHeader
          categoryName={category?.name}
          lessonName={lesson?.name}
        />
        {currentQuestionNumber <= questions.length ? (
          <SelectionTypeQuestion
            questions={questions}
            currentQuestionNumber={currentQuestionNumber}
            question={question}
            handleClickChoiceButton={handleClickChoiceButton}
            judgedAnswer={judgedAnswers[currentQuestionNumber - 1]}
            playSound={playSound}
            handleClickPlaySoundButton={handleClickPlaySoundButton}
          />
        ) : (
          <LessonResult
            questions={questions}
            judgedAnswers={judgedAnswers}
            handleClickSameLessonButton={handleClickSameLessonButton}
            handleClickNextLessonButton={handleClickNextLessonButton}
            handleClickMenuButton={handleClickMenuButton}
          />
        )}
      </div>
    </div>
  );
};

export default Presenter;