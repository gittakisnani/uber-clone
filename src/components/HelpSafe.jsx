import React, { useState } from 'react'
import { IoCloseSharp } from '../components/Icons'
const HelpSafe = () => {
    const [isOpen, setIsOpen] = useState(true);

  return (
      <>
        {isOpen && <section className='bg-[#EFF3FE] px-8 md:px-[6rem] py-6 text-black flex flex-col gap-3 font-sans'>
            <p 
            className=' font-semibold tracking-wide text-lg'
            >
            Helping to keep each other safe
            </p>
            <p 
            className='font-thin opacity-90 text-base pr-16'
            >
                We’re actively monitoring the COVID-19 situation and are continually working to help keep those who rely on our platform healthy and safe.
            </p>
            <a
            className='underline underline-offset-2 hover:text-slate-800 hover:opacity-100 opacity-80 text-base'
            href='https://google.com'
            >
                Go to Uber’s COVID-19 hub
            </a>
            <a
            className='underline underline-offset-2 hover:text-slate-800 hover:opacity-100 opacity-80 text-base'
            href='https://google.com'
            >
                Read about our Door-to-Door Safety Standard
            </a>
            <button 
            className='absolute right-8 md:right-[6rem] t-6'
            onClick={() => setIsOpen(false)}
            >
                    <IoCloseSharp className='h-5 w-5' />
            </button>
    </section>}
    </>
  )
}

export default HelpSafe