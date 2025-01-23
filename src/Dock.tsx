import gsap from 'gsap';
import React from 'react';
import { clsx } from 'clsx';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { ArrowLeft } from './components/icons/ArrowLeft';
import { LineVertical } from './components/icons/LineVertical';

gsap.registerPlugin(ScrollTrigger);

const Dock = () => {
  const [id, setId] = React.useState('');
  const [progress, setProgress] = React.useState(0);
  const [titles, setTitles] = React.useState<HTMLHeadingElement[]>([]);
  const [showTitles, setShowTitles] = React.useState(titles.length > 0);

  useGSAP(() => {
    const elements = document.querySelectorAll('section');
    const elementsArray = Array.from(elements).filter(
      (_, index) => index !== 0
    );

    const titles = elementsArray.map((el) => el.querySelector('h2')!);
    titles.forEach((el, index) => (el.id = elementsArray[index].id));
    setTitles(titles);

    if (elementsArray.length > 0) {
      setId(elementsArray[0].id);
    }

    elementsArray.forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setId(el.id),
        onEnterBack: () => setId(el.id),
      });
    });

    ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        setProgress(Math.round(self.progress * 100));
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
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
      transformOrigin: 'center',
      scaleX: showTitles ? '100%' : '90%',
      borderRadius: 16,
    });
  }, [showTitles]);

  useGSAP(() => {
    gsap.fromTo(
      '#indicator',
      { x: -8, opacity: 0.1, ease: 'sine.inOut', duration: 0.2 },
      { x: 0, opacity: 1 }
    );
  }, [id]);

  return (
    <div className='fixed bottom-0 z-50 flex flex-col items-center justify-end w-full overflow-clip'>
      <div className='max-w-[420px] w-full mx-auto p-2.5 sm:p-4 flex flex-col items-center justify-center'>
        <div
          id='container'
          className='flex flex-col w-full p-1 transition-all duration-200 ease-out bg-gray-900'
        >
          <div
            id='titles'
            className='flex flex-col w-full overflow-clip'
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
              id='indicator'
              className='flex-1 text-sm font-medium text-left text-white cursor-pointer'
              onClick={() => setShowTitles(!showTitles)}
            >
              {titles.find((title) => title.id === id)?.textContent}
            </button>
            <div
              id='progress'
              className='py-1.5 px-3 rounded-full text-white leading-[1] bg-gray-500 text-xs font-semibold cursor-default'
            >
              {progress}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dock;
