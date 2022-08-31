import React from 'react'
import { useLangContext } from '../contexts/SelctedOptions';
import { IoCloseSharp } from './Icons'

const Language = () => {
    const { selectedLang, setSelectedLang, showLang, setShowLang } = useLangContext();
    const handleChange = (e) => {
        setSelectedLang(e.target.textContent)
    }
  return (
      <>
      {showLang && 
        <section 
            className='px-16 md:px-32 py-12 md:py-28 bg-white text-[#333333] fixed w-screen h-screen z-[100]'
            >
            <h2 className='text-xl md:text-3xl font-semibold tracking-tight mb-10'>Select your preferred language</h2>
            <div className='flex flex-col md:flex-row gap-3'>
            {['English', 'Español (España)'].map((lang, index) => (
                <button 
                key={index}
                className={`px-3-4 md:px-6 py-3 md:py-4  md:w-[30vw] ${selectedLang === lang ? ' bg-[#eee]' : ' hover:bg-[#eeeeeeab]'}`}
                onClick={handleChange}
                >
                    {lang}
                </button>
            ))}
            </div>
            <IoCloseSharp 
            onClick={() => setShowLang(false)}
                className='fill-slate-400 cursor-pointer absolute right-10 md:right-20 top-10 md:top-24 hover:bg-[#eee] h-5 w-5 md:h-8 w-8' 
             />
        </section>
    }
      </>
    
  )
}

export default Language