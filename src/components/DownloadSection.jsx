import React from 'react'
import { BsArrowRight } from './Icons'

const DownloadSection = () => {
    const data = [
        {
            imgSrc: './assets/Driver-App-logo.webp',
            imgAlt: 'Download the Driver app', 
            text: 'Download the Driver app'
        }, 
        {
            imgSrc: './assets/Rider-App-logo.webp',
            imgAlt: 'Download the Rider app', 
            text: 'Download the Rider app'
        }, 
    ]
  return (
    <section className='bg-[#eee] px-12 md:px-28 py-12 md:py-16'>
        <h2 className='text-xl md:text-3xl font-semibold text-[#333333] mb-8 md:mt-10'>There’s more to love in the apps</h2>
        <div className='grid gird-cols-1 md:grid-cols-2 gap-10'>
            {data.map(({ imgSrc, imgAlt, text }, index) => (
                <a 
                    href="https://google.com"
                    className='group flex items-center gap-6 p-5 border border-slate-300 relative bg-white'
                    key={index}
                >
                    <img 
                        src={imgSrc}
                        alt={imgAlt}
                        className='w-20 h-20  md:h-fit md:w-fit'
                    />
                    <p className='text-2xl font-semibold'>{text}</p>
                    <BsArrowRight className='absolute right-6 top-[50%] translate-y-[-40%] group-hover:right-4 duration-200 h-5 md:h-7 w-5 md:w-7' />
                </a>
            ))}
        </div>
    </section>
  )
}

export default DownloadSection