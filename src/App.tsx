import React from 'react';
import { ArrowLeft } from './components/icons/ArrowLeft';
import { LineVertical } from './components/icons/LineVertical';

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

  return (
    <div className='min-h-screen flex flex-col items-center justify-end max-w-[400px] mx-auto p-4'>
      <div
        className={`bg-gray-900 w-4/5 rounded-[24px] transition-all duration-200 ease-out flex flex-col gap-4 overflow-clip p-1  ${
          showTitles && 'rounded-[16px]'
        }`}
      >
        {showTitles ? (
          <div className='flex overflow-x-auto flex-col'>
            {titles.map((title, index) => {
              return (
                <button
                  key={index}
                  className={`text-white w-full flex flex-col text-sm font-medium py-1.5 px-2 transition-all duration-200 ease-linear cursor-pointer hover:bg-gray-500 rounded-lg ${
                    index !== 0 && 'text-gray-500 hover:text-white'
                  }`}
                >
                  {title}
                </button>
              );
            })}
          </div>
        ) : null}

        <div
          className='flex items-center gap-1'
          onClick={() => setShowTitles(!showTitles)}
        >
          <button className='size-6 bg-transparent hover:bg-gray-500 flex items-center justify-center rounded-full'>
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
          <h6 className='text-white text-sm font-medium flex-1'>Intro</h6>
          <button className='py-1.5 px-3 rounded-full text-white leading-[1] bg-gray-500 text-xs font-semibold'>
            10%
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
