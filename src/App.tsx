import React from 'react';
import { ArrowLeft } from './components/icons/ArrowLeft';
import { LineVertical } from './components/icons/LineVertical';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const titles = [
  'Intro',
  'Overview',
  'Identifying the problem',
  'UI & rebrand',
  'A stack comparison',
  'Conclusion',
];

const App = () => {
  const [showTitles, setShowTitles] = React.useState(false);
  const [currentTitle, setCurrentTitle] = React.useState(titles[0]);

  useGSAP(() => {
    gsap.to('#titles', {
      duration: 0.2,
      ease: 'power2.out',
      padding: showTitles ? 4 : 0,
      height: showTitles ? 'auto' : 0,
      marginBottom: showTitles ? 12 : 0,
    });

    gsap.to('#container', {
      duration: 0.25,
      ease: 'elastic.inOut',
      width: showTitles ? 360 : 320,
      borderRadius: showTitles ? 16 : 24,
    });
  }, [showTitles]);

  return (
    <div className='min-h-screen flex flex-col items-center justify-end max-w-[400px] mx-auto p-4'>
      <div
        id='container'
        className='bg-gray-900 rounded-[24px] transition-all duration-200 ease-out flex flex-col overflow-clip p-1 max-w-full mx-auto'
      >
        <div
          id='titles'
          className='flex overflow-x-auto flex-col overflow-clip'
        >
          {titles.map((title, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  setCurrentTitle(title);
                  setShowTitles(false);
                }}
                className={`text-white w-full flex flex-col text-sm font-medium py-1.5 px-2 transition-all duration-200 ease-linear cursor-pointer hover:bg-gray-500 rounded-[8px] ${
                  currentTitle !== title && 'text-gray-500 hover:text-white'
                }`}
              >
                {title}
              </button>
            );
          })}
        </div>

        <div className='flex items-center gap-0.5'>
          <button
            disabled={!showTitles}
            className='size-6 bg-transparent hover:bg-gray-500 flex items-center justify-center rounded-full transition-all duration-200 ease-linear disabled:opacity-50'
            onClick={() => setShowTitles(false)}
          >
            <ArrowLeft
              width={16}
              height={16}
              className={'text-white'}
            />
          </button>
          <LineVertical
            width={16}
            height={16}
            className='text-gray-500'
          />
          <button
            className='text-white text-sm font-medium flex-1 text-left cursor-pointer'
            onClick={() => setShowTitles(!showTitles)}
          >
            {currentTitle}
          </button>
          <button className='py-1.5 px-3 rounded-full text-white leading-[1] bg-gray-500 text-xs font-semibold cursor-default'>
            10%
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
