import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import React from 'react'
import Footer from "../components/Footer";
import { CompanyProvider } from '../contexts/CompanyContext'
import { ProductsProvider } from '../contexts/ProductsContext'
import { SelectedOptionsProvider } from "../contexts/SelctedOptions";
import Language from "../components/Language";

const Layout = () => {
  return (
    <React.Fragment>
      <CompanyProvider>
      <ProductsProvider>
      <SelectedOptionsProvider>
        <Header />
        <Language />
        <Outlet />
        <Footer />
      </SelectedOptionsProvider>
       </ProductsProvider>
      </CompanyProvider>
    </React.Fragment>
  )
}

export default Layout