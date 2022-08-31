import React from 'react'
import { BsArrowRight } from './Icons'

const SignUp = () => {
  const data = [
    'Sign up to drive',
    'Sign up to ride',
  ]
  return (
    <section 
    className='px-12 md:px-28 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-10 text-xl md:text-4xl font-semibold'
    >
      {data.map((text, index) => (
          <a 
          href='https:google.com'
          key={index}
          className='border-b border-black pb-12 relative group'
          >
              {text}
              <BsArrowRight className='absolute right-6 top-2 w-5 h-5 md:w-8 md:h-8 group-hover:animate-arrow' />
          </a>
      ))}
    </section>
  )
}

export default SignUp