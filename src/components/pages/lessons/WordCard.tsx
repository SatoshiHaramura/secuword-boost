import { FC } from 'react';
import { Question } from '@/types';
import CorrectOrIncorrectIcon from '@/components/pages/lessons/CorrectOrIncorrectIcon';
import Word from '@/components/pages/lessons/Word';
import RelatedWord from '@/components/pages/lessons/RelatedWord';
import UseExample from '@/components/pages/lessons/UseExample';

type Props = {
  question: Question;
  judgedAnswer: boolean;
};

const WordCard: FC<Props> = ({ question, judgedAnswer }) => {
  return (
    <div className="p-2">
      <div className="flex flex-col items-center justify-center">
        <div className="w-80 divide-y divide-dashed divide-gray-400 rounded-xl border-2 border-slate-300 bg-slate-100 bg-opacity-40 p-1.5 shadow-md">
          <div className="flex flex-row gap-2 py-0.5">
            <div className="w-2/12">
              <CorrectOrIncorrectIcon judgedAnswer={judgedAnswer} />
            </div>
            <div className="w-2/10">
              <Word
                partOfSpeech={question.partOfSpeech}
                word={question.question}
                meaning={question.answer}
              />
            </div>
          </div>
          {question.relatedWords.length > 0 && (
            <RelatedWord relatedWords={question.relatedWords} />
          )}
          <UseExample useExamples={question.useExamples} />
        </div>
      </div>
    </div>
  );
};

export default WordCard;
