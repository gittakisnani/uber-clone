import React from 'react'
import useWidth from '../hooks/useWidth'
import { useCompanyContext } from '../contexts/CompanyContext'
import { Link } from 'react-router-dom';

const CompanyList = () => {
  const width = useWidth();
  const companyList = useCompanyContext();
  const ULclassName = width >= 768 ?
  'flex flex-col w-48 absolute left-0 top-[3.2rem] py-1 bg-[#eee]' :
  'flex flex-col px-2 py-2 gap-3'
  const LiClassName = width >= 768 ?
  'py-2 px-2 flex items-center justify-start gap-2 hover:text-black text-slate-600 hover:bg-white-hovered' :
  'font-light text-slate-400'
  return (
    <ul className={ULclassName}>
        {companyList.map(([icon, text, link], index) => (
            <Link to={link} key={index}>
                <li 
                    className={LiClassName}
                >
                    {icon}{text}
                </li>
            </Link>
        ))}
    </ul>
  )
}

export default CompanyList