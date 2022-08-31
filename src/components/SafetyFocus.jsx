import React from 'react';
import { MdPeopleOutline,
    CgNotes,
    AiOutlineHome
} from './Icons'

const SafetyFocus = () => {
    const anchorClassName = 'border-b pb-1 border-slate-200 relative after:absolute after:w-0 hover:after:w-full after:h-px after:left-0 after:bottom-0 after:bg-black after:duration-200 max-w-fit block md:inline-block mr-3';
    const iconsClassName = 'h-6 w-6 stroke-0'

    const data = [
        { 
            imgSrc: 'Safety_Home_Img2x.webp', 
            altText: 'Safety Home',
            title: 'Our commitment to your safety', 
            paragraph: "With every safety feature and every standard in our Community Guidelines, we're committed to helping to create a safe environment for our users.",
            firstAnchor: 'Read about our Community Guidelines',
            secondAnchor: 'See all safety features'
        },
        { 
            imgSrc: 'Cities_Home_Img2x.webp', 
            altText: 'Cities Home',
            title: 'Setting 10,000+ cities in motion', 
            paragraph: "The app is available in thousands of cities worldwide, so you can request a ride even when you’re far from home.",
            firstAnchor: 'View all cities',
            secondAnchor: null
        },
    ]
    const servicesData = [
        {
            icon: <MdPeopleOutline className={iconsClassName} />,
            title: 'About us',
            paragraph: 'Find out how we started, what drives us, and how we’re reimagining how the world moves.',
            anchor: 'Learn more about Uber'
        },
        {
            icon: <CgNotes className={iconsClassName} />,
            title: 'Newsroom',
            paragraph: 'See announcements about our latest releases, initiatives, and partnerships.',
            anchor: 'Go to newsroom'
        },
        {
            icon: <AiOutlineHome className={iconsClassName} />,
            title: 'Global citizenship',
            paragraph: 'Read about our commitment to making a positive impact in the cities we serve.',
            anchor: 'See our partnership'
        },
    ]


  return (
    <section className='px-12 md:px-28 py-12 md:py-16'>
        <h1 className='text-2xl md:text-4xl font-semibold text-[#333333]'>Focused on safety, wherever you go</h1>
        <div className='grid gap-8 grid-cols-1 md:grid-cols-2 w-full max-w-full'>
           {data.map(({ imgSrc, altText, title, paragraph, firstAnchor, secondAnchor }, index) => (
            <div 
            className='flex flex-col min-w-[320px]'
            key={index}
            >
                <img 
                src={"./assets/" + imgSrc} 
                alt={altText} 
                className='my-4 md:my-6'
                />
                <h4 className='text-xl md:text-2xl text-[#333333] font-semibold'>{title}</h4>
                <p className='text-base md:text-lg tracking-tight font-light block my-4 mb-6 md:mb-8 opacity-90'>{paragraph}</p>
                <div>
                    <a 
                    href='https://google.com'
                    className={anchorClassName}
                    >{firstAnchor}</a>
                    <a 
                    href='https://google.com'
                    className={anchorClassName}
                    >{secondAnchor}</a>
                </div>
            </div>
           ))}
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 md:mt-32 '>
            {servicesData.map(({ icon, title, paragraph, anchor }, index) => (
                <div
                className='flex flex-col'
                key={index}>
                    <span>{icon}</span>
                    <h4 className='text-xl font-semibold my-4 text-[#333333]'>{title}</h4>
                    <p className='font-light text-lg tracking-tight mb-6'>{paragraph}</p>
                    <a href="https://google.com" className={anchorClassName + ' text-lg '}>{anchor}</a>
                </div>
            ))}
        </div>
    </section>
  )
}

export default SafetyFocus