import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiArrowDownSLine,
    RiArrowDropUpLine,
    MdLanguage,
    HiOutlineMenuAlt4,
    CgMenuGridO,
    BsPerson
} from './Icons'
import useWidth from '../hooks/useWidth';

import Button from './Button'
import ListButton from './ListButton'
import { useLangContext } from '../contexts/SelctedOptions';
const Header = () => {
    const width = useWidth();
    const { setShowLang, selectedLang } = useLangContext()
    return (
    <header className='w-full max-w-full h-14 md:h-16 box-border py-2 px-6 md:px-16 text-white bg-black flex items-center justify-between z-[200] relative'>
    <Link 
        to={'/'}
        className='text-xl md:text-2xl -tracking-[2px]'
    >
        Uber
    </Link>
    <div className='flex-1 hidden md:flex items-center items-justify-center gap-[6px] pl-8'>
        <ListButton 
            text='Company'
            order='2'
            icon={<RiArrowDownSLine />} 
            secIcon={<RiArrowDropUpLine />} 
            listName='Company'
        />
        <Button
            text='Safety'
            link='/safety'
            />
        <Button
            text='Help'
            link='/help'
        />
    </div>
    <div className='flex justify-end items-center gap-[6px]'>
        {width >= 768 && 
        <>
            <ListButton 
                text={selectedLang.slice(0, 2).toUpperCase()}
                order='1'
                icon={<MdLanguage className='h-5 w-5' />} 
                onClick={() => setShowLang(prev => !prev)}
            />
            <ListButton 
                text='Products'
                order='1'
                icon={<CgMenuGridO className='h-5 w-5' />} 
                listName='Products'
            />
        </>
        }
        <Button
            text={width >= 768 && 'Log in'}
            link='/login'
            icon={<BsPerson className='h-5 w-5' />}
            order='1'
        />
        <Button
            text='Sign in'
            link='/login'
            className='!bg-white hover:!bg-white-hovered transition-all duration-200 text-black'
        />
        {width < 767 && 
            <ListButton 
                icon={<HiOutlineMenuAlt4 />}
                order='1'
            />
        }
    </div>
    </header>
  )
}

export default Header