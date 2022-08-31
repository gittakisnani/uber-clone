import React, { useState, lazy, Suspense} from 'react'
// import CompanyList from './CompanyList'

const ListButton = ({ text, icon, secIcon=icon, order='1', onClick, listName}) => {
  const [showList, setShowList] = useState(false);
  const CompanyList = lazy(() => import('./CompanyList'))
  const ProductsList = lazy(() => import('./ProductsList'))

  let buttonIcon = showList ? secIcon : icon;

  const handleClick = () => {
    setShowList(prevState => !prevState)
  }

  return (
    <div
      onClick={onClick || handleClick}
      className='z-20 select-none cursor-pointer relative text-[15px] font-semibold bg-transparent text-white hover:bg-black-hovered focus:bg-black-hovered rounded-full px-4 py-2 flex items-center justify-center gap-1 transition-all duration-250 ease-linear'
    >
      {order === '1' && buttonIcon}{text}{order === '2' && buttonIcon}
      {showList && 
      <Suspense fallback={''}>
        {listName === 'Company' &&  <CompanyList />}
        {listName === 'Products' && <ProductsList />}
      </Suspense>
      }
    </div>
  )
}

export default ListButton