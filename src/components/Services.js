import React, { useState } from 'react'
import { MdSignalCellular4Bar,
    ImSpoonKnife,
    IoCarOutline,
    IoCloseSharp,
    TiLocationArrow 
} from './Icons';

const initialState = { drive: false, eat: false, ride: false};
const driveBgStyle = {
    backgroundImage: 'url("../assets/DISCOVERANDDELIVER.webp")'
}
const eatBgStyle = {
    backgroundImage: 'url("../assets/EAT.webp")'
}
const rideBgStyle = {
    backgroundImage: 'url("../assets/RIDE.webp")'
}

const Services = () => {
    const [active, setActive] = useState({...initialState, drive: true});
    const [pickUpLocation, setPickUpLocation] = useState('');
    const [destination, setDestination] = useState('');

    const services = [
        [<MdSignalCellular4Bar className='h-4 w-4 md:h-6 md:w-6' />, 'Driver or deliver', 'drive'],
        [<ImSpoonKnife className='h-4 w-4 md:h-6 md:w-6' />, 'Eat', 'eat'],
        [<IoCarOutline className='h-4 w-4 md:h-6 md:w-6' />, 'Ride', 'ride'],
    ]

    const driverContent = active.drive && 
        <> 
            <h2 className='s text-3xl md:text-5xl font-semibold leading-tight'>Get in the driver’s seat and get paid</h2>
            <p className='block my-6 text-base md:text-lg'>Drive on the platform with the largest network of active riders.</p>
            <button 
            className='font-sans tracking-tight px-4 py-[0.75rem] translate-all duration-100 bg-black text-white text-base md:text-lg hover:bg-[#333333]'
            >
                Sign up to drive
            </button>
            <a href='https://google.com' className='text-base md:text-lg block w-fit mt-4 pb-1 relative after:content-[""] after:absolute after:bottom-0 after:h-px after:w-0 hover:after:w-full after:transition-all after:duration-200 after:left-0 border-b after:bg-black border-slate-400'
            >
                Learn more about driving and delivering
            </a>
        </>;
    
    const eatContent = active.eat && 
    <>
        <h2 className='s text-3xl md:text-5xl font-semibold leading-tight'>Discover delicious eats</h2>
        <p className='block my-6 text-base md:text-lg'>Order delivery from restaurants you love.</p>
        <button 
        className='font-sans tracking-tight px-4 py-[0.75rem] translate-all duration-100 bg-black text-white text-base md:text-lg hover:bg-[#333333]'
        >
            Order Now
        </button>
        <a href='https://google.com' className='block md:inline-block text-base md:text-lg w-fit mt-4 md:mr-3 pb-1 relative after:content-[""] after:absolute after:bottom-0 after:h-px after:w-0 hover:after:w-full after:transition-all after:duration-200 after:left-0 border-b after:bg-black border-slate-400'
        >
            Own a restaurant? Partner with Uber Eatsg
        </a>
    </>;

    const rideContent = active.ride && 
    <>
        <h2 className='text-3xl md:text-5xl font-semibold leading-tight'>Request a ride now</h2>
        <form className='w-full mt-8'>
            <div className='w-full bg-[#eeeeeec5] px-8 md:px-12 py-3 mt-4 relative'>
                <input 
                type="text" 
                className='text-base md:text-lg bg-transparent w-full outline-none border-none'
                value={pickUpLocation}
                onChange={(e) => setPickUpLocation(e.target.value)}
                placeholder='Enter pickup location'
                />
                {!pickUpLocation && <TiLocationArrow className='absolute right-3 top-[50%] -translate-y-1/2 h-6 w-6 fill-slate-400 cursor-pointer hover:fill-slate-900'/>}
                {pickUpLocation && 
                <IoCloseSharp 
                className='absolute right-3 top-[50%] -translate-y-1/2 h-6 w-6 fill-slate-400 cursor-pointer' 
                onClick={() => setPickUpLocation('')}
                />}
            </div>
            <div className='w-full bg-[#eeeeeec5] px-8 md:px-12 py-3 mt-2 mb-12 relative'>
                <input 
                type="text" 
                className='text-base md:text-lg bg-transparent w-full outline-none border-none'
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder='Enter destination'
                />
                 {destination && 
                <IoCloseSharp 
                className='absolute right-3 top-[50%] -translate-y-1/2 h-6 w-6 fill-slate-400 cursor-pointer' 
                onClick={() => setDestination('')}
                />}
            </div>
            <div className='flex items-center gap-4'>
                <button
                type='button'
                className='font-semibold font-sans tracking-tight px-3 md:px-4 py-[0.75rem] translate-all duration-100 bg-black text-white text-md md:text-lg hover:bg-[#333333]'
                >
                    Request now
                </button>
                <button
                type='button'
                className='font-semibold font-sans tracking-tight px-3 md:px-7 py-[0.75rem] translate-all duration-100 bg-[#eeeeeec5] text-black text-md md:text-lg hover:bg-white-hovered'
                >
                    Schedule for later 
                </button>
            </div>
        </form>
    </>

  return (
    <section 
    className='px-12 md:px-28 py-20 md:py-28 bg-cover'
    style={active.drive ? driveBgStyle : active.eat ? eatBgStyle : rideBgStyle}
    >
        <div className='bg-white w-full md:w-[50%] min-h-full'>
            <div className='bg-[#eee] flex items-center justify-start md:justify-around py-4'>
                {services.map(([icon, text, click], index) => (
                    <button 
                    key={index}
                    className='flex flex-col justify-between items-center px-4 py-4 h-24 w-24'
                    onClick={() => setActive( { ...initialState, [click]: true } )}
                    >
                        {icon}
                        <p>{text}</p>
                    </button>
                ))}
            </div>
            <div className='px-16 py-[4.5rem]'>
                    {driverContent}
                    {eatContent}
                    {rideContent}
            </div>
        </div>
    </section>
  )
}

export default Services