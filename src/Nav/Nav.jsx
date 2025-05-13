import { faBars, faBolt, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

function Nav() {
  const [open, setOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('home');

  const lists = [
  { name: 'Home', to: '/', type: 'route' },
  { name: 'About', to: 'about', type: 'scroll' },
  { name: 'Products', to: '/product', type: 'route' },
  { name: 'Track', to: 'track', type: 'scroll' }
];


  return (
    <div className='min-w-[100vw] bg-white fixed top-0 right-0 left-0 z-30'>
      <div className='md:flex justify-between md:py-0 py-2 md:px-10 px-7 relative'>
        <div className='flex font-bold cursor-pointer items-center gap-2 md:ms-5'>
          <FontAwesomeIcon icon={faBolt} className='text-center' />
          <h1 className='font-bold md:text-[20px] text-[15px]'>Energy Track</h1>
        </div>

        <div
          className='absolute right-8 md:top-6 top-2 md:hidden cursor-pointer'
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <FontAwesomeIcon icon={faBars} />
          ) : (
            <FontAwesomeIcon icon={faXmark} />
          )}
        </div>

        <ul
          className={`md:flex md:items-center gap-6 md:pb-0 pb-9 absolute md:static bg-white w-full left-0 md:w-auto md:pl-0 pl-9 mr-[2rem] transition-all duration-200 ease-in ${
            open
              ? 'top-[-440px] md:opacity-100 opacity-0'
              : 'top-[43px] opacity-100'
          }`}
        >
          {lists.map((v, i) => (
  <li key={i} className='md:me-0 me-4 my-5'>
    {v.type === 'scroll' ? (
      <ScrollLink
        to={v.to}
        smooth={true}
        duration={500}
        offset={-80}
        spy={true}
        onSetActive={() => setActiveTab(v.to)}
        className={`block font-bold duration-500 cursor-pointer px-3 py-2 rounded ${
          activeTab === v.to
            ? 'bg-black text-white'
            : 'text-black hover:border-b-2 hover:border-black'
        }`}
      >
        {v.name}
      </ScrollLink>
    ) : (
      <RouterLink
        to={v.to}
        onClick={() => setActiveTab(v.to)}
        className={`block font-bold duration-500 cursor-pointer px-3 py-2 rounded ${
          activeTab === v.to
            ? 'bg-black text-white'
            : 'text-black hover:border-b-2 hover:border-black'
        }`}
      >
        {v.name}
      </RouterLink>
    )}
  </li>
))}

        </ul>
      </div>
    </div>
  );
}

export default Nav;
