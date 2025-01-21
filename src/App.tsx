import React from 'react';
import {
  Conclusion,
  Hero,
  Intro,
  Overview,
  Problem,
  Rebrand,
  Stack,
} from './Sections';
import Dock from './Dock';

const App = () => {
  return (
    <React.Fragment>
      <Dock />
      <main className='pb-20 space-y-12 sm:pt-6'>
        <Hero />
        <Intro />
        <Overview />
        <Problem />
        <Rebrand />
        <Stack />
        <Conclusion />
      </main>
    </React.Fragment>
  );
};

export default App;
