import { LoremIpsum } from 'lorem-ipsum';
import { VFC } from 'react';
import { HexColorPicker } from 'react-colorful';
import TwoColumn from '../components/TwoColumn';
import { Grades, IGlobalContextValues } from '../contexts/globalContext';
import { useGlobalContext } from '../hooks';
import { CheckIcon, XIcon, HashtagIcon } from '@heroicons/react/solid';
import { normalizeGradeKey } from '@/utils';
import Input from '@/components/Input';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 7,
    min: 4,
  },
});

const loremText = lorem.generateParagraphs(1);

const BasicGrade: VFC<{ gradeKey: keyof Grades }> = ({ gradeKey }) => {
  const { backgroundValue, textValue, grades } = useGlobalContext();

  const GradeIcon = grades[gradeKey].passed ? CheckIcon : XIcon;

  return (
    <div className="flex items-center">
      <div className="rounded-full flex-none w-14 h-14 bg-white mr-5 flex shadow-lg">
        <GradeIcon className="w-2/3 h-2/3 m-auto" />
      </div>
      <p className="font-bold text-3xl">{normalizeGradeKey(gradeKey)}</p>
    </div>
  );
};

const FrontPage: VFC = () => {
  const { textValue, backgroundValue, updateValues, grades } =
    useGlobalContext();

  const setColor =
    (name: keyof Pick<IGlobalContextValues, 'backgroundValue' | 'textValue'>) =>
    (value: string) => {
      updateValues([{ name, value }]);
    };

  return (
    <>
      <TwoColumn
        className="container mx-auto text-dynamic-color"
        firstColumn={
          <>
            <p className="text-9xl font-bold">Aa</p>
            <p className="text-xl mt-5">{loremText}</p>
          </>
        }
        secondColumn={
          <div className="grid grid-cols-1 xsm:grid-cols-2 gap-5 md:grid-cols-1 lg:grid-cols-2">
            {Object.keys(grades).map((gradeKey) => (
              <BasicGrade gradeKey={gradeKey as keyof Grades} />
            ))}
          </div>
        }
      />
      <TwoColumn
        className="container mx-auto mt-10"
        firstColumn={
          <section className="flex text-dynamic-color">
            <HexColorPicker
              color={backgroundValue}
              onChange={setColor('backgroundValue')}
              className="flex-none shadow-lg"
            />
            <div className="px-10 py-2">
              <Input
                name="backgroundValue"
                value={backgroundValue}
                onInput={(e) => {
                  // @ts-ignore
                  setColor('backgroundValue')(e.target.value);
                }}
              />
              <h1 className="text-3xl font-bold">Background color</h1>
            </div>
          </section>
        }
        secondColumn={
          <section className="flex text-dynamic-color">
            <HexColorPicker
              color={textValue}
              onChange={setColor('textValue')}
              className="flex-none shadow-lg"
            />
            <div className="px-10 py-2">
              <Input
                name="textValue"
                value={textValue}
                onInput={(e) => {
                  // @ts-ignore
                  setColor('textValue')(e.target.value);
                }}
              />
              <h1 className="text-3xl font-bold">Text color</h1>
            </div>
          </section>
        }
      />
    </>
  );
};

export default FrontPage;
