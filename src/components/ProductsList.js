import React from 'react';
import useWidth from '../hooks/useWidth';
import { useProductsContext } from '../contexts/ProductsContext'
import { Link } from 'react-router-dom'
const ProductsList = () => {
  const width = useWidth()
  const PRODUCTS_LIST = useProductsContext()
  const ulClassName = width >= 768 ? 
  'flex flex-col items-start w-64 y-72 max-w-64 max-h-80 overflow-x-hidden overflow-y-scroll absolute -left-20 top-[3.2rem] bg-white':
  'flex flex-col items-start w-full y-full overflow-x-hidden overflow-y-scroll';
  const liClassName = 'flex items-center justify-start gap-2 px-5 py-[22.5px] text-black text-xl fill-black hover:bg-white-hovered w-full'
  return (
    <ul className={ulClassName}>
        {PRODUCTS_LIST.map(([icon, text, link], index) => (
            <Link to={link} key={index} className='w-full'>
                    <li className={liClassName}>
                        {icon}{text}
                    </li>
            </Link>
        ))}
    </ul>
  )
}

export default ProductsList