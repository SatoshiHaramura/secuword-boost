import { render, RenderResult } from '@testing-library/react';

import QuestionProgress from '@/components/pages/lessons/QuestionProgress';

describe('QuestionProgress component', () => {
  const numberOfQuestions = 2;
  const currentQuestionNumber = 1;

  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(
      <QuestionProgress
        numberOfQuestions={numberOfQuestions}
        currentQuestionNumber={currentQuestionNumber}
      />
    );
  });
  afterEach(() => {
    renderResult.unmount();
  });

  test('display the current question number', () => {
    const currentQuestionNumber = renderResult.getByTestId(
      'current-question-number'
    );
    expect(currentQuestionNumber).toHaveTextContent('1');
  });

  test('display the number of questions', () => {
    const numberOfQuestions = renderResult.getByTestId('number-of-questions');
    expect(numberOfQuestions).toHaveTextContent('2');
  });
});
