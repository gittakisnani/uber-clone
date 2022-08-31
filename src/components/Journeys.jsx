import React from 'react'

const Journeys = () => {
    const anchorClassName = 'text-[1.135rem] border-b pb-1 border-slate-200 relative after:absolute after:w-0 hover:after:w-full after:h-px after:left-0 after:bottom-0 after:bg-black after:duration-200 max-w-fit block md:inline-block mr-3';
    const DATA = [
        {
            id: 1,
            title: 'Driver safety',
            imgSrc: './assets/man.jpg',
            imgAlt: 'Driver safety', 
            text: 'Count on 24/7 support and emergency assistance. Share your trip with loved ones. Our focus is on your safety, so you can focus on the opportunity.',
            url: 'https://google.com'
        },
        {
            id: 2,
            title: 'Rider safety',
            imgSrc: './assets/woman.jpg',
            imgAlt: 'Rider safety', 
            text: 'Millions of rides are requested every day. Every rider has access to safety features built into the app. And every ride has a support team if you need them.',
            url: 'https://google.com'
        }
    ]
  return (
      <>
    <section className='px-12 md:px-36 py-20 md:py-28'>
        <h2 className='text-3xl md:text-[2.5rem] tracking-tight mb-8 md:mb-12 font-semibold'>Building safer journeys for everyone</h2>
        <div className='mt-4 md:mt-8 flex flex-col md:flex-row justify-between gap-6'>
                {
                    DATA.map(({id, title, imgSrc, imgAlt, text, url}) => (
                        <div 
                        key={id}
                        className='flex flex-col gap-4 md:gap-6 relative'
                        >
                            <img src={imgSrc} alt={imgAlt} />
                            <h3 className='text-xl md:text-2xl font-semibold'>{title}</h3>
                            <p className='text-[1.135rem]'>{text}</p>
                            <br />
                            <a 
                            href={url}
                            className={anchorClassName}
                            >Learn more</a>
                        </div>
                    ))
                }
        </div>
    </section>
        <div className='bg-blue-600 px-12 md:px-36 py-20 md:py-28 text-white'>
            <p className='text-xl font-semibold'>“Every day, our technology puts millions of people together in cars in cities around the world. Helping keep people safe is a huge responsibility and one we do not take lightly.”
            </p>
            <p className='font-tight text-base mt-10'>Dara Khosrowshahi, Uber CEO</p>
        </div>
    </>
  )
}

export default Journeys