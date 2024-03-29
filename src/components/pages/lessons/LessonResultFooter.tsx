import { FC } from 'react';
import SameLessonButton from '@/components/pages/lessons/SameLessonButton';
import NextLessonButton from '@/components/pages/lessons/NextLessonButton';
import MenuButton from '@/components/pages/lessons/MenuButton';

type Props = {
  handleClickSameLessonButton: () => void;
  handleClickNextLessonButton: () => void;
};
const LessonResultFooter: FC<Props> = ({
  handleClickSameLessonButton,
  handleClickNextLessonButton,
}) => {
  return (
    <footer className="sticky bottom-0 left-0 right-0 border-t border-gray-200 bg-slate-50">
      <div className="flex flex-row justify-center gap-4">
        <SameLessonButton
          handleClickSameLessonButton={handleClickSameLessonButton}
        />
        <NextLessonButton
          handleClickNextLessonButton={handleClickNextLessonButton}
        />
      </div>
      <div className="flex flex-row justify-center">
        <MenuButton />
      </div>
    </footer>
  );
};

export default LessonResultFooter;
