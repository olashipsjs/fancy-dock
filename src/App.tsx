import { ArrowLeft } from './components/icons/ArrowLeft';

const App = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-end max-w-[400px] mx-auto p-4'>
      <div className='bg-gray-900 w-4/5 rounded-full flex overflow-clip items-center py-1 pr-1 pl-2'>
        <button className='size-5 bg-transparent hover:bg-gray-500 flex items-center justify-center rounded-full'>
          <ArrowLeft
            width={16}
            height={16}
            className={'text-white'}
          />
        </button>
        <h6 className='underline text-white text-sm font-medium flex-1'>
          Introduction
        </h6>
        <button className='py-1.5 px-3 rounded-full text-white leading-[1] bg-gray-500 text-xs font-semibold'>
          10%
        </button>
      </div>
    </div>
  );
};

export default App;
