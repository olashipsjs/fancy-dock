import React from 'react';
import { ArrowLeft } from './components/icons/ArrowLeft';
import { LineVertical } from './components/icons/LineVertical';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { clsx } from 'clsx';
import {
  Conclusion,
  Hero,
  Intro,
  Overview,
  Problem,
  Rebrand,
  Stack,
} from './Sections';

const App = () => {
  const [titles, setTitles] = React.useState<HTMLHeadingElement[]>([]);
  const [showTitles, setShowTitles] = React.useState(titles.length > 0);
  const [id, setId] = React.useState('');

  React.useEffect(() => {
    const elements = document.querySelectorAll('h2');
    const headings = Array.from(elements);
    setTitles(headings);
    if (headings.length > 0) {
      setId(headings[0].id!);
    }
  }, []);

  useGSAP(() => {
    gsap.to('#titles', {
      duration: 0.2,
      ease: 'power2.out',
      height: showTitles ? 'auto' : 0,
      marginBottom: showTitles ? 12 : 0,
    });

    gsap.to('#container', {
      duration: 0.2,
      ease: 'elastic.inOut',
      width: showTitles ? 360 : 320,
      borderRadius: showTitles ? 16 : 24,
    });
  }, [showTitles]);

  return (
    <React.Fragment>
      <div className='fixed z-50 flex flex-col items-center justify-end w-full min-h-screen'>
        <div className=' max-w-[400px] mx-auto p-4'>
          <div
            id='container'
            className='bg-gray-900 rounded-[24px] transition-all duration-200 ease-out flex flex-col overflow-clip p-1'
          >
            <div
              id='titles'
              className='flex flex-col overflow-x-auto overflow-clip'
            >
              {titles.map((title) => {
                return (
                  <a
                    key={title.id}
                    href={`#${title.id}`}
                    onClick={() => {
                      setId(title.id!);
                      setShowTitles(false);
                    }}
                    className={clsx(
                      'w-full flex flex-col text-sm font-medium py-1.5 px-2 transition-all duration-200 ease-linear cursor-pointer hover:bg-gray-500 rounded-[10px]',
                      id !== title.id
                        ? 'text-gray-400 hover:text-white'
                        : 'text-white'
                    )}
                  >
                    {title.textContent}
                  </a>
                );
              })}
            </div>

            <div className='flex items-center gap-0.5'>
              <button
                disabled={!showTitles}
                className='flex items-center justify-center transition-all duration-200 ease-linear bg-transparent rounded-full size-6 hover:bg-gray-500 disabled:opacity-50 disabled:pointer-events-none'
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
                className='flex-1 text-sm font-medium text-left text-white cursor-pointer'
                onClick={() => setShowTitles(!showTitles)}
              >
                {titles.find((title) => title.id === id)?.textContent}
              </button>
              <button className='py-1.5 px-3 rounded-full text-white leading-[1] bg-gray-500 text-xs font-semibold cursor-default'>
                10%
              </button>
            </div>
          </div>
        </div>
      </div>

      <main className='pt-12 pb-20 space-y-12 scroll-smooth'>
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
