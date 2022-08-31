import React from 'react'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../contexts/ProductsContext'
import { useCompanyContext } from '../contexts/CompanyContext'
import {
  RiMapPin2Fill,
  MdLanguage,
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillLinkedin,
  AiOutlineInstagram 
} from './Icons'
import { useLangContext } from '../contexts/SelctedOptions'
const Footer = () => {
  const products = useProductsContext();
  const companyArr = useCompanyContext();
  const { showLang } = useLangContext()

  const footerData = [
    ['Company', companyArr],
    ['Products', products],
    ['Global citizenship', [['', 'Safety','safety'], ['','Diversity and inclusion','/diversity-and-inclusion']]],
    ['Travel', [['', 'Airports', '/airports'], ['', 'Cities', '/cities']]]
  ]

  const footerSocial = [
    [<AiFillFacebook className='h-6 w-6 text-xl' />, 'facebook.com'],
    [<AiOutlineTwitter className='h-6 w-6 text-xl' />, 'twitter.com'],
    [<AiFillYoutube className='h-6 w-6 text-xl' />, 'youtube.com'],
    [<AiFillLinkedin className='h-6 w-6 text-xl'/>, 'linkedin.com'],
    [<AiOutlineInstagram className='h-6 w-6 text-xl' />, 'instagram.com']
  ]

  const footerLangLocation = [
    [<MdLanguage />, 'Language'],
    [<RiMapPin2Fill />, 'Ibiza']
  ]
  return (
    <>
      {!showLang && 
      <footer className='w-full max-w-full px-12 md:px-28 py-20 md:py-28 bg-black text-white flex flex-col overflow-hidden'>
          <Link 
          to={'/'}
          className='text-xl md:text-2xl -tracking-[2px] mb-10 max-w-fit'
          >
            Uber
          </Link>
          <Link
          to={'/help'}
          className='text-lg font-light md:pb-12 border-b-[1px] border-transparent hover:border-white max-w-fit'
          >
            Visit Help Center
          </Link> 
          <section className='flex flex-col md:flex-row justify-between gap-10 mt-20 md:mt-8 flex-wrap gap-y-2 max-w-full'>
              {footerData.map(([branch, arr], index) => (
                <ul className='list-none min-w-[140px]' key={index}>
                    <p className='mb-4 text-xl font-semibold'>{branch}</p>
                  {arr.map(([, subBranch, link], index) => (
                      <li key={index} className='my-3'>
                        <Link
                        to={link}
                        className='font-light text-white text-md hover:text-slate-400 max-w-fit'
                        >
                          {subBranch}
                        </Link>
                      </li>
                  ))}
                </ul>
              ))}
          </section>
          <section className='flex flex-col justify-between items-center md:flex-row w-full max-w-full'>
                  <div className='flex gap-5 items-center w-full max-w-full md:basis-1/2 flex-wrap md:flex-nowrap'>
                    <div className='socials flex items-center justify-start mt-10 md:mt-0'>
                        {footerSocial.map(([icon, link], index) => (
                          <a 
                          key={index}
                          href={'https://' + link}
                          className='px-4 py-4 flex items-center justify-center hover:bg-[#333333]'
                          >
                              {icon}
                          </a>
                        ))}
                      </div>
                      <div 
                      className='lngLoc flex flex-col md:flex-row items-start md:items-center justify-between mt-10 md:mt-0'
                      >
                      {footerLangLocation.map(([icon, text], index) => (
                        <button 
                        key={index}
                        className='hover:bg-[#333333] flex items-center gap-1 px-4 py-2'>
                            {icon}{text}
                        </button>
                      ))}
                      </div>
                      </div>
                      <div className='flex items-center justify-start md:justify-end mt-10 md:mt-0 gap-3 w-full'>
                        <a href='https://google.com'>
                          <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png?20190913154415" 
                          alt="Google Play" 
                          className='min-w-[100px] mwx-w-[117px] min-h-[30px] max-h-[35px]'
                          />
                        </a>
                        <a href='https://apple.com'>
                          <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/135px-Download_on_the_App_Store_Badge.svg.png?20170219160111" 
                            alt="App Store" 
                            className='min-w-[100px] mwx-w-[117px] min-h-[30px] max-h-[35px]'
                            />
                        </a>
                      </div>
          </section>
      </footer>}
    </>
  )
}

export default Footer