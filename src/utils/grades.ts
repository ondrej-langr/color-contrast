import { Grades } from '@/contexts/globalContext';

const gradeVocabulary: Record<keyof Grades, string> = {
  aaLarge: 'AA Large',
  aaNormal: 'AA Normal',
  aaaLarge: 'AAA Large',
  aaaNormal: 'AAA Normal',
};

export const normalizeGradeKey = (gradeKey: keyof Grades) =>
  gradeVocabulary[gradeKey];
