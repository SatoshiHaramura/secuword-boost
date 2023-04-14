import React, { FC, useEffect, useState } from 'react';
import LessonsPage from './presenter';
import { filterQuestionsByLessonId } from '@/repositories';
import { lessonData, questionData } from '@/data';
import { Question, UserSetting } from '@/types';

type Props = {
  localStorage: {
    userSetting: UserSetting;
    setUserSetting: (userSetting: UserSetting) => void;
  };
};

const Index: FC<Props> = ({ localStorage }) => {
  const { userSetting, setUserSetting } = localStorage;
  const [judgedAnswers, setJudgedAnswers] = useState<boolean[]>([]);
  const filteredQuestions = filterQuestionsByLessonId(
    questionData,
    userSetting.lessonId
  );

  const [currentQuestion, setCurrentQuestion] = useState<Question>(
    filteredQuestions[0]
  );
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(1);

  const handleClickChoiceButton = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    const isCorrect: boolean =
      event.currentTarget.value === currentQuestion.answer;
    setJudgedAnswers([...judgedAnswers, isCorrect]);
  };
  const handleClickSameLessonButton = (): void => {
    setJudgedAnswers([]);
  };
  const handleClickNextLessonButton = (): void => {
    let nextLessonId;
    if (userSetting.lessonId === lessonData.length) {
      nextLessonId = 1;
    } else if (userSetting.lessonId !== undefined) {
      nextLessonId = userSetting.lessonId + 1;
    }

    setUserSetting({
      ...userSetting,
      lessonId: nextLessonId,
    });
    setJudgedAnswers([]);
  };

  const handleClickPlaySoundButton = (): void => {
    setUserSetting({
      ...userSetting,
      playSound: !userSetting.playSound,
    });
  };

  useEffect(() => {
    if (judgedAnswers.length > 0) {
      setTimeout(() => {
        setCurrentQuestion(filteredQuestions[judgedAnswers.length]);
        setCurrentQuestionNumber(judgedAnswers.length + 1);
      }, 1000);
    } else {
      setCurrentQuestion(filteredQuestions[0]);
      setCurrentQuestionNumber(1);
    }
  }, [judgedAnswers, filteredQuestions]);

  return (
    <LessonsPage
      judgedAnswers={judgedAnswers}
      questions={filteredQuestions}
      currentQuestionNumber={currentQuestionNumber}
      question={currentQuestion}
      handleClickChoiceButton={handleClickChoiceButton}
      handleClickSameLessonButton={handleClickSameLessonButton}
      handleClickNextLessonButton={handleClickNextLessonButton}
      playSound={userSetting.playSound}
      handleClickPlaySoundButton={handleClickPlaySoundButton}
      userSetting={userSetting}
    />
  );
};

export default Index;
