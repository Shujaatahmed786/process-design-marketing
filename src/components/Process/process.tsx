import React from 'react';


import Lines from './lines';

const Process = () => {
  

  return (
  <div className='mx-auto max-w-[90rem] flex-shrink-0 w-[85rem] '>
      <div className='flex justify-center items-center  '>
        <div className="relative">
          <div className="w-[12em] h-[12em] border-2 border-[#e3204a] rounded-full flex justify-center items-center mt-12">
            <span className=" absolute top-[1.5rem] text-5xl font-bold text-[3em] outline-solid num-outline">01</span>
            <p className="text-[#000] text-lg font-[700]">Research</p>
          </div>
        </div>
        <Lines />
        <div className="relative">
          <div className="w-[12em] h-[12em]  border-2 border-[#e3204a] rounded-full flex justify-center items-center mt-12">
            <span className=" absolute top-[1.5rem] text-5xl font-bold text-[3em] num-outline">02</span>
            <p className="text-[#000]  text-lg font-[700]">Analysis</p>
          </div>
        </div>
        <Lines />
        <div className="relative">
          <div className="w-[12em] h-[12em] border-2 border-red-500 rounded-full flex justify-center items-center mt-12">
            <span className=" absolute top-[1.5rem] text-5xl font-bold text-[3em] num-outline">03</span>
            <p className="text-[#000]  text-lg font-[700]">Wireframing</p>
          </div>
        </div>
        <Lines />
        <div className="relative">
          <div className="w-[12em] h-[12em]  border-2 border-red-500 rounded-full flex justify-center items-center mt-12">
            <span className=" absolute top-[1.5rem] text-5xl font-bold text-[3em] num-outline">04</span>
            <p className="text-[#000]  text-lg font-[700]">UI Designing</p>
          </div>
        </div>
        <Lines />
        <div className="relative">
          <div className="w-[12em] h-[12em] border-2 border-red-500 rounded-full flex justify-center items-center mt-12">
            <span className="absolute top-[1.5rem] text-5xl font-bold text-[3em] num-outline">05</span>
            <p className="text-[#000] text-lg font-[700]">Prototype</p>
          </div>
        </div>
      </div>
      </div>
  );
}

export default Process;
