import TwoColumn from '@/components/TwoColumn';
import { Grades } from '@/contexts/globalContext';
import { useGlobalContext } from '@/hooks';
import { normalizeGradeKey } from '@/utils';
import { CheckIcon, XIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { LoremIpsum } from 'lorem-ipsum';
import { VFC } from 'react';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 6,
    min: 6,
  },
  wordsPerSentence: {
    max: 7,
    min: 4,
  },
});

const loremText = lorem.generateParagraphs(1);

const BasicGrade: VFC<{ gradeKey: keyof Grades }> = ({ gradeKey }) => {
  const { grades } = useGlobalContext();

  const GradeIcon = grades[gradeKey].passed ? CheckIcon : XIcon;

  return (
    <div className="flex items-center">
      <div className="rounded-full flex-none w-14 h-14 bg-white mr-5 flex shadow-lg">
        <GradeIcon
          className={clsx(
            'w-2/3 h-2/3 m-auto',
            grades[gradeKey].passed ? 'text-green-600' : 'text-red-600'
          )}
        />
      </div>
      <p className="font-bold text-3xl">{normalizeGradeKey(gradeKey)}</p>
    </div>
  );
};

export const TopArea: VFC = () => {
  const { grades } = useGlobalContext();

  return (
    <TwoColumn
      className="container mx-auto text-dynamic-color"
      firstColumn={
        <>
          <p className="text-9xl font-bold">Aa</p>
          <p
            className="text-xl mt-5"
            title="Test text to demonstrate how it will actually look"
          >
            {loremText}
          </p>
        </>
      }
      secondColumn={
        <div className="grid grid-cols-1 xsm:grid-cols-2 gap-5 md:grid-cols-1 lg:grid-cols-2">
          {Object.keys(grades).map((gradeKey) => (
            <BasicGrade key={gradeKey} gradeKey={gradeKey as keyof Grades} />
          ))}
        </div>
      }
    />
  );
};
