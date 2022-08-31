import React, { createContext, useContext } from 'react'

const CompanyContext = createContext({});

export const CompanyProvider = ({ children }) => {
    const companyList = [
        ['', 'About Us', '/aboutus'],
        ['', 'Our Referring', '/referring'],
        ['', 'How Uber Works', '/how-uber-works'],
        ['', 'Global Citizenship', '/global-citizenship'],
        ['', 'News room', '/newsroom'],
        ['', 'Investor Relation', 'investor-relation'],
        ['', 'Blog', '/blog'],
        ['', 'careers', '/careers']
    ]
    return (
        <CompanyContext.Provider value={companyList}>
            {children}
        </CompanyContext.Provider>
    )
}
export const useCompanyContext = () => useContext(CompanyContext)