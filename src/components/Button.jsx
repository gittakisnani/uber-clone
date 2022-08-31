import React from 'react'
import { Link } from 'react-router-dom'
const Button = ({ link, className, text, icon, list, order}) => {
  return (
 <Link
    type='button'
    to={link}
    className={'cursor-pointer text-[15px] font-semibold bg-transparent text-white hover:bg-black-hovered rounded-full px-4 py-2 flex items-center justify-center gap-1 transition-all duration-250 ease-linear ' + className}
  >
    {order === '1' && icon}{text}{order === '2' && icon}
 </Link>
  )
}

export default Button