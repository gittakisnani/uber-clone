import React from 'react'
import { RiSteering2Fill,
  IoCarOutline
} from './Icons'

const Partner = () => {
    const anchorClassName = 'text-[1.135rem] border-b pb-1 border-slate-200 relative after:absolute after:w-0 hover:after:w-full after:h-px after:left-0 after:bottom-0 after:bg-black after:duration-200 max-w-fit block md:inline-block mr-3';
    const DATA = [
      {
        icon: <RiSteering2Fill className='h-7 w-7'/>,
        title: 'Driver Safety',
        text: 'Drive when and where you want with confidence.',
        link: 'https://google.com'
      },
      {
        icon: <IoCarOutline className='h-7 w-7'/>,
        title: 'Rider Safety',
        text: 'Go anytime and get there comfortably.',
        link: 'https://google.com'
      },

    ]
  return (
    <section className='px-12 md:px-36 py-20 md:py-28'>
        <div className='w-full flex flex-col md:flex-row justify-between items-center gap-8'>
            <img src="./assets/default.webp" alt="Partnering to make a difference" />
            <div className='flex flex-col gap-6 md:gap-10'>
              <h2 className='text-3xl md:text-[2.5rem] font-semibold'>
              Partnering to make a difference
              </h2>
              <p className='text-[1.135rem]'>Our commitment to safety goes beyond your ride. We have teamed up with leading experts—from public safety officials to anti-violence organizations—to help make roads and cities safer for all.</p>
              <a 
              href="https:google.com"
              className={anchorClassName}
              >
              Learn more
              </a>
            </div>
        </div>
        <div className='mt-24 md:mt-32 flex flex-col gap-10 md:flex-row md:gap-56'>
          {DATA.map(({ icon, title, text, link }, index) => (
            <div
            key={index}
            className='flex flex-col gap-4 md:gap-6'
            >
                <span>{icon}</span>
                <h3 className='font-semibold text-xl'>{title}</h3>
                <p className='font-light text-lg'>{text}</p>
                <a 
                href={link}
                className={anchorClassName}
                >Learn more</a>
            </div>
          ))}
        </div>
    </section>
  )
}

export default Partner