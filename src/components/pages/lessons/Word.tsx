import { FC } from 'react';
import { shortenPartOfSpeech } from '@/utils';
import { Roboto_Flex } from '@next/font/google';

import { PartOfSpeech } from '@/types';

type Props = {
  partOfSpeech: PartOfSpeech;
  word: string;
  meaning: string;
};

const roboto = Roboto_Flex({
  weight: ['400'],
  preload: false,
});

const Word: FC<Props> = ({ partOfSpeech, word, meaning }) => {
  return (
    <>
      <div className="flex flex-row gap-1" data-testid="word">
        <div className="pt-2.5">
          <div className="rounded border border-slate-400 px-1">
            {shortenPartOfSpeech(partOfSpeech)}
          </div>
        </div>
        <div className="pl-1">
          <div className="flex flex-col">
            <div className={`${roboto.className} text-4xl`}>{word}</div>
            <div>{meaning}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Word;
