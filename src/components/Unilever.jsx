import React from 'react'


const anchorClassName = 'text-lg md:text-lg border-b pb-1 border-slate-200 relative after:absolute after:w-0 hover:after:w-full after:h-px after:left-0 after:bottom-0 after:bg-black after:duration-200 max-w-fit block md:inline-block mr-3';

const Unilever = () => {
  return (
    <section className='px-12 md:px-28 py-20 md:py-28'>
        <div className='w-full flex flex-col md:flex-row md:justify-between'>
            <img src="./assets/unilever.webp" alt="Unilever" />
            <div className='max-w-[450px]'>
                <h1 className='text-2xl md:text-[2.5rem] tracking-tight leading-[1.1] font-semibold md:font-normal mb-8'>Get on easy with Uber & Unilever</h1>
                <p className='text-lg md:text-lg tracking-tight'>We want you to move freely, make the most of your As part of our commitment to safety, we have partnered with Unilever to provide supplies such as masks, gloves, Lifebuoy hand hygiene gel and Cif wipes to drivers.*
                <br />
                <br />
                <span className='italic'>
                *Units are limited and will be available while supplies last. Uber is not responsible for products or services offered by other companies.
                </span>
                </p>
                <br />
                <br />
                <a 
                href="https://google.com"
                className={anchorClassName}
                >Learn more</a>
            </div>
        </div>
    </section>
  )
}

export default Unilever