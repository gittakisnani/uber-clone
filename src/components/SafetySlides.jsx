import React, { useState, useEffect, useRef  } from 'react'
import useWidth from '../hooks/useWidth.js';
import { 
    AiOutlineLeft,
    AiOutlineRight
} from './Icons'
const ARROW_CLASS = 'rounded-full w-10 h-10 bg-slate-400 flex items-center justify-center'
const SafetySlides = () => {
    const width = useWidth();
    const ref = useRef()
    const [maxSlideNumber, setMaxSlideNumber] = useState(width >= 1024 ? 2 : width >= 991 ? 3 : 6);
    const [currentSlide, setCurrentSlide] = useState(1);


    useEffect(() => {
        setMaxSlideNumber(width >= 1024 ? 2 : width >= 991 ? 3 : 6);
    }, [setMaxSlideNumber, width]);

    const rightSlide = () => {
        if(currentSlide === maxSlideNumber) return;

        setCurrentSlide(prev => prev + 1);
        document.getElementById('slide').style.transform = `translateX(-${101 * currentSlide / maxSlideNumber}%)`
    }
    
    const leftSlide = () => {
        if(currentSlide === 1) return;

        setCurrentSlide(prev => prev - 1)
        document.getElementById('slide').style.transform = `translateX(-${101 * (currentSlide - 2) / maxSlideNumber}%)`
    }

    const DATA = [
        {
            icon: './assets/checklist-on-square.webp',
            title: 'Our new Door-to-Door Safety Standard',
            paragraph: 'We want you to feel safe riding with Uber as our communities start to move again. That’s why we’re introducing our new Door-to-Door Safety Standard. Powered by Uber’s innovative technology, encouraging shared responsibility, and including guidance from health experts, these new measures are designed to help protect the health and safety of everyone who uses our platform.'
        },
        {
            icon: './assets/mask-on-square.webp',
            title: 'In this together',
            paragraph: 'All riders and drivers must wear a face cover or mask when using Uber, even when vaccinated.'
        },
        {
            icon: './assets/FCC-on-square.webp',
            title: 'Face Cover Check',
            paragraph: 'We ask drivers to take a photo of themselves before they can begin driving, and our technology helps verify that they are wearing a face cover.'
        },
        {
            icon: './assets/blue.webp',
            title: 'Health and safety supplies for drivers',
            paragraph: 'We are working to provide drivers and delivery people with health and safety supplies like face covers, disinfectants, and gloves to deliver food.'
        },
        {
            icon: './assets/expert-advice.webp',
            title: 'Expert-led guidance',
            paragraph: 'We are working with the World Health Organization (WHO) to share safety tips and resources.'
        },
        {
            icon: './assets/feedbackloop2x-1.webp',
            title: 'Ride Safety Feedback',
            paragraph: 'You’ll now be able to leave feedback on health issues, such as a driver not wearing a face cover or a mask. This helps us improve and holds everyone accountable.'
        },

    ]
  return (
    <section 
        className='slideContainer px-12 md:px-28 py-20 md:py-28 w-full max-w-full overflow-hidden'
        ref={ref}
    >
        <div
            id='slide'
            className='gap-8 flex w-fit transition-all duration-200'
        >
        {DATA.map(({ icon, title, paragraph }, index) => (
            <div 
            key={index}
            className='slideCard flex flex-col gap-4 min-w-[358px] max-w-[360px]'
            >
                <img className='max-w-fit max-h-fit' src={icon} alt={title} />
                <h4 className='text-lg md:text-xl font-semibold'>{title}</h4>
                <p className='text-lg md:text-xl font-light leading-6 md:leading-7'>{paragraph}</p>
            </div>  
        ))}
        </div>
        <div className='flex float-right gap-3 items-center'>
            <p className='tracking-tighter '>{currentSlide}/{maxSlideNumber}</p>
            <button 
            className={`${ARROW_CLASS} + ${currentSlide === 1 && 'cursor-not-allowed bg-slate-300'}`}
            onClick={leftSlide}
            >
            <AiOutlineLeft />
            </button>
            <button 
            className={`${ARROW_CLASS} + ${currentSlide === maxSlideNumber && 'cursor-not-allowed bg-slate-300'}`}
            onClick={rightSlide}
            >
            <AiOutlineRight />
            </button>
        </div>
    </section>
  )
}



export default SafetySlides