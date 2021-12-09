import { LoremIpsum } from 'lorem-ipsum';
import { VFC } from 'react';
import { TopArea } from './_components/TopArea';
import { BottomArea } from './_components/BottomArea';

const FrontPage: VFC = () => {
  return (
    <>
      <TopArea />
      <BottomArea />
    </>
  );
};

export default FrontPage;
