import React from 'react'
import man from './hero/Assets/man.png'
import women from './hero/Assets/woman.png'

function Review() {
  return (
    <div className='bg-white max-w-[1700px] m-auto py-5 h-[88vh] mt-[150px]'>
        <h1 className='text-center text-[rgb(2_90_2)] font-bold text-[30px]'>What Our User Says</h1>
        <div className='max-w-[1200px] m-auto grid md:grid-cols-3 grid-rows-1 md:px-0 px-4 mt-[100px] gap-[3rem] '>
            <div className=' text-center shadow-xl rounded-[20px] py-5 px-[1rem] hover:scale-110 hover:border-[1px] hover:border-[rgb(2_90_2)] '>
                <img src={man} alt="user image" className='w-[60px] flex text-center m-auto ' />
                <p>"This website helped me track my energy consumption effortlessly. My electricity bill dropped by 20% after following its tips!"</p>
                Sarah Johnson
            </div>
            <div className='text-center shadow-xl rounded-[20px] py-5 px-[1rem]  hover:scale-110 hover:border-[1px] hover:border-[rgb(2_90_2)]'>
                <img src={women} alt="user image" className='w-[60px] flex text-center m-auto ' />
                <p>"This website helped me track my energy consumption effortlessly. My electricity bill dropped by 20% after following its tips!"</p>
                Sarah Johnson
            </div>
            <div className='text-center shadow-xl rounded-[20px] py-5 px-[1rem]  hover:scale-110 hover:border-[1px] hover:border-[rgb(2_90_2)]'>
                <img src={man} alt="user image" className='w-[60px] flex text-center m-auto ' />
                <p>"This website helped me track my energy consumption effortlessly. My electricity bill dropped by 20% after following its tips!"</p>
                Sarah Johnson
            </div>
            
        </div>

    </div>
  )
}

export default Review