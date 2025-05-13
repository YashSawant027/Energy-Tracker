import React from 'react';
import img from "./Assets/earth.png";
import { TypeAnimation } from 'react-type-animation';
import Savings from './Savings';
import { Element } from 'react-scroll'; // ✅ Import Element

function Heroo() {
  return (
    <Element name="home"> {/* ✅ Add this wrapper with name "home" */}
      <div className='max-w-[1170px] m-auto mt-[60px]'>
        <div className='grid md:grid-cols-2 grid-rows-1 gap-10'>
          <div className='px-4'>
            <h1 className='text-[40px] font-bold text-[rgb(2_90_2)] md:mt-[120px] leading-tight'>
              <TypeAnimation
                sequence={[
                  'Track Your Energy,',
                  1000,
                  'Track Your Energy,\nSave The Planet',
                  1000,
                ]}
                wrapper="span"
                speed={40}
                style={{ whiteSpace: 'pre-line', display: 'inline-block' }}
                cursor={false}
                repeat={0}
              />
            </h1>

            <p className='mt-4'>
              Manage your energy consumption, reduce your carbon footprint
              and save money with our tracking tools
            </p>
            <button className='bg-black text-white font-bold py-2 px-4 rounded-xl mt-4'>
              Get Started
            </button>
          </div>
          <div className='flex items-center justify-center p-4 relative z-10'>
            <img src={img} alt="" className='App-logo App md:w-[45rem] w-[20rem]' />
          </div>
        </div>
        <Savings />
      </div>
    </Element>
  );
}

export default Heroo;
