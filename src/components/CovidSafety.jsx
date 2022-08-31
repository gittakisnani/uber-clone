import React from 'react'

const CovidSafety = () => {
    const anchorClassName = 'border-b pb-1 border-slate-200 relative after:absolute after:w-0 hover:after:w-full after:h-px after:left-0 after:bottom-0 after:bg-black after:duration-200 max-w-fit block md:inline-block mr-3';
  return (
    <section className='px-12 md:px-28 py-20 md:py-28'>
    <h2 className='font-semibold text-xl md:text-4xl'>
        Helping to keep each other safe during <br /><span>COVID-19</span>
    </h2>
    <p className='my-4 md:my-8 max-w-[700px]'>
    We’re actively monitoring the coronavirus (COVID-19) situation and are continually working to help keep those who rely on our platform healthy and safe.
    </p>
    <a className={anchorClassName} href="https://google.com">Go to Uber’s COVID-19 hub</a>
    <a className={anchorClassName} href="https://google.com">Read about our new Door-to-Door Safety Standard</a>
    </section>
  )
}

export default CovidSafety