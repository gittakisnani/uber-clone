import React from 'react'

const SafetyExp = () => {
    const DATA = [
        {
            title: 'Safety features in the app',
            text: 'Tap a button for emergency assistance. Share your trip details with loved ones. Our technology helps put peace of mind at your fingertips.',
            id: 1
        },
        {
            title: 'An inclusive community',
            text: 'Millions of riders and drivers share a set of Community Guidelines, holding each other accountable to do the right thing.',
            id: 2
        },
        {
            title: 'Support at every turn',
            text: 'A specially trained team is available 24/7. Reach them in the app, day or night, with any questions or safety concerns.',
            id: 3
        },
    ]
  return (
    <section className='px-12 md:px-28 py-20 md:py-28'>
        <h2 className='text-3xl md:text-[2.5rem] tracking-tight mb-8 md:mb-12 font-semibold'>How safety is built into your experience</h2>
        <div className='w-full max-w-full flex flex-col md:flex-row justify-between gap-8 items-center'>
            {DATA.map(({title, text, id}) => (
                <div
                key={id}
                >
                    <h3 className='text-xl md:text-xl font-semibold tracking-tight mb-2 md:mb-4'>{title}
                    </h3>
                    <p className='text-lg tracking-tighter mb-8 md:mb-14'>{text}</p>
                </div>
            ))}
        </div>
    
    </section>
  )
}

export default SafetyExp